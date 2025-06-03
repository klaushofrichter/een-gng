# Slack Notification Workflow Troubleshooting

## Overview

The `slack-test-notification.yml` workflow sends automated Slack notifications when GitHub Pages tests complete. This document covers common issues and their solutions.

## Common Issues

### 1. Commit Messages with Quotes or Special Characters

**Problem**: Workflow fails with "GH: command not found" when commit messages contain double quotes, single quotes, or other special characters.

**Root Cause**: The shell script was trying to parse commit messages directly in the command, causing parsing errors when quotes were present.

**Solution**: Use environment variables to safely pass the commit message and proper escaping:

```yaml
- name: Prepare commit message
  id: commit-message
  env:
    COMMIT_MESSAGE: ${{ github.event.workflow_run.head_commit.message }}
  run: |
    # Use environment variable to avoid shell parsing issues
    # Replace newlines with spaces and properly escape for JSON
    message=$(echo "$COMMIT_MESSAGE" | tr '\n' ' ' | sed 's/"/\\"/g' | sed "s/'/\\'/g")
    
    echo "Original message: $COMMIT_MESSAGE"
    echo "Processed message: $message"
    echo "MESSAGE=$message" >> $GITHUB_OUTPUT
```

**Benefits**:
- ✅ Handles double quotes: `"Update test coverage"`
- ✅ Handles single quotes: `'Fix authentication'`
- ✅ Handles mixed quotes: `"Fix 'authentication' system"`
- ✅ Handles multi-line messages
- ✅ Handles special characters: `& < > | $ ( )`

### 2. Workflow Not Triggering

**Problem**: Slack notifications don't appear after test completion.

**Possible Causes**:
1. **Missing Slack webhook**: Check that `SLACK_WEBHOOK_URL` secret is configured
2. **Wrong workflow trigger**: Verify the workflow is triggered by the correct workflow name
3. **Branch mismatch**: Ensure the gh-pages branch exists and has the workflow file

**Debug Steps**:
```bash
# Check if the workflow file exists on gh-pages
git checkout gh-pages
ls -la .github/workflows/slack-test-notification.yml

# Check if secrets are configured
# (Go to GitHub Settings > Secrets and Variables > Actions)
```

### 3. Incorrect Information in Notifications

**Problem**: Wrong version, branch, or other metadata in Slack messages.

**Solution**: Verify the `package.json` on gh-pages branch contains correct metadata:
- `version`: Current version number
- `name`: Repository name
- `lastCommit`: Timestamp of last commit

### 4. Duration Calculation Issues

**Problem**: Test duration shows as "unknown" or incorrect value.

**Cause**: Missing or invalid timestamps from the workflow run.

**Fix**: The workflow uses these timestamps:
- Start: `${{ github.event.workflow_run.run_started_at }}`
- End: `${{ github.event.workflow_run.updated_at }}`

If these are missing, duration will show as "unknown".

## Testing the Fix

To test commit message handling, try commits with various special characters:

```bash
# Test with double quotes
git commit -m "Update test coverage to handle \"quoted\" strings"

# Test with single quotes
git commit -m "Fix authentication 'token' validation"

# Test with mixed quotes and special characters
git commit -m "Enhance error handling & logging for \"edge cases\" with <special> chars"
```

## Workflow Sequence

1. **Test Workflow Completes**: `test-gh-pages.yml` finishes testing
2. **Slack Workflow Triggers**: `slack-test-notification.yml` starts automatically
3. **Metadata Extraction**: Reads version, branch, commit info from gh-pages `package.json`
4. **Message Processing**: Safely escapes commit message for JSON
5. **Slack Notification**: Sends formatted message with test results

## Configuration Requirements

### Required Secrets
- `SLACK_WEBHOOK_URL`: Your Slack app's incoming webhook URL

### Required Files on gh-pages Branch
- `package.json`: Must contain version, name, and lastCommit fields
- `.github/workflows/slack-test-notification.yml`: This workflow file

### Workflow Dependencies
- Triggers on completion of "Test GH Pages with Playwright" workflow
- Requires successful checkout of gh-pages branch

## Example Notification Format

```
✅ GH Pages Tests Passed on een-gng (v0.2.37)

Repository: klaushofrichter/een-gng
Branch: gh-pages
Build Date: Mon Jun  3 14:35:26 CDT 2025

Site URL: https://klaushofrichter.github.io/een-gng/

Version: v0.2.37
Status: success
Duration: 3 minutes

Commit Message: Fix Slack notification workflow to handle commit messages with "quotes"

Workflow Run: View Test Details

Test completed at: Mon Jun  3 14:38:45 CDT 2025
```

## Maintenance Notes

- **Escaping Strategy**: Uses `sed` to escape quotes for JSON compatibility
- **Timezone**: Converts UTC timestamps to Central Time (America/Chicago)
- **Error Handling**: Graceful fallbacks for missing data (e.g., "unknown" duration)
- **Security**: Uses environment variables to prevent injection attacks

## Related Issues in Other Workflows

### Heredoc Syntax Problems

**Issue**: Other workflows (like `package.yml`) may experience similar shell parsing errors with heredoc syntax.

**Symptoms**:
```
/home/runner/work/_temp/xxx.sh: line XX: warning: here-document at line X delimited by end-of-file (wanted `EOF')
/home/runner/work/_temp/xxx.sh: line XX: syntax error: unexpected end of file
Error: Process completed with exit code 2.
```

**Root Cause**: GitHub Actions YAML parsing conflicts with bash heredoc syntax `<< 'EOF'`.

**Solution**: Replace heredoc blocks with `node -e` approach:

```yaml
# ❌ Problematic heredoc syntax
node << 'EOF'
const fs = require('fs');
const data = "some string with ${variables}";
fs.writeFileSync('output.txt', data);
EOF

# ✅ Fixed with node -e
node -e "
  const fs = require('fs');
  const data = \`some string with \${variables}\`;
  fs.writeFileSync('output.txt', data);
"
```

**Key Changes**:
- Replace `<< 'EOF'` with `-e "`
- Replace closing `EOF` with `"`
- Escape backticks: `` ` `` becomes `` \` ``
- Escape template literals: `${var}` becomes `\${var}`

This pattern applies to any workflow using inline Node.js scripts in shell steps. 