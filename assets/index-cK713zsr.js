const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-sOxiUkBH.js","assets/package-BqWQdztF.js","assets/Direct-nm6aY8yW.js","assets/user-Bzr82x8i.js","assets/Home-BAhJqmrO.js","assets/cameras-CS_FlZTu.js","assets/Capture-mLNbuxT6.js","assets/Capture-DcACQPKs.css","assets/About-CPbefs9b.js","assets/Settings-BUjfR7nF.js","assets/Profile-rfXgMsB8.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},as=[],cn=()=>{},Ov=()=>!1,ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jc=t=>t.startsWith("onUpdate:"),_t=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dv=Object.prototype.hasOwnProperty,be=(t,e)=>Dv.call(t,e),oe=Array.isArray,ls=t=>Fi(t)==="[object Map]",Ra=t=>Fi(t)==="[object Set]",hf=t=>Fi(t)==="[object Date]",de=t=>typeof t=="function",Ke=t=>typeof t=="string",pn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Gp=t=>(Oe(t)||de(t))&&de(t.then)&&de(t.catch),Qp=Object.prototype.toString,Fi=t=>Qp.call(t),Vv=t=>Fi(t).slice(8,-1),Xp=t=>Fi(t)==="[object Object]",eu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lv=/-(\w)/g,Wt=Sa(t=>t.replace(Lv,(e,n)=>n?n.toUpperCase():"")),Mv=/\B([A-Z])/g,jr=Sa(t=>t.replace(Mv,"-$1").toLowerCase()),Pa=Sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nl=Sa(t=>t?`on${Pa(t)}`:""),rr=(t,e)=>!Object.is(t,e),xo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},oc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ff;const Ca=()=>ff||(ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ka(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?$v(r):ka(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Oe(t))return t}const Uv=/;(?![^(]*\))/g,Fv=/:([^]+)/,Bv=/\/\*[^]*?\*\//g;function $v(t){const e={};return t.replace(Bv,"").split(Uv).forEach(n=>{if(n){const r=n.split(Fv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function rt(t){let e="";if(Ke(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=rt(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=Yc(jv);function Yp(t){return!!t||t===""}function Hv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=xa(t[r],e[r]);return n}function xa(t,e){if(t===e)return!0;let n=hf(t),r=hf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=pn(t),r=pn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?Hv(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!xa(t[o],e[o]))return!1}}return String(t)===String(e)}function zv(t,e){return t.findIndex(n=>xa(n,e))}const Jp=t=>!!(t&&t.__v_isRef===!0),No=t=>Ke(t)?t:t==null?"":oe(t)||Oe(t)&&(t.toString===Qp||!de(t.toString))?Jp(t)?No(t.value):JSON.stringify(t,Zp,2):String(t),Zp=(t,e)=>Jp(e)?Zp(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ol(r,i)+" =>"]=s,n),{})}:Ra(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ol(n))}:pn(e)?Ol(e):Oe(e)&&!oe(e)&&!Xp(e)?String(e):e,Ol=(t,e="")=>{var n;return pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class eg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){++this._on===1&&(this.prevScope=dt,dt=this)}off(){this._on>0&&--this._on===0&&(dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function tg(t){return new eg(t)}function ng(){return dt}function Wv(t,e=!1){dt&&dt.cleanups.push(t)}let Ne;const Dl=new WeakSet;class rg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&dt.active&&dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dl.has(this)&&(Dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,df(this),og(this);const e=Ne,n=Jt;Ne=this,Jt=!0;try{return this.fn()}finally{ag(this),Ne=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ru(e);this.deps=this.depsTail=void 0,df(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ac(this)&&this.run()}get dirty(){return ac(this)}}let sg=0,ii,oi;function ig(t,e=!1){if(t.flags|=8,e){t.next=oi,oi=t;return}t.next=ii,ii=t}function tu(){sg++}function nu(){if(--sg>0)return;if(oi){let e=oi;for(oi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ii;){let e=ii;for(ii=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function og(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ag(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ru(r),Kv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ac(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ti)||(t.globalVersion=Ti,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ac(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Jt;Ne=t,Jt=!0;try{og(t);const s=t.fn(t._value);(e.version===0||rr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Jt=r,ag(t),t.flags&=-3}}function ru(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ru(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Kv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const cg=[];function Cn(){cg.push(Jt),Jt=!1}function kn(){const t=cg.pop();Jt=t===void 0?!0:t}function df(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let Ti=0;class Gv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!Jt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new Gv(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,ug(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,Ti++,this.notify(e)}notify(e){tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nu()}}}function ug(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ug(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Go=new WeakMap,Or=Symbol(""),lc=Symbol(""),Ii=Symbol("");function gt(t,e,n){if(Jt&&Ne){let r=Go.get(t);r||Go.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new su),s.map=r,s.key=n),s.track()}}function An(t,e,n,r,s,i){const o=Go.get(t);if(!o){Ti++;return}const l=c=>{c&&c.trigger()};if(tu(),e==="clear")o.forEach(l);else{const c=oe(t),u=c&&eu(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ii||!pn(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ii)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Or)),ls(t)&&l(o.get(lc)));break;case"delete":c||(l(o.get(Or)),ls(t)&&l(o.get(lc)));break;case"set":ls(t)&&l(o.get(Or));break}}nu()}function Qv(t,e){const n=Go.get(t);return n&&n.get(e)}function Yr(t){const e=Ie(t);return e===t?e:(gt(e,"iterate",Ii),qt(t)?e:e.map(it))}function Na(t){return gt(t=Ie(t),"iterate",Ii),t}const Xv={__proto__:null,[Symbol.iterator](){return Vl(this,Symbol.iterator,it)},concat(...t){return Yr(this).concat(...t.map(e=>oe(e)?Yr(e):e))},entries(){return Vl(this,"entries",t=>(t[1]=it(t[1]),t))},every(t,e){return En(this,"every",t,e,void 0,arguments)},filter(t,e){return En(this,"filter",t,e,n=>n.map(it),arguments)},find(t,e){return En(this,"find",t,e,it,arguments)},findIndex(t,e){return En(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return En(this,"findLast",t,e,it,arguments)},findLastIndex(t,e){return En(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return En(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ll(this,"includes",t)},indexOf(...t){return Ll(this,"indexOf",t)},join(t){return Yr(this).join(t)},lastIndexOf(...t){return Ll(this,"lastIndexOf",t)},map(t,e){return En(this,"map",t,e,void 0,arguments)},pop(){return Qs(this,"pop")},push(...t){return Qs(this,"push",t)},reduce(t,...e){return pf(this,"reduce",t,e)},reduceRight(t,...e){return pf(this,"reduceRight",t,e)},shift(){return Qs(this,"shift")},some(t,e){return En(this,"some",t,e,void 0,arguments)},splice(...t){return Qs(this,"splice",t)},toReversed(){return Yr(this).toReversed()},toSorted(t){return Yr(this).toSorted(t)},toSpliced(...t){return Yr(this).toSpliced(...t)},unshift(...t){return Qs(this,"unshift",t)},values(){return Vl(this,"values",it)}};function Vl(t,e,n){const r=Na(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Yv=Array.prototype;function En(t,e,n,r,s,i){const o=Na(t),l=o!==t&&!qt(t),c=o[e];if(c!==Yv[e]){const p=c.apply(t,i);return l?it(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,it(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function pf(t,e,n,r){const s=Na(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,it(l),c,t)}),s[e](i,...r)}function Ll(t,e,n){const r=Ie(t);gt(r,"iterate",Ii);const s=r[e](...n);return(s===-1||s===!1)&&au(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Qs(t,e,n=[]){Cn(),tu();const r=Ie(t)[e].apply(t,n);return nu(),kn(),r}const Jv=Yc("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pn));function Zv(t){pn(t)||(t=String(t));const e=Ie(this);return gt(e,"has",t),e.hasOwnProperty(t)}class fg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cE:mg:i?gg:pg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let c;if(o&&(c=Xv[n]))return c;if(n==="hasOwnProperty")return Zv}const l=Reflect.get(e,n,He(e)?e:r);return(pn(n)?hg.has(n):Jv(n))||(s||gt(e,"get",n),i)?l:He(l)?o&&eu(n)?l:l.value:Oe(l)?s?yg(l):Bi(l):l}}class dg extends fg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ur(i);if(!qt(r)&&!ur(r)&&(i=Ie(i),r=Ie(r)),!oe(e)&&He(i)&&!He(r))return c?!1:(i.value=r,!0)}const o=oe(e)&&eu(n)?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,He(e)?e:s);return e===Ie(s)&&(o?rr(r,i)&&An(e,"set",n,r):An(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&An(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pn(n)||!hg.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",oe(e)?"length":Or),Reflect.ownKeys(e)}}class eE extends fg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tE=new dg,nE=new eE,rE=new dg(!0);const cc=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function sE(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=ls(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?cc:e?Qo:it;return!e&&gt(i,"iterate",c?lc:Or),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iE(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);t||(rr(s,l)&&gt(o,"get",s),gt(o,"get",l));const{has:c}=Eo(o),u=e?cc:t?Qo:it;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&gt(Ie(s),"iterate",Or),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);return t||(rr(s,l)&&gt(o,"has",s),gt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ie(l),u=e?cc:t?Qo:it;return!t&&gt(c,"iterate",Or),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return _t(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!qt(s)&&!ur(s)&&(s=Ie(s));const i=Ie(this);return Eo(i).has.call(i,s)||(i.add(s),An(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!ur(i)&&(i=Ie(i));const o=Ie(this),{has:l,get:c}=Eo(o);let u=l.call(o,s);u||(s=Ie(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?rr(i,f)&&An(o,"set",s,i):An(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:l}=Eo(i);let c=o.call(i,s);c||(s=Ie(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&An(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&An(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=sE(s,t,e)}),n}function iu(t,e){const n=iE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const oE={get:iu(!1,!1)},aE={get:iu(!1,!0)},lE={get:iu(!0,!1)};const pg=new WeakMap,gg=new WeakMap,mg=new WeakMap,cE=new WeakMap;function uE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hE(t){return t.__v_skip||!Object.isExtensible(t)?0:uE(Vv(t))}function Bi(t){return ur(t)?t:ou(t,!1,tE,oE,pg)}function _g(t){return ou(t,!1,rE,aE,gg)}function yg(t){return ou(t,!0,nE,lE,mg)}function ou(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=hE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function sr(t){return ur(t)?sr(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function au(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function lu(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&oc(t,"__v_skip",!0),t}const it=t=>Oe(t)?Bi(t):t,Qo=t=>Oe(t)?yg(t):t;function He(t){return t?t.__v_isRef===!0:!1}function Pt(t){return vg(t,!1)}function fE(t){return vg(t,!0)}function vg(t,e){return He(t)?t:new dE(t,e)}class dE{constructor(e,n){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:it(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||ur(e);e=r?e:Ie(e),rr(e,n)&&(this._rawValue=e,this._value=r?e:it(e),this.dep.trigger())}}function Xe(t){return He(t)?t.value:t}const pE={get:(t,e,n)=>e==="__v_raw"?t:Xe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Eg(t){return sr(t)?t:new Proxy(t,pE)}function gE(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=_E(t,n);return e}class mE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qv(Ie(this._object),this._key)}}function _E(t,e,n){const r=t[e];return He(r)?r:new mE(t,e,n)}class yE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return ig(this,!0),!0}get value(){const e=this.dep.track();return lg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vE(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new yE(r,s,n)}const To={},Xo=new WeakMap;let Pr;function EE(t,e=!1,n=Pr){if(n){let r=Xo.get(n);r||Xo.set(n,r=[]),r.push(t)}}function wE(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=j=>s?j:qt(j)||s===!1||s===0?bn(j,1):bn(j);let f,p,g,_,R=!1,x=!1;if(He(t)?(p=()=>t.value,R=qt(t)):sr(t)?(p=()=>u(t),R=!0):oe(t)?(x=!0,R=t.some(j=>sr(j)||qt(j)),p=()=>t.map(j=>{if(He(j))return j.value;if(sr(j))return u(j);if(de(j))return c?c(j,2):j()})):de(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Cn();try{g()}finally{kn()}}const j=Pr;Pr=f;try{return c?c(t,3,[_]):t(_)}finally{Pr=j}}:p=cn,e&&s){const j=p,te=s===!0?1/0:s;p=()=>bn(j(),te)}const S=ng(),B=()=>{f.stop(),S&&S.active&&Zc(S.effects,f)};if(i&&e){const j=e;e=(...te)=>{j(...te),B()}}let U=x?new Array(t.length).fill(To):To;const $=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const te=f.run();if(s||R||(x?te.some((G,I)=>rr(G,U[I])):rr(te,U))){g&&g();const G=Pr;Pr=f;try{const I=[te,U===To?void 0:x&&U[0]===To?[]:U,_];U=te,c?c(e,3,I):e(...I)}finally{Pr=G}}}else f.run()};return l&&l($),f=new rg(p),f.scheduler=o?()=>o($,!1):$,_=j=>EE(j,!1,f),g=f.onStop=()=>{const j=Xo.get(f);if(j){if(c)c(j,4);else for(const te of j)te();Xo.delete(f)}},e?r?$(!0):U=f.run():o?o($.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function bn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,He(t))bn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(Ra(t)||ls(t))t.forEach(r=>{bn(r,e,n)});else if(Xp(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $i(t,e,n,r){try{return r?t(...r):t()}catch(s){Oa(s,e,n)}}function gn(t,e,n,r){if(de(t)){const s=$i(t,e,n,r);return s&&Gp(s)&&s.catch(i=>{Oa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function Oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Cn(),$i(i,null,10,[t,c,u]),kn();return}}TE(t,n,s,r,o)}function TE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let sn=-1;const cs=[];let Gn=null,es=0;const wg=Promise.resolve();let Yo=null;function Da(t){const e=Yo||wg;return t?e.then(this?t.bind(this):t):e}function IE(t){let e=sn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=Ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function cu(t){if(!(t.flags&1)){const e=Ai(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=Ai(n)?Tt.push(t):Tt.splice(IE(e),0,t),t.flags|=1,Tg()}}function Tg(){Yo||(Yo=wg.then(Ag))}function AE(t){oe(t)?cs.push(...t):Gn&&t.id===-1?Gn.splice(es+1,0,t):t.flags&1||(cs.push(t),t.flags|=1),Tg()}function gf(t,e,n=sn+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ig(t){if(cs.length){const e=[...new Set(cs)].sort((n,r)=>Ai(n)-Ai(r));if(cs.length=0,Gn){Gn.push(...e);return}for(Gn=e,es=0;es<Gn.length;es++){const n=Gn[es];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,es=0}}const Ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ag(t){try{for(sn=0;sn<Tt.length;sn++){const e=Tt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<Tt.length;sn++){const e=Tt[sn];e&&(e.flags&=-2)}sn=-1,Tt.length=0,Ig(),Yo=null,(Tt.length||cs.length)&&Ag()}}let kt=null,bg=null;function Jo(t){const e=kt;return kt=t,bg=t&&t.type.__scopeId||null,e}function Qt(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rf(-1);const i=Jo(e);let o;try{o=t(...s)}finally{Jo(i),r._d&&Rf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function x1(t,e){if(kt===null)return t;const n=Ua(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=ke]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Cn(),gn(c,n,8,[t.el,l,t,e]),kn())}}const bE=Symbol("_vte"),RE=t=>t.__isTeleport;function uu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,uu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rg(t,e){return de(t)?_t({name:t.name},e,{setup:t}):t}function Sg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ai(t,e,n,r,s=!1){if(oe(t)){t.forEach((R,x)=>ai(R,e&&(oe(e)?e[x]:e),n,r,s));return}if(li(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ai(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ua(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===ke?l.refs={}:l.refs,p=l.setupState,g=Ie(p),_=p===ke?()=>!1:R=>be(g,R);if(u!=null&&u!==c&&(Ke(u)?(f[u]=null,_(u)&&(p[u]=null)):He(u)&&(u.value=null)),de(c))$i(c,l,12,[o,f]);else{const R=Ke(c),x=He(c);if(R||x){const S=()=>{if(t.f){const B=R?_(c)?p[c]:f[c]:c.value;s?oe(B)&&Zc(B,i):oe(B)?B.includes(i)||B.push(i):R?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else R?(f[c]=o,_(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,Lt(S,n)):S()}}}Ca().requestIdleCallback;Ca().cancelIdleCallback;const li=t=>!!t.type.__asyncLoader,Pg=t=>t.type.__isKeepAlive;function SE(t,e){Cg(t,"a",e)}function PE(t,e){Cg(t,"da",e)}function Cg(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Pg(s.parent.vnode)&&CE(r,e,n,s),s=s.parent}}function CE(t,e,n,r){const s=Va(e,t,r,!0);hu(()=>{Zc(r[e],s)},n)}function Va(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Cn();const l=ji(n),c=gn(e,n,t,o);return l(),kn(),c});return r?s.unshift(i):s.push(i),i}}const Mn=t=>(e,n=ot)=>{(!Ri||t==="sp")&&Va(t,(...r)=>e(...r),n)},kE=Mn("bm"),kg=Mn("m"),xE=Mn("bu"),NE=Mn("u"),OE=Mn("bum"),hu=Mn("um"),DE=Mn("sp"),VE=Mn("rtg"),LE=Mn("rtc");function ME(t,e=ot){Va("ec",t,e)}const UE="components";function mf(t,e){return BE(UE,t,!0,e)||t}const FE=Symbol.for("v-ndc");function BE(t,e,n=!0,r=!1){const s=kt||ot;if(s){const i=s.type;{const l=Pw(i,!1);if(l&&(l===e||l===Wt(e)||l===Pa(Wt(e))))return i}const o=_f(s[t]||i[t],e)||_f(s.appContext[t],e);return!o&&r?i:o}}function _f(t,e){return t&&(t[e]||t[Wt(e)]||t[Pa(Wt(e))])}function N1(t,e,n,r){let s;const i=n,o=oe(t);if(o||Ke(t)){const l=o&&sr(t);let c=!1,u=!1;l&&(c=!qt(t),u=ur(t),t=Na(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?Qo(it(t[f])):it(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const uc=t=>t?Xg(t)?Ua(t):uc(t.parent):null,ci=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ng(t),$forceUpdate:t=>t.f||(t.f=()=>{cu(t.update)}),$nextTick:t=>t.n||(t.n=Da.bind(t.proxy)),$watch:t=>lw.bind(t)}),Ml=(t,e)=>t!==ke&&!t.__isScriptSetup&&be(t,e),$E={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ml(r,e))return o[e]=1,r[e];if(s!==ke&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==ke&&be(n,e))return o[e]=4,n[e];hc&&(o[e]=0)}}const f=ci[e];let p,g;if(f)return e==="$attrs"&&gt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==ke&&be(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ml(s,e)?(s[e]=n,!0):r!==ke&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==ke&&be(t,o)||Ml(e,o)||(l=i[0])&&be(l,o)||be(r,o)||be(ci,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yf(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hc=!0;function jE(t){const e=Ng(t),n=t.proxy,r=t.ctx;hc=!1,e.beforeCreate&&vf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:R,activated:x,deactivated:S,beforeDestroy:B,beforeUnmount:U,destroyed:$,unmounted:j,render:te,renderTracked:G,renderTriggered:I,errorCaptured:y,serverPrefetch:v,expose:A,inheritAttrs:b,components:P,directives:w,filters:Je}=e;if(u&&qE(u,r,null),o)for(const ce in o){const me=o[ce];de(me)&&(r[ce]=me.bind(n))}if(s){const ce=s.call(n,n);Oe(ce)&&(t.data=Bi(ce))}if(hc=!0,i)for(const ce in i){const me=i[ce],Dt=de(me)?me.bind(n,n):de(me.get)?me.get.bind(n,n):cn,Kt=!de(me)&&de(me.set)?me.set.bind(n):cn,Bt=It({get:Dt,set:Kt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Me=>Bt.value=Me})}if(l)for(const ce in l)xg(l[ce],r,n,ce);if(c){const ce=de(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(me=>{Oo(me,ce[me])})}f&&vf(f,t,"c");function xe(ce,me){oe(me)?me.forEach(Dt=>ce(Dt.bind(n))):me&&ce(me.bind(n))}if(xe(kE,p),xe(kg,g),xe(xE,_),xe(NE,R),xe(SE,x),xe(PE,S),xe(ME,y),xe(LE,G),xe(VE,I),xe(OE,U),xe(hu,j),xe(DE,v),oe(A))if(A.length){const ce=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(ce,me,{get:()=>n[me],set:Dt=>n[me]=Dt})})}else t.exposed||(t.exposed={});te&&t.render===cn&&(t.render=te),b!=null&&(t.inheritAttrs=b),P&&(t.components=P),w&&(t.directives=w),v&&Sg(t)}function qE(t,e,n=cn){oe(t)&&(t=fc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Ht(s.from||r,s.default,!0):i=Ht(s.from||r):i=Ht(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vf(t,e,n){gn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xg(t,e,n,r){let s=r.includes(".")?zg(n,r):()=>n[r];if(Ke(t)){const i=e[t];de(i)&&ui(s,i)}else if(de(t))ui(s,t.bind(n));else if(Oe(t))if(oe(t))t.forEach(i=>xg(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&ui(s,i,t)}}function Ng(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Zo(c,u,o,!0)),Zo(c,e,o)),Oe(e)&&i.set(e,c),c}function Zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zo(t,i,n,!0),s&&s.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=HE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const HE={data:Ef,props:wf,emits:wf,methods:Zs,computed:Zs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Zs,directives:Zs,watch:WE,provide:Ef,inject:zE};function Ef(t,e){return e?t?function(){return _t(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function zE(t,e){return Zs(fc(t),fc(e))}function fc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?_t(Object.create(null),t,e):e}function wf(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:_t(Object.create(null),yf(t),yf(e??{})):e}function WE(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Og(){return{app:null,config:{isNativeTag:Ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KE=0;function GE(t,e){return function(r,s=null){de(r)||(r=_t({},r)),s!=null&&!Oe(s)&&(s=null);const i=Og(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:KE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(u,...p)):de(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const _=u._ceVNode||Ve(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,u._container=f,f.__vue_app__=u,Ua(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(gn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Dr;Dr=u;try{return f()}finally{Dr=p}}};return u}}let Dr=null;function Oo(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=ot||kt;if(r||Dr){let s=Dr?Dr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function QE(){return!!(ot||kt||Dr)}const Dg={},Vg=()=>Object.create(Dg),Lg=t=>Object.getPrototypeOf(t)===Dg;function XE(t,e,n,r=!1){const s={},i=Vg();t.propsDefaults=Object.create(null),Mg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:_g(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function YE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ie(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(La(t.emitsOptions,g))continue;const _=e[g];if(c)if(be(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const R=Wt(g);s[R]=dc(c,l,R,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{Mg(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!be(e,p)&&((f=jr(p))===p||!be(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=dc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&An(t.attrs,"set","")}function Mg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(si(c))continue;const u=e[c];let f;s&&be(s,f=Wt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:La(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ie(n),u=l||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=dc(s,c,p,u[p],t,!be(u,p))}}return o}function dc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=be(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ji(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===jr(n))&&(r=!0))}return r}const JE=new WeakMap;function Ug(t,e,n=!1){const r=n?JE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!de(t)){const f=p=>{c=!0;const[g,_]=Ug(p,e,!0);_t(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Oe(t)&&r.set(t,as),as;if(oe(i))for(let f=0;f<i.length;f++){const p=Wt(i[f]);Tf(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=Wt(f);if(Tf(p)){const g=i[f],_=o[p]=oe(g)||de(g)?{type:g}:_t({},g),R=_.type;let x=!1,S=!0;if(oe(R))for(let B=0;B<R.length;++B){const U=R[B],$=de(U)&&U.name;if($==="Boolean"){x=!0;break}else $==="String"&&(S=!1)}else x=de(R)&&R.name==="Boolean";_[0]=x,_[1]=S,(x||be(_,"default"))&&l.push(p)}}const u=[o,l];return Oe(t)&&r.set(t,u),u}function Tf(t){return t[0]!=="$"&&!si(t)}const fu=t=>t[0]==="_"||t==="$stable",du=t=>oe(t)?t.map(an):[an(t)],ZE=(t,e,n)=>{if(e._n)return e;const r=Qt((...s)=>du(e(...s)),n);return r._c=!1,r},Fg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fu(s))continue;const i=t[s];if(de(i))e[s]=ZE(s,i,r);else if(i!=null){const o=du(i);e[s]=()=>o}}},Bg=(t,e)=>{const n=du(e);t.slots.default=()=>n},$g=(t,e,n)=>{for(const r in e)(n||!fu(r))&&(t[r]=e[r])},ew=(t,e,n)=>{const r=t.slots=Vg();if(t.vnode.shapeFlag&32){const s=e.__;s&&oc(r,"__",s,!0);const i=e._;i?($g(r,e,n),n&&oc(r,"_",i,!0)):Fg(e,r)}else e&&Bg(t,e)},tw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:$g(s,e,n):(i=!e.$stable,Fg(e,s)),o=e}else e&&(Bg(t,e),o={default:1});if(i)for(const l in s)!fu(l)&&o[l]==null&&delete s[l]},Lt=gw;function nw(t){return rw(t)}function rw(t,e){const n=Ca();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=cn,insertStaticContent:R}=t,x=(E,T,C,D=null,F=null,L=null,Q=void 0,z=null,H=!!T.dynamicChildren)=>{if(E===T)return;E&&!Xs(E,T)&&(D=O(E),Me(E,F,L,!0),E=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:q,ref:re,shapeFlag:K}=T;switch(q){case Ma:S(E,T,C,D);break;case hr:B(E,T,C,D);break;case Do:E==null&&U(T,C,D,Q);break;case In:P(E,T,C,D,F,L,Q,z,H);break;default:K&1?te(E,T,C,D,F,L,Q,z,H):K&6?w(E,T,C,D,F,L,Q,z,H):(K&64||K&128)&&q.process(E,T,C,D,F,L,Q,z,H,ee)}re!=null&&F?ai(re,E&&E.ref,L,T||E,!T):re==null&&E&&E.ref!=null&&ai(E.ref,null,L,E,!0)},S=(E,T,C,D)=>{if(E==null)r(T.el=l(T.children),C,D);else{const F=T.el=E.el;T.children!==E.children&&u(F,T.children)}},B=(E,T,C,D)=>{E==null?r(T.el=c(T.children||""),C,D):T.el=E.el},U=(E,T,C,D)=>{[E.el,E.anchor]=R(E.children,T,C,D,E.el,E.anchor)},$=({el:E,anchor:T},C,D)=>{let F;for(;E&&E!==T;)F=g(E),r(E,C,D),E=F;r(T,C,D)},j=({el:E,anchor:T})=>{let C;for(;E&&E!==T;)C=g(E),s(E),E=C;s(T)},te=(E,T,C,D,F,L,Q,z,H)=>{T.type==="svg"?Q="svg":T.type==="math"&&(Q="mathml"),E==null?G(T,C,D,F,L,Q,z,H):v(E,T,F,L,Q,z,H)},G=(E,T,C,D,F,L,Q,z)=>{let H,q;const{props:re,shapeFlag:K,transition:ne,dirs:le}=E;if(H=E.el=o(E.type,L,re&&re.is,re),K&8?f(H,E.children):K&16&&y(E.children,H,null,D,F,Ul(E,L),Q,z),le&&Rr(E,null,D,"created"),I(H,E,E.scopeId,Q,D),re){for(const pe in re)pe!=="value"&&!si(pe)&&i(H,pe,null,re[pe],L,D);"value"in re&&i(H,"value",null,re.value,L),(q=re.onVnodeBeforeMount)&&rn(q,D,E)}le&&Rr(E,null,D,"beforeMount");const ie=sw(F,ne);ie&&ne.beforeEnter(H),r(H,T,C),((q=re&&re.onVnodeMounted)||ie||le)&&Lt(()=>{q&&rn(q,D,E),ie&&ne.enter(H),le&&Rr(E,null,D,"mounted")},F)},I=(E,T,C,D,F)=>{if(C&&_(E,C),D)for(let L=0;L<D.length;L++)_(E,D[L]);if(F){let L=F.subTree;if(T===L||Kg(L.type)&&(L.ssContent===T||L.ssFallback===T)){const Q=F.vnode;I(E,Q,Q.scopeId,Q.slotScopeIds,F.parent)}}},y=(E,T,C,D,F,L,Q,z,H=0)=>{for(let q=H;q<E.length;q++){const re=E[q]=z?Qn(E[q]):an(E[q]);x(null,re,T,C,D,F,L,Q,z)}},v=(E,T,C,D,F,L,Q)=>{const z=T.el=E.el;let{patchFlag:H,dynamicChildren:q,dirs:re}=T;H|=E.patchFlag&16;const K=E.props||ke,ne=T.props||ke;let le;if(C&&Sr(C,!1),(le=ne.onVnodeBeforeUpdate)&&rn(le,C,T,E),re&&Rr(T,E,C,"beforeUpdate"),C&&Sr(C,!0),(K.innerHTML&&ne.innerHTML==null||K.textContent&&ne.textContent==null)&&f(z,""),q?A(E.dynamicChildren,q,z,C,D,Ul(T,F),L):Q||me(E,T,z,null,C,D,Ul(T,F),L,!1),H>0){if(H&16)b(z,K,ne,C,F);else if(H&2&&K.class!==ne.class&&i(z,"class",null,ne.class,F),H&4&&i(z,"style",K.style,ne.style,F),H&8){const ie=T.dynamicProps;for(let pe=0;pe<ie.length;pe++){const ve=ie[pe],Ze=K[ve],et=ne[ve];(et!==Ze||ve==="value")&&i(z,ve,Ze,et,F,C)}}H&1&&E.children!==T.children&&f(z,T.children)}else!Q&&q==null&&b(z,K,ne,C,F);((le=ne.onVnodeUpdated)||re)&&Lt(()=>{le&&rn(le,C,T,E),re&&Rr(T,E,C,"updated")},D)},A=(E,T,C,D,F,L,Q)=>{for(let z=0;z<T.length;z++){const H=E[z],q=T[z],re=H.el&&(H.type===In||!Xs(H,q)||H.shapeFlag&198)?p(H.el):C;x(H,q,re,null,D,F,L,Q,!0)}},b=(E,T,C,D,F)=>{if(T!==C){if(T!==ke)for(const L in T)!si(L)&&!(L in C)&&i(E,L,T[L],null,F,D);for(const L in C){if(si(L))continue;const Q=C[L],z=T[L];Q!==z&&L!=="value"&&i(E,L,z,Q,F,D)}"value"in C&&i(E,"value",T.value,C.value,F)}},P=(E,T,C,D,F,L,Q,z,H)=>{const q=T.el=E?E.el:l(""),re=T.anchor=E?E.anchor:l("");let{patchFlag:K,dynamicChildren:ne,slotScopeIds:le}=T;le&&(z=z?z.concat(le):le),E==null?(r(q,C,D),r(re,C,D),y(T.children||[],C,re,F,L,Q,z,H)):K>0&&K&64&&ne&&E.dynamicChildren?(A(E.dynamicChildren,ne,C,F,L,Q,z),(T.key!=null||F&&T===F.subTree)&&jg(E,T,!0)):me(E,T,C,re,F,L,Q,z,H)},w=(E,T,C,D,F,L,Q,z,H)=>{T.slotScopeIds=z,E==null?T.shapeFlag&512?F.ctx.activate(T,C,D,Q,H):Je(T,C,D,F,L,Q,H):bt(E,T,H)},Je=(E,T,C,D,F,L,Q)=>{const z=E.component=Iw(E,D,F);if(Pg(E)&&(z.ctx.renderer=ee),Aw(z,!1,Q),z.asyncDep){if(F&&F.registerDep(z,xe,Q),!E.el){const H=z.subTree=Ve(hr);B(null,H,T,C)}}else xe(z,E,T,C,F,L,Q)},bt=(E,T,C)=>{const D=T.component=E.component;if(dw(E,T,C))if(D.asyncDep&&!D.asyncResolved){ce(D,T,C);return}else D.next=T,D.update();else T.el=E.el,D.vnode=T},xe=(E,T,C,D,F,L,Q)=>{const z=()=>{if(E.isMounted){let{next:K,bu:ne,u:le,parent:ie,vnode:pe}=E;{const ct=qg(E);if(ct){K&&(K.el=pe.el,ce(E,K,Q)),ct.asyncDep.then(()=>{E.isUnmounted||z()});return}}let ve=K,Ze;Sr(E,!1),K?(K.el=pe.el,ce(E,K,Q)):K=pe,ne&&xo(ne),(Ze=K.props&&K.props.onVnodeBeforeUpdate)&&rn(Ze,ie,K,pe),Sr(E,!0);const et=Af(E),$t=E.subTree;E.subTree=et,x($t,et,p($t.el),O($t),E,F,L),K.el=et.el,ve===null&&pw(E,et.el),le&&Lt(le,F),(Ze=K.props&&K.props.onVnodeUpdated)&&Lt(()=>rn(Ze,ie,K,pe),F)}else{let K;const{el:ne,props:le}=T,{bm:ie,m:pe,parent:ve,root:Ze,type:et}=E,$t=li(T);Sr(E,!1),ie&&xo(ie),!$t&&(K=le&&le.onVnodeBeforeMount)&&rn(K,ve,T),Sr(E,!0);{Ze.ce&&Ze.ce._def.shadowRoot!==!1&&Ze.ce._injectChildStyle(et);const ct=E.subTree=Af(E);x(null,ct,C,D,E,F,L),T.el=ct.el}if(pe&&Lt(pe,F),!$t&&(K=le&&le.onVnodeMounted)){const ct=T;Lt(()=>rn(K,ve,ct),F)}(T.shapeFlag&256||ve&&li(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&Lt(E.a,F),E.isMounted=!0,T=C=D=null}};E.scope.on();const H=E.effect=new rg(z);E.scope.off();const q=E.update=H.run.bind(H),re=E.job=H.runIfDirty.bind(H);re.i=E,re.id=E.uid,H.scheduler=()=>cu(re),Sr(E,!0),q()},ce=(E,T,C)=>{T.component=E;const D=E.vnode.props;E.vnode=T,E.next=null,YE(E,T.props,D,C),tw(E,T.children,C),Cn(),gf(E),kn()},me=(E,T,C,D,F,L,Q,z,H=!1)=>{const q=E&&E.children,re=E?E.shapeFlag:0,K=T.children,{patchFlag:ne,shapeFlag:le}=T;if(ne>0){if(ne&128){Kt(q,K,C,D,F,L,Q,z,H);return}else if(ne&256){Dt(q,K,C,D,F,L,Q,z,H);return}}le&8?(re&16&&Rt(q,F,L),K!==q&&f(C,K)):re&16?le&16?Kt(q,K,C,D,F,L,Q,z,H):Rt(q,F,L,!0):(re&8&&f(C,""),le&16&&y(K,C,D,F,L,Q,z,H))},Dt=(E,T,C,D,F,L,Q,z,H)=>{E=E||as,T=T||as;const q=E.length,re=T.length,K=Math.min(q,re);let ne;for(ne=0;ne<K;ne++){const le=T[ne]=H?Qn(T[ne]):an(T[ne]);x(E[ne],le,C,null,F,L,Q,z,H)}q>re?Rt(E,F,L,!0,!1,K):y(T,C,D,F,L,Q,z,H,K)},Kt=(E,T,C,D,F,L,Q,z,H)=>{let q=0;const re=T.length;let K=E.length-1,ne=re-1;for(;q<=K&&q<=ne;){const le=E[q],ie=T[q]=H?Qn(T[q]):an(T[q]);if(Xs(le,ie))x(le,ie,C,null,F,L,Q,z,H);else break;q++}for(;q<=K&&q<=ne;){const le=E[K],ie=T[ne]=H?Qn(T[ne]):an(T[ne]);if(Xs(le,ie))x(le,ie,C,null,F,L,Q,z,H);else break;K--,ne--}if(q>K){if(q<=ne){const le=ne+1,ie=le<re?T[le].el:D;for(;q<=ne;)x(null,T[q]=H?Qn(T[q]):an(T[q]),C,ie,F,L,Q,z,H),q++}}else if(q>ne)for(;q<=K;)Me(E[q],F,L,!0),q++;else{const le=q,ie=q,pe=new Map;for(q=ie;q<=ne;q++){const tt=T[q]=H?Qn(T[q]):an(T[q]);tt.key!=null&&pe.set(tt.key,q)}let ve,Ze=0;const et=ne-ie+1;let $t=!1,ct=0;const Bn=new Array(et);for(q=0;q<et;q++)Bn[q]=0;for(q=le;q<=K;q++){const tt=E[q];if(Ze>=et){Me(tt,F,L,!0);continue}let jt;if(tt.key!=null)jt=pe.get(tt.key);else for(ve=ie;ve<=ne;ve++)if(Bn[ve-ie]===0&&Xs(tt,T[ve])){jt=ve;break}jt===void 0?Me(tt,F,L,!0):(Bn[jt-ie]=q+1,jt>=ct?ct=jt:$t=!0,x(tt,T[jt],C,null,F,L,Q,z,H),Ze++)}const Ls=$t?iw(Bn):as;for(ve=Ls.length-1,q=et-1;q>=0;q--){const tt=ie+q,jt=T[tt],ro=tt+1<re?T[tt+1].el:D;Bn[q]===0?x(null,jt,C,ro,F,L,Q,z,H):$t&&(ve<0||q!==Ls[ve]?Bt(jt,C,ro,2):ve--)}}},Bt=(E,T,C,D,F=null)=>{const{el:L,type:Q,transition:z,children:H,shapeFlag:q}=E;if(q&6){Bt(E.component.subTree,T,C,D);return}if(q&128){E.suspense.move(T,C,D);return}if(q&64){Q.move(E,T,C,ee);return}if(Q===In){r(L,T,C);for(let K=0;K<H.length;K++)Bt(H[K],T,C,D);r(E.anchor,T,C);return}if(Q===Do){$(E,T,C);return}if(D!==2&&q&1&&z)if(D===0)z.beforeEnter(L),r(L,T,C),Lt(()=>z.enter(L),F);else{const{leave:K,delayLeave:ne,afterLeave:le}=z,ie=()=>{E.ctx.isUnmounted?s(L):r(L,T,C)},pe=()=>{K(L,()=>{ie(),le&&le()})};ne?ne(L,ie,pe):pe()}else r(L,T,C)},Me=(E,T,C,D=!1,F=!1)=>{const{type:L,props:Q,ref:z,children:H,dynamicChildren:q,shapeFlag:re,patchFlag:K,dirs:ne,cacheIndex:le}=E;if(K===-2&&(F=!1),z!=null&&(Cn(),ai(z,null,C,E,!0),kn()),le!=null&&(T.renderCache[le]=void 0),re&256){T.ctx.deactivate(E);return}const ie=re&1&&ne,pe=!li(E);let ve;if(pe&&(ve=Q&&Q.onVnodeBeforeUnmount)&&rn(ve,T,E),re&6)nn(E.component,C,D);else{if(re&128){E.suspense.unmount(C,D);return}ie&&Rr(E,null,T,"beforeUnmount"),re&64?E.type.remove(E,T,C,ee,D):q&&!q.hasOnce&&(L!==In||K>0&&K&64)?Rt(q,T,C,!1,!0):(L===In&&K&384||!F&&re&16)&&Rt(H,T,C),D&&Ue(E)}(pe&&(ve=Q&&Q.onVnodeUnmounted)||ie)&&Lt(()=>{ve&&rn(ve,T,E),ie&&Rr(E,null,T,"unmounted")},C)},Ue=E=>{const{type:T,el:C,anchor:D,transition:F}=E;if(T===In){Fn(C,D);return}if(T===Do){j(E);return}const L=()=>{s(C),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(E.shapeFlag&1&&F&&!F.persisted){const{leave:Q,delayLeave:z}=F,H=()=>Q(C,L);z?z(E.el,L,H):H()}else L()},Fn=(E,T)=>{let C;for(;E!==T;)C=g(E),s(E),E=C;s(T)},nn=(E,T,C)=>{const{bum:D,scope:F,job:L,subTree:Q,um:z,m:H,a:q,parent:re,slots:{__:K}}=E;If(H),If(q),D&&xo(D),re&&oe(K)&&K.forEach(ne=>{re.renderCache[ne]=void 0}),F.stop(),L&&(L.flags|=8,Me(Q,E,T,C)),z&&Lt(z,T),Lt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Rt=(E,T,C,D=!1,F=!1,L=0)=>{for(let Q=L;Q<E.length;Q++)Me(E[Q],T,C,D,F)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),C=T&&T[bE];return C?g(C):T};let J=!1;const X=(E,T,C)=>{E==null?T._vnode&&Me(T._vnode,null,null,!0):x(T._vnode||null,E,T,null,null,null,C),T._vnode=E,J||(J=!0,gf(),Ig(),J=!1)},ee={p:x,um:Me,m:Bt,r:Ue,mt:Je,mc:y,pc:me,pbc:A,n:O,o:t};return{render:X,hydrate:void 0,createApp:GE(X)}}function Ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function sw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jg(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Qn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&jg(o,l)),l.type===Ma&&(l.el=o.el),l.type===hr&&!l.el&&(l.el=o.el)}}function iw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function qg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qg(e)}function If(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ow=Symbol.for("v-scx"),aw=()=>Ht(ow);function ui(t,e,n){return Hg(t,e,n)}function Hg(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,l=_t({},n),c=e&&r||!e&&i!=="post";let u;if(Ri){if(i==="sync"){const _=aw();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=cn,_.resume=cn,_.pause=cn,_}}const f=ot;l.call=(_,R,x)=>gn(_,f,R,x);let p=!1;i==="post"?l.scheduler=_=>{Lt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,R)=>{R?_():cu(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=wE(t,e,l);return Ri&&(u?u.push(g):c&&g()),g}function lw(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?zg(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=ji(this),l=Hg(s,i.bind(r),n);return o(),l}function zg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const cw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${jr(e)}Modifiers`];function uw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&cw(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ke(f)?f.trim():f)),o.number&&(s=n.map(Ko)));let l,c=r[l=Nl(e)]||r[l=Nl(Wt(e))];!c&&i&&(c=r[l=Nl(jr(e))]),c&&gn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gn(u,t,6,s)}}function Wg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!de(t)){const c=u=>{const f=Wg(u,e,!0);f&&(l=!0,_t(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Oe(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):_t(o,i),Oe(t)&&r.set(t,o),o)}function La(t,e){return!t||!ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,jr(e))||be(t,e))}function Af(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:_,ctx:R,inheritAttrs:x}=t,S=Jo(t);let B,U;try{if(n.shapeFlag&4){const j=s||r,te=j;B=an(u.call(te,j,f,p,_,g,R)),U=l}else{const j=e;B=an(j.length>1?j(p,{attrs:l,slots:o,emit:c}):j(p,null)),U=e.props?l:hw(l)}}catch(j){hi.length=0,Oa(j,t,1),B=Ve(hr)}let $=B;if(U&&x!==!1){const j=Object.keys(U),{shapeFlag:te}=$;j.length&&te&7&&(i&&j.some(Jc)&&(U=fw(U,i)),$=gs($,U,!1,!0))}return n.dirs&&($=gs($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&uu($,n.transition),B=$,Jo(S),B}const hw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ba(n))&&((e||(e={}))[n]=t[n]);return e},fw=(t,e)=>{const n={};for(const r in t)(!Jc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?bf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!La(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?bf(r,o,u):!0:!!o;return!1}function bf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!La(n,i))return!0}return!1}function pw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kg=t=>t.__isSuspense;function gw(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):AE(t)}const In=Symbol.for("v-fgt"),Ma=Symbol.for("v-txt"),hr=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),hi=[];let Ut=null;function Cr(t=!1){hi.push(Ut=t?null:[])}function mw(){hi.pop(),Ut=hi[hi.length-1]||null}let bi=1;function Rf(t,e=!1){bi+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function Gg(t){return t.dynamicChildren=bi>0?Ut||as:null,mw(),bi>0&&Ut&&Ut.push(t),t}function Jr(t,e,n,r,s,i){return Gg(Ce(t,e,n,r,s,i,!0))}function _w(t,e,n,r,s){return Gg(Ve(t,e,n,r,s,!0))}function ea(t){return t?t.__v_isVNode===!0:!1}function Xs(t,e){return t.type===e.type&&t.key===e.key}const Qg=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||He(t)||de(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function Ce(t,e=null,n=null,r=0,s=null,i=t===In?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qg(e),ref:e&&Vo(e),scopeId:bg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return l?(pu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),bi>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const Ve=yw;function yw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===FE)&&(t=hr),ea(t)){const l=gs(t,e,!0);return n&&pu(l,n),bi>0&&!i&&Ut&&(l.shapeFlag&6?Ut[Ut.indexOf(t)]=l:Ut.push(l)),l.patchFlag=-2,l}if(Cw(t)&&(t=t.__vccOpts),e){e=vw(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=rt(l)),Oe(c)&&(au(c)&&!oe(c)&&(c=_t({},c)),e.style=ka(c))}const o=Ke(t)?1:Kg(t)?128:RE(t)?64:Oe(t)?4:de(t)?2:0;return Ce(t,e,n,r,s,o,i,!0)}function vw(t){return t?au(t)||Lg(t)?_t({},t):t:null}function gs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Ew(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Qg(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(Vo(e)):[i,Vo(e)]:Vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==In?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&uu(f,c.clone(f)),f}function Xt(t=" ",e=0){return Ve(Ma,null,t,e)}function O1(t,e){const n=Ve(Do,null,t);return n.staticCount=e,n}function Fl(t="",e=!1){return e?(Cr(),_w(hr,null,t)):Ve(hr,null,t)}function an(t){return t==null||typeof t=="boolean"?Ve(hr):oe(t)?Ve(In,null,t.slice()):ea(t)?Qn(t):Ve(Ma,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Lg(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Xt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ew(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=rt([e.class,r.class]));else if(s==="style")e.style=ka([e.style,r.style]);else if(ba(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){gn(t,e,7,[n,r])}const ww=Og();let Tw=0;function Iw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ww,i={uid:Tw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ug(r,s),emitsOptions:Wg(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uw.bind(null,i),t.ce&&t.ce(i),i}let ot=null,ta,pc;{const t=Ca(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ta=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),pc=e("__VUE_SSR_SETTERS__",n=>Ri=n)}const ji=t=>{const e=ot;return ta(t),t.scope.on(),()=>{t.scope.off(),ta(e)}},Sf=()=>{ot&&ot.scope.off(),ta(null)};function Xg(t){return t.vnode.shapeFlag&4}let Ri=!1;function Aw(t,e=!1,n=!1){e&&pc(e);const{props:r,children:s}=t.vnode,i=Xg(t);XE(t,r,i,e),ew(t,s,n||e);const o=i?bw(t,e):void 0;return e&&pc(!1),o}function bw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$E);const{setup:r}=n;if(r){Cn();const s=t.setupContext=r.length>1?Sw(t):null,i=ji(t),o=$i(r,t,0,[t.props,s]),l=Gp(o);if(kn(),i(),(l||t.sp)&&!li(t)&&Sg(t),l){if(o.then(Sf,Sf),e)return o.then(c=>{Pf(t,c)}).catch(c=>{Oa(c,t,0)});t.asyncDep=o}else Pf(t,o)}else Yg(t)}function Pf(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Eg(e)),Yg(t)}function Yg(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=ji(t);Cn();try{jE(t)}finally{kn(),s()}}}const Rw={get(t,e){return gt(t,"get",""),t[e]}};function Sw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Rw),slots:t.slots,emit:t.emit,expose:e}}function Ua(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Eg(lu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ci)return ci[n](t)},has(e,n){return n in e||n in ci}})):t.proxy}function Pw(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Cw(t){return de(t)&&"__vccOpts"in t}const It=(t,e)=>vE(t,e,Ri);function Jg(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!oe(e)?ea(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ea(n)&&(n=[n]),Ve(t,e,n))}const kw="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gc;const Cf=typeof window<"u"&&window.trustedTypes;if(Cf)try{gc=Cf.createPolicy("vue",{createHTML:t=>t})}catch{}const Zg=gc?t=>gc.createHTML(t):t=>t,xw="http://www.w3.org/2000/svg",Nw="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,kf=Tn&&Tn.createElement("template"),Ow={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Tn.createElementNS(xw,t):e==="mathml"?Tn.createElementNS(Nw,t):n?Tn.createElement(t,{is:n}):Tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{kf.innerHTML=Zg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=kf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dw=Symbol("_vtc");function Vw(t,e,n){const r=t[Dw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xf=Symbol("_vod"),Lw=Symbol("_vsh"),Mw=Symbol(""),Uw=/(^|;)\s*display\s*:/;function Fw(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Lo(r,l,"")}else for(const o in e)n[o]==null&&Lo(r,o,"");for(const o in n)o==="display"&&(i=!0),Lo(r,o,n[o])}else if(s){if(e!==n){const o=r[Mw];o&&(n+=";"+o),r.cssText=n,i=Uw.test(n)}}else e&&t.removeAttribute("style");xf in t&&(t[xf]=i?r.display:"",t[Lw]&&(r.display="none"))}const Nf=/\s*!important$/;function Lo(t,e,n){if(oe(n))n.forEach(r=>Lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bw(t,e);Nf.test(n)?t.setProperty(jr(r),n.replace(Nf,""),"important"):t[r]=n}}const Of=["Webkit","Moz","ms"],Bl={};function Bw(t,e){const n=Bl[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Bl[e]=r;r=Pa(r);for(let s=0;s<Of.length;s++){const i=Of[s]+r;if(i in t)return Bl[e]=i}return e}const Df="http://www.w3.org/1999/xlink";function Vf(t,e,n,r,s,i=qv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Df,e.slice(6,e.length)):t.setAttributeNS(Df,e,n):n==null||i&&!Yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":pn(n)?String(n):n)}function Lf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Yp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function $w(t,e,n,r){t.removeEventListener(e,n,r)}const Mf=Symbol("_vei");function jw(t,e,n,r,s=null){const i=t[Mf]||(t[Mf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=qw(e);if(r){const u=i[e]=Ww(r,s);xr(t,l,u,c)}else o&&($w(t,l,o,c),i[e]=void 0)}}const Uf=/(?:Once|Passive|Capture)$/;function qw(t){let e;if(Uf.test(t)){e={};let r;for(;r=t.match(Uf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jr(t.slice(2)),e]}let $l=0;const Hw=Promise.resolve(),zw=()=>$l||(Hw.then(()=>$l=0),$l=Date.now());function Ww(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(Kw(r,n.value),e,5,[r])};return n.value=t,n.attached=zw(),n}function Kw(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ff=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Vw(t,r,o):e==="style"?Fw(t,n,r):ba(e)?Jc(e)||jw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qw(t,e,r,o))?(Lf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?Lf(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vf(t,e,r,o))};function Qw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ff(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ff(e)&&Ke(n)?!1:e in t}const na=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>xo(e,n):e};function Xw(t){t.target.composing=!0}function Bf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const us=Symbol("_assign"),D1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[us]=na(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ko(l)),t[us](l)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",Xw),xr(t,"compositionend",Bf),xr(t,"change",Bf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[us]=na(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ko(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},V1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ra(e);xr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ko(ra(o)):ra(o));t[us](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Da(()=>{t._assigning=!1})}),t[us]=na(r)},mounted(t,{value:e}){$f(t,e)},beforeUpdate(t,e,n){t[us]=na(n)},updated(t,{value:e}){t._assigning||$f(t,e)}};function $f(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!Ra(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ra(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=zv(e,l)>-1}else o.selected=e.has(l);else if(xa(ra(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ra(t){return"_value"in t?t._value:t.value}const Yw=["ctrl","shift","alt","meta"],Jw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yw.some(n=>t[`${n}Key`]&&!e.includes(n))},L1=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Jw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Zw=_t({patchProp:Gw},Ow);let jf;function eT(){return jf||(jf=nw(Zw))}const tT=(...t)=>{const e=eT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rT(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rT(t){return Ke(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let em;const Fa=t=>em=t,tm=Symbol();function mc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fi||(fi={}));function sT(){const t=tg(!0),e=t.run(()=>Pt({}));let n=[],r=[];const s=lu({install(i){Fa(s),s._a=i,i.provide(tm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const nm=()=>{};function qf(t,e,n,r=nm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ng()&&Wv(s),s}function Zr(t,...e){t.slice().forEach(n=>{n(...e)})}const iT=t=>t(),Hf=Symbol(),jl=Symbol();function _c(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];mc(s)&&mc(r)&&t.hasOwnProperty(n)&&!He(r)&&!sr(r)?t[n]=_c(s,r):t[n]=r}return t}const oT=Symbol();function aT(t){return!mc(t)||!t.hasOwnProperty(oT)}const{assign:Kn}=Object;function lT(t){return!!(He(t)&&t.effect)}function cT(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=gE(n.state.value[t]);return Kn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=lu(It(()=>{Fa(n);const _=n._s.get(t);return o[g].call(_,_)})),p),{}))}return c=rm(t,u,e,n,r,!0),c}function rm(t,e,n={},r,s,i){let o;const l=Kn({actions:{}},n),c={deep:!0};let u,f,p=[],g=[],_;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Pt({});let x;function S(y){let v;u=f=!1,typeof y=="function"?(y(r.state.value[t]),v={type:fi.patchFunction,storeId:t,events:_}):(_c(r.state.value[t],y),v={type:fi.patchObject,payload:y,storeId:t,events:_});const A=x=Symbol();Da().then(()=>{x===A&&(u=!0)}),f=!0,Zr(p,v,r.state.value[t])}const B=i?function(){const{state:v}=n,A=v?v():{};this.$patch(b=>{Kn(b,A)})}:nm;function U(){o.stop(),p=[],g=[],r._s.delete(t)}const $=(y,v="")=>{if(Hf in y)return y[jl]=v,y;const A=function(){Fa(r);const b=Array.from(arguments),P=[],w=[];function Je(ce){P.push(ce)}function bt(ce){w.push(ce)}Zr(g,{args:b,name:A[jl],store:te,after:Je,onError:bt});let xe;try{xe=y.apply(this&&this.$id===t?this:te,b)}catch(ce){throw Zr(w,ce),ce}return xe instanceof Promise?xe.then(ce=>(Zr(P,ce),ce)).catch(ce=>(Zr(w,ce),Promise.reject(ce))):(Zr(P,xe),xe)};return A[Hf]=!0,A[jl]=v,A},j={_p:r,$id:t,$onAction:qf.bind(null,g),$patch:S,$reset:B,$subscribe(y,v={}){const A=qf(p,y,v.detached,()=>b()),b=o.run(()=>ui(()=>r.state.value[t],P=>{(v.flush==="sync"?f:u)&&y({storeId:t,type:fi.direct,events:_},P)},Kn({},c,v)));return A},$dispose:U},te=Bi(j);r._s.set(t,te);const I=(r._a&&r._a.runWithContext||iT)(()=>r._e.run(()=>(o=tg()).run(()=>e({action:$}))));for(const y in I){const v=I[y];if(He(v)&&!lT(v)||sr(v))i||(R&&aT(v)&&(He(v)?v.value=R[y]:_c(v,R[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const A=$(v,y);I[y]=A,l.actions[y]=v}}return Kn(te,I),Kn(Ie(te),I),Object.defineProperty(te,"$state",{get:()=>r.state.value[t],set:y=>{S(v=>{Kn(v,y)})}}),r._p.forEach(y=>{Kn(te,o.run(()=>y({store:te,app:r._a,pinia:r,options:l})))}),R&&i&&n.hydrate&&n.hydrate(te.$state,R),u=!0,f=!0,te}/*! #__NO_SIDE_EFFECTS__ */function sm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=QE();return l=l||(u?Ht(tm,null):null),l&&Fa(l),l=em,l._s.has(r)||(i?rm(r,e,s,l):cT(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof document<"u";function im(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&im(t.default)}const Ae=Object.assign;function ql(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const di=()=>{},Zt=Array.isArray,om=/#/g,hT=/&/g,fT=/\//g,dT=/=/g,pT=/\?/g,am=/\+/g,gT=/%5B/g,mT=/%5D/g,lm=/%5E/g,_T=/%60/g,cm=/%7B/g,yT=/%7C/g,um=/%7D/g,vT=/%20/g;function gu(t){return encodeURI(""+t).replace(yT,"|").replace(gT,"[").replace(mT,"]")}function ET(t){return gu(t).replace(cm,"{").replace(um,"}").replace(lm,"^")}function yc(t){return gu(t).replace(am,"%2B").replace(vT,"+").replace(om,"%23").replace(hT,"%26").replace(_T,"`").replace(cm,"{").replace(um,"}").replace(lm,"^")}function wT(t){return yc(t).replace(dT,"%3D")}function TT(t){return gu(t).replace(om,"%23").replace(pT,"%3F")}function IT(t){return t==null?"":TT(t).replace(fT,"%2F")}function Si(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const AT=/\/$/,bT=t=>t.replace(AT,"");function Hl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=CT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Si(o)}}function RT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ST(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ms(e.matched[r],n.matched[s])&&hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PT(t[n],e[n]))return!1;return!0}function PT(t,e){return Zt(t)?Wf(t,e):Zt(e)?Wf(e,t):t===e}function Wf(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function CT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Pi;(function(t){t.pop="pop",t.push="push"})(Pi||(Pi={}));var pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pi||(pi={}));function kT(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bT(t)}const xT=/^[^#]+#/;function NT(t,e){return t.replace(xT,"#")+e}function OT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ba=()=>({left:window.scrollX,top:window.scrollY});function DT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=OT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kf(t,e){return(history.state?history.state.position-e:-1)+t}const vc=new Map;function VT(t,e){vc.set(t,e)}function LT(t){const e=vc.get(t);return vc.delete(t),e}let MT=()=>location.protocol+"//"+location.host;function fm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),zf(c,"")}return zf(n,t)+r+s}function UT(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=fm(t,location),R=n.value,x=e.value;let S=0;if(g){if(n.value=_,e.value=g,o&&o===R){o=null;return}S=x?g.position-x.position:0}else r(_);s.forEach(B=>{B(n.value,R,{delta:S,type:Pi.pop,direction:S?S>0?pi.forward:pi.back:pi.unknown})})};function c(){o=n.value}function u(g){s.push(g);const _=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(Ae({},g.state,{scroll:Ba()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Gf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ba():null}}function FT(t){const{history:e,location:n}=window,r={value:fm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:MT()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(c,u){const f=Ae({},e.state,Gf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Ae({},s.value,e.state,{forward:c,scroll:Ba()});i(f.current,f,!0);const p=Ae({},Gf(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function BT(t){t=kT(t);const e=FT(t),n=UT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:NT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $T(t){return typeof t=="string"||t&&typeof t=="object"}function dm(t){return typeof t=="string"||typeof t=="symbol"}const pm=Symbol("");var Qf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qf||(Qf={}));function _s(t,e){return Ae(new Error,{type:t,[pm]:!0},e)}function wn(t,e){return t instanceof Error&&pm in t&&(e==null||!!(t.type&e))}const Xf="[^/]+?",jT={sensitive:!1,strict:!1,start:!0,end:!0},qT=/[.+*?^${}()[\]/\\]/g;function HT(t,e){const n=Ae({},jT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(qT,"\\$&"),_+=40;else if(g.type===1){const{value:R,repeatable:x,optional:S,regexp:B}=g;i.push({name:R,repeatable:x,optional:S});const U=B||Xf;if(U!==Xf){_+=10;try{new RegExp(`(${U})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${R}" (${U}): `+j.message)}}let $=x?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||($=S&&u.length<2?`(?:/${$})`:"/"+$),S&&($+="?"),s+=$,_+=20,S&&(_+=-8),x&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",R=i[g-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:x,optional:S}=_,B=R in u?u[R]:"";if(Zt(B)&&!x)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const U=Zt(B)?B.join("/"):B;if(!U)if(S)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function zT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=zT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yf(r))return 1;if(Yf(s))return-1}return s.length-r.length}function Yf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WT={type:0,value:""},KT=/[a-zA-Z0-9_]/;function GT(t){if(!t)return[[]];if(t==="/")return[[WT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:KT.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function QT(t,e,n){const r=HT(GT(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function XT(t,e){const n=[],r=new Map;e=td({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const R=!_,x=Zf(p);x.aliasOf=_&&_.record;const S=td(e,p),B=[x];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of j)B.push(Zf(Ae({},x,{components:_?_.record.components:x.components,path:te,aliasOf:_?_.record:x})))}let U,$;for(const j of B){const{path:te}=j;if(g&&te[0]!=="/"){const G=g.record.path,I=G[G.length-1]==="/"?"":"/";j.path=g.record.path+(te&&I+te)}if(U=QT(j,g,S),_?_.alias.push(U):($=$||U,$!==U&&$.alias.push(U),R&&p.name&&!ed(U)&&o(p.name)),mm(U)&&c(U),x.children){const G=x.children;for(let I=0;I<G.length;I++)i(G[I],U,_&&_.children[I])}_=_||U}return $?()=>{o($)}:di}function o(p){if(dm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=ZT(p,n);n.splice(g,0,p),p.record.name&&!ed(p)&&r.set(p.record.name,p)}function u(p,g){let _,R={},x,S;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw _s(1,{location:p});S=_.record.name,R=Ae(Jf(g.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Jf(p.params,_.keys.map($=>$.name))),x=_.stringify(R)}else if(p.path!=null)x=p.path,_=n.find($=>$.re.test(x)),_&&(R=_.parse(x),S=_.record.name);else{if(_=g.name?r.get(g.name):n.find($=>$.re.test(g.path)),!_)throw _s(1,{location:p,currentLocation:g});S=_.record.name,R=Ae({},g.params,p.params),x=_.stringify(R)}const B=[];let U=_;for(;U;)B.unshift(U.record),U=U.parent;return{name:S,path:x,params:R,matched:B,meta:JT(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Jf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:YT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function YT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ed(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JT(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function td(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ZT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;gm(t,e[i])<0?r=i:n=i+1}const s=eI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function eI(t){let e=t;for(;e=e.parent;)if(mm(e)&&gm(t,e)===0)return e}function mm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function tI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(am," "),o=i.indexOf("="),l=Si(o<0?i:i.slice(0,o)),c=o<0?null:Si(i.slice(o+1));if(l in e){let u=e[l];Zt(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function nd(t){let e="";for(let n in t){const r=t[n];if(n=wT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&yc(i)):[r&&yc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rI=Symbol(""),rd=Symbol(""),$a=Symbol(""),mu=Symbol(""),Ec=Symbol("");function Ys(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(_s(4,{from:n,to:e})):g instanceof Error?c(g):$T(g)?c(_s(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function zl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(im(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Xn(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=uT(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Xn(_,n,r,o,l,s)()}))}}return i}function sd(t){const e=Ht($a),n=Ht(mu),r=It(()=>{const c=Xe(t.to);return e.resolve(c)}),s=It(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ms.bind(null,f));if(g>-1)return g;const _=id(c[u-2]);return u>1&&id(f)===_&&p[p.length-1].path!==_?p.findIndex(ms.bind(null,c[u-2])):g}),i=It(()=>s.value>-1&&lI(n.params,r.value.params)),o=It(()=>s.value>-1&&s.value===n.matched.length-1&&hm(n.params,r.value.params));function l(c={}){if(aI(c)){const u=e[Xe(t.replace)?"replace":"push"](Xe(t.to)).catch(di);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:It(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function sI(t){return t.length===1?t[0]:t}const iI=Rg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:sd,setup(t,{slots:e}){const n=Bi(sd(t)),{options:r}=Ht($a),s=It(()=>({[od(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[od(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&sI(e.default(n));return t.custom?i:Jg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oI=iI;function aI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function id(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const od=(t,e,n)=>t??e??n,cI=Rg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(Ec),s=It(()=>t.route||r.value),i=Ht(rd,0),o=It(()=>{let u=Xe(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=It(()=>s.value.matched[o.value]);Oo(rd,It(()=>o.value+1)),Oo(rI,l),Oo(Ec,s);const c=Pt();return ui(()=>[c.value,l.value,t.name],([u,f,p],[g,_,R])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!ms(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return ad(n.default,{Component:g,route:u});const _=p.props[f],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,S=Jg(g,Ae({},R,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return ad(n.default,{Component:S,route:u})||S}}});function ad(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uI=cI;function hI(t){const e=XT(t.routes,t),n=t.parseQuery||tI,r=t.stringifyQuery||nd,s=t.history,i=Ys(),o=Ys(),l=Ys(),c=fE(Hn);let u=Hn;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ql.bind(null,O=>""+O),p=ql.bind(null,IT),g=ql.bind(null,Si);function _(O,J){let X,ee;return dm(O)?(X=e.getRecordMatcher(O),ee=J):ee=O,e.addRoute(ee,X)}function R(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function x(){return e.getRoutes().map(O=>O.record)}function S(O){return!!e.getRecordMatcher(O)}function B(O,J){if(J=Ae({},J||c.value),typeof O=="string"){const C=Hl(n,O,J.path),D=e.resolve({path:C.path},J),F=s.createHref(C.fullPath);return Ae(C,D,{params:g(D.params),hash:Si(C.hash),redirectedFrom:void 0,href:F})}let X;if(O.path!=null)X=Ae({},O,{path:Hl(n,O.path,J.path).path});else{const C=Ae({},O.params);for(const D in C)C[D]==null&&delete C[D];X=Ae({},O,{params:p(C)}),J.params=p(J.params)}const ee=e.resolve(X,J),we=O.hash||"";ee.params=f(g(ee.params));const E=RT(r,Ae({},O,{hash:ET(we),path:ee.path})),T=s.createHref(E);return Ae({fullPath:E,hash:we,query:r===nd?nI(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:T})}function U(O){return typeof O=="string"?Hl(n,O,c.value.path):Ae({},O)}function $(O,J){if(u!==O)return _s(8,{from:J,to:O})}function j(O){return I(O)}function te(O){return j(Ae(U(O),{replace:!0}))}function G(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:X}=J;let ee=typeof X=="function"?X(O):X;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),Ae({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function I(O,J){const X=u=B(O),ee=c.value,we=O.state,E=O.force,T=O.replace===!0,C=G(X);if(C)return I(Ae(U(C),{state:typeof C=="object"?Ae({},we,C.state):we,force:E,replace:T}),J||X);const D=X;D.redirectedFrom=J;let F;return!E&&ST(r,ee,X)&&(F=_s(16,{to:D,from:ee}),Bt(ee,ee,!0,!1)),(F?Promise.resolve(F):A(D,ee)).catch(L=>wn(L)?wn(L,2)?L:Kt(L):me(L,D,ee)).then(L=>{if(L){if(wn(L,2))return I(Ae({replace:T},U(L.to),{state:typeof L.to=="object"?Ae({},we,L.to.state):we,force:E}),J||D)}else L=P(D,ee,!0,T,we);return b(D,ee,L),L})}function y(O,J){const X=$(O,J);return X?Promise.reject(X):Promise.resolve()}function v(O){const J=Fn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function A(O,J){let X;const[ee,we,E]=fI(O,J);X=zl(ee.reverse(),"beforeRouteLeave",O,J);for(const C of ee)C.leaveGuards.forEach(D=>{X.push(Xn(D,O,J))});const T=y.bind(null,O,J);return X.push(T),Rt(X).then(()=>{X=[];for(const C of i.list())X.push(Xn(C,O,J));return X.push(T),Rt(X)}).then(()=>{X=zl(we,"beforeRouteUpdate",O,J);for(const C of we)C.updateGuards.forEach(D=>{X.push(Xn(D,O,J))});return X.push(T),Rt(X)}).then(()=>{X=[];for(const C of E)if(C.beforeEnter)if(Zt(C.beforeEnter))for(const D of C.beforeEnter)X.push(Xn(D,O,J));else X.push(Xn(C.beforeEnter,O,J));return X.push(T),Rt(X)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),X=zl(E,"beforeRouteEnter",O,J,v),X.push(T),Rt(X))).then(()=>{X=[];for(const C of o.list())X.push(Xn(C,O,J));return X.push(T),Rt(X)}).catch(C=>wn(C,8)?C:Promise.reject(C))}function b(O,J,X){l.list().forEach(ee=>v(()=>ee(O,J,X)))}function P(O,J,X,ee,we){const E=$(O,J);if(E)return E;const T=J===Hn,C=ts?history.state:{};X&&(ee||T?s.replace(O.fullPath,Ae({scroll:T&&C&&C.scroll},we)):s.push(O.fullPath,we)),c.value=O,Bt(O,J,X,T),Kt()}let w;function Je(){w||(w=s.listen((O,J,X)=>{if(!nn.listening)return;const ee=B(O),we=G(ee);if(we){I(Ae(we,{replace:!0,force:!0}),ee).catch(di);return}u=ee;const E=c.value;ts&&VT(Kf(E.fullPath,X.delta),Ba()),A(ee,E).catch(T=>wn(T,12)?T:wn(T,2)?(I(Ae(U(T.to),{force:!0}),ee).then(C=>{wn(C,20)&&!X.delta&&X.type===Pi.pop&&s.go(-1,!1)}).catch(di),Promise.reject()):(X.delta&&s.go(-X.delta,!1),me(T,ee,E))).then(T=>{T=T||P(ee,E,!1),T&&(X.delta&&!wn(T,8)?s.go(-X.delta,!1):X.type===Pi.pop&&wn(T,20)&&s.go(-1,!1)),b(ee,E,T)}).catch(di)}))}let bt=Ys(),xe=Ys(),ce;function me(O,J,X){Kt(O);const ee=xe.list();return ee.length?ee.forEach(we=>we(O,J,X)):console.error(O),Promise.reject(O)}function Dt(){return ce&&c.value!==Hn?Promise.resolve():new Promise((O,J)=>{bt.add([O,J])})}function Kt(O){return ce||(ce=!O,Je(),bt.list().forEach(([J,X])=>O?X(O):J()),bt.reset()),O}function Bt(O,J,X,ee){const{scrollBehavior:we}=t;if(!ts||!we)return Promise.resolve();const E=!X&&LT(Kf(O.fullPath,0))||(ee||!X)&&history.state&&history.state.scroll||null;return Da().then(()=>we(O,J,E)).then(T=>T&&DT(T)).catch(T=>me(T,O,J))}const Me=O=>s.go(O);let Ue;const Fn=new Set,nn={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:x,resolve:B,options:t,push:j,replace:te,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:xe.add,isReady:Dt,install(O){const J=this;O.component("RouterLink",oI),O.component("RouterView",uI),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(c)}),ts&&!Ue&&c.value===Hn&&(Ue=!0,j(s.location).catch(we=>{}));const X={};for(const we in Hn)Object.defineProperty(X,we,{get:()=>c.value[we],enumerable:!0});O.provide($a,J),O.provide(mu,_g(X)),O.provide(Ec,c);const ee=O.unmount;Fn.add(O),O.unmount=function(){Fn.delete(O),Fn.size<1&&(u=Hn,w&&w(),w=null,c.value=Hn,Ue=!1,ce=!1),ee()}}};function Rt(O){return O.reduce((J,X)=>J.then(()=>v(X)),Promise.resolve())}return nn}function fI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ms(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ms(u,c))||s.push(c))}return[n,r,s]}function dI(){return Ht($a)}function pI(t){return Ht(mu)}const gI="modulepreload",mI=function(t){return"/een-gng/"+t},ld={},zn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=mI(c),c in ld)return;ld[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":gI,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};class _I{constructor(){this.allowedDomainConfigs=[{domain:"127.0.0.1",protocols:["http"],ports:[3333]},{domain:"klaushofrichter.github.io",protocols:["https"],ports:[443]}]}get allowedDomains(){return this.allowedDomainConfigs.map(e=>e.domain)}get allowedOrigins(){const e=[];return this.allowedDomainConfigs.forEach(n=>{n.protocols.forEach(r=>{n.ports.forEach(s=>{const o=r==="https"&&s===443||r==="http"&&s===80?`${r}://${n.domain}`:`${r}://${n.domain}:${s}`;e.push(o)})})}),e}addAllowedDomain(e,n=["https"],r=[443]){this.allowedDomainConfigs.push({domain:e,protocols:n,ports:r})}removeAllowedDomain(e){this.allowedDomainConfigs=this.allowedDomainConfigs.filter(n=>n.domain!==e)}isOriginAllowed(e){try{const n=new URL(e),r=n.hostname,s=n.protocol.slice(0,-1),i=parseInt(n.port)||(s==="https"?443:80);return this.allowedDomainConfigs.some(o=>o.domain===r&&o.protocols.includes(s)&&o.ports.includes(i))}catch{return console.warn("🚫 Security: Invalid origin format:",e),!1}}validateCurrentDomain(){const e=window.location.hostname;return this.allowedDomains.includes(e)?(console.log(`✅ Security: Domain ${e} authorized`),!0):(console.error(`🚫 Security: Unauthorized domain ${e}`),!1)}validateOrigin(e=window.location.origin){return this.isOriginAllowed(e)?!0:(console.error(`🚫 Security: Unauthorized origin ${e}`),console.log("Allowed origins:",this.allowedOrigins),!1)}addSecurityHeaders(e={}){return{...e,"X-Requested-With":"XMLHttpRequest","X-Domain-Validation":window.location.hostname,Origin:window.location.origin,"X-Content-Type-Options":"nosniff","X-Frame-Options":"DENY","Referrer-Policy":"strict-origin-when-cross-origin"}}validateFirebaseOperation(e,n=null){if(!this.validateCurrentDomain())throw new Error("Domain not authorized for Firebase operations");if(!this.validateOrigin())throw new Error("Origin not authorized for Firebase operations");if(["create","update","delete","upload"].includes(e)&&!n)throw new Error("Authentication required for this operation");return!0}validateUrlScheme(e){if(typeof e!="string")return!1;try{const n=new URL(e);return["http:","https:"].includes(n.protocol)?!0:(console.warn(`🚫 Security: Blocked dangerous URL scheme: ${n.protocol}`),!1)}catch{return console.warn(`🚫 Security: Invalid URL format: ${e}`),!1}}sanitizeInput(e){if(typeof e!="string")return e;let n=e,r;do r=n.length,n=n.replace(/[<>]/g,"").replace(/javascript:/gi,"").replace(/data:/gi,"").replace(/vbscript:/gi,"").replace(/file:/gi,"").replace(/about:/gi,"").replace(/on\s*\w*\s*=/gi,"").replace(/\bon(click|load|error|focus|blur|change|submit|reset|mouseover|mouseout|keydown|keyup|keypress)(?=\W|$)/gi,"").replace(/\s+on\s+/gi," ").replace(/\bon\s(?=\w)/gi," ").replace(/\s+on$/gi," ").replace(/^on\s/gi,"").replace(/\bon\b(?=\s|$)/gi,"").replace(/^on$/gi,"").replace(/&[#\w]+;/g,"").replace(/[\p{Cc}]/gu,"").trim();while(n.length!==r&&n.length>0);return n}validateInput(e,n="general"){if(typeof e!="string")return{isValid:!1,sanitized:"",error:"Input must be a string"};const r=this.sanitizeInput(e);switch(n){case"email":{const s=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return{isValid:s.test(r),sanitized:r,error:s.test(r)?null:"Invalid email format"}}case"url":try{new URL(r);const s=this.validateUrlScheme(r);return{isValid:s,sanitized:r,error:s?null:"Invalid or unsafe URL"}}catch{return{isValid:!1,sanitized:r,error:"Invalid URL format"}}case"alphanumeric":{const s=/^[a-zA-Z0-9\s-_]+$/;return{isValid:s.test(r),sanitized:r,error:s.test(r)?null:"Only alphanumeric characters, spaces, hyphens, and underscores allowed"}}case"general":default:return{isValid:r.length>0,sanitized:r,error:r.length>0?null:"Input cannot be empty after sanitization"}}}validateFileUpload(e){if(!["image/jpeg","image/png","image/gif","image/webp"].includes(e.type))throw new Error(`File type ${e.type} not allowed`);if(e.size>10485760)throw new Error(`File size ${e.size} exceeds maximum 10485760`);return!0}checkRateLimit(e,n=100,r=6e4){const s=`rateLimit_${e}`,i=Date.now();let o=JSON.parse(localStorage.getItem(s)||"[]");if(o=o.filter(l=>i-l<r),o.length>=n)throw new Error(`Rate limit exceeded for ${e}`);return o.push(i),localStorage.setItem(s,JSON.stringify(o)),!0}constantTimeEquals(e,n){if(e.length!==n.length)return!1;let r=0;for(let s=0;s<e.length;s++)r|=e.charCodeAt(s)^n.charCodeAt(s);return r===0}generateSecureRandom(e=32){const n=new Uint8Array(e);return crypto.getRandomValues(n),Array.from(n,r=>r.toString(16).padStart(2,"0")).join("")}validateSession(){const e=window.authStore||{isAuthenticated:!1},n=localStorage.getItem("sessionStart"),r=localStorage.getItem("token_expiration");if(!n||!r||!e.isAuthenticated)return!1;const s=Date.now();return s>parseInt(r)?(this.logSecurityEvent("session_expired",{sessionStart:n,sessionExpiry:r,now:s}),!1):!0}cleanSensitiveData(){window.temp_credentials&&(window.temp_credentials=null),navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText("")}logSecurityEvent(e,n={}){const r={timestamp:new Date().toISOString(),event:e,domain:window.location.hostname,origin:window.location.origin,userAgent:navigator.userAgent,sessionId:this.generateSecureRandom(16),...n};console.log("🔒 Security Event:",r)}}const ys=new _I,yI="PREVIEW-KLAUS-MOBILE",wc="https://klaushofrichter.github.io/een-gng/",cd="https://auth.eagleeyenetworks.com/oauth2/authorize",_m="https://een-login.klaushofrichter.workers.dev",ym=()=>{if(!ys.validateUrlScheme(cd))throw new Error("Invalid EEN auth URL scheme");if(!ys.validateUrlScheme(wc))throw new Error("Invalid redirect URI scheme");const t=new URLSearchParams({client_id:yI,redirect_uri:wc,response_type:"code",scope:"vms.all"});return`${cd}?${t.toString()}`};async function vI(t){const e=new URLSearchParams({code:t,redirect_uri:wc}),r=`${_m}/proxy/getAccessToken?${e.toString()}`;if(!ys.validateUrlScheme(r))throw new Error("Invalid request URL scheme");try{const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},credentials:"include"});if(!s.ok){const o=await s.text();throw new Error(`Failed to get access token: ${s.status} ${o||s.statusText}`)}const i=await s.json();return{token:i.accessToken,expiresIn:i.expiresIn,httpsBaseUrl:i.httpsBaseUrl}}catch(s){throw console.error("[auth.js] getAccessToken fetch error:",s),new Error(`Failed to get access token: ${s.message||s}`)}}const EI=async t=>{try{const{token:e,expiresIn:n,httpsBaseUrl:r}=await vI(t),s=vs();return s.setToken(e,n),s.setBaseUrl(r),s.setRefreshToken("present"),{token:e,httpsBaseUrl:r}}catch(e){throw console.error("Authentication error:",e),e}},wI=async()=>{const t=vs();if(!t.refreshToken)return console.log("[auth.js] Missing refresh token marker for refresh."),!1;const r=`${_m}/proxy/refreshAccessToken`;if(!ys.validateUrlScheme(r))throw new Error("Invalid request URL scheme");try{const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},credentials:"include"});if(!s.ok){const o=await s.text();throw new Error(`Token refresh failed: ${s.status} ${o||s.statusText}`)}const i=await s.json();return!i.accessToken||!i.expiresIn?(console.error("[auth.js] Invalid response data from refresh call:",i),!1):(t.setToken(i.accessToken,i.expiresIn),t.setRefreshToken("present after refresh"),!0)}catch(s){return console.error("[auth.js] refreshToken fetch error:",s),!1}},M1=Object.freeze(Object.defineProperty({__proto__:null,getAuthUrl:ym,handleAuthCallback:EI,refreshToken:wI},Symbol.toStringTag,{value:"Module"})),TI=["home","about","profile","settings","direct","capture"],II=[{path:"/",name:"Login",component:()=>zn(()=>import("./Login-sOxiUkBH.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!1}},{path:"/direct",name:"Direct",component:()=>zn(()=>import("./Direct-nm6aY8yW.js"),__vite__mapDeps([2,3,1])),meta:{requiresAuth:!1}},{path:"/home",name:"Home",component:()=>zn(()=>import("./Home-BAhJqmrO.js"),__vite__mapDeps([4,5])),meta:{requiresAuth:!0}},{path:"/capture",name:"Capture",component:()=>zn(()=>import("./Capture-mLNbuxT6.js"),__vite__mapDeps([6,5,7])),meta:{requiresAuth:!0}},{path:"/about",name:"About",component:()=>zn(()=>import("./About-CPbefs9b.js"),__vite__mapDeps([8,1])),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>zn(()=>import("./Settings-BUjfR7nF.js"),__vite__mapDeps([9,3])),meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:()=>zn(()=>import("./Profile-rfXgMsB8.js"),__vite__mapDeps([10,3])),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>zn(()=>import("./NotFound-xedfnlWV.js"),[]),meta:{requiresAuth:!0}}],ja=hI({history:BT("/een-gng/"),routes:II});ja.beforeEach((t,e,n)=>{const r=vs();if(t.matched.some(i=>i.meta.requiresAuth)&&!r.isAuthenticated){const o=t.fullPath.split("?")[0].split("/")[1],l=TI.includes(o);localStorage.setItem("redirectAfterLogin",t.fullPath),localStorage.setItem("isValidRoute",l.toString());const c=ym();if(!ys.validateUrlScheme(c)){console.error("🚫 Security: Blocked redirect to unsafe URL:",c),n(!1);return}window.location.assign(c),n(!1)}else n()});const vs=sm("auth",()=>{const t=Pt(null),e=Pt(null),n=Pt(null),r=Pt(null),s=Pt(null),i=Pt(null),o=Pt(null),l=It(()=>!!t.value),c=It(()=>n.value?`https://${n.value}${r.value?`:${r.value}`:""}`:null);function u(G,I){if(t.value=G,G){localStorage.setItem("auth_token",G);const y=Date.now()+I*1e3;i.value=y,localStorage.setItem("token_expiration",y.toString())}else localStorage.removeItem("auth_token"),localStorage.removeItem("token_expiration"),i.value=null}function f(G){o.value=G,G?localStorage.setItem("refresh_token",G):localStorage.removeItem("refresh_token")}function p(G){G&&typeof G=="object"?(n.value=G.hostname,r.value=G.port,localStorage.setItem("hostname",G.hostname),G.port?localStorage.setItem("port",String(G.port)):localStorage.removeItem("port")):(n.value=null,r.value=null,localStorage.removeItem("hostname"),localStorage.removeItem("port"))}function g(G){e.value=G,G?localStorage.setItem("user_data",JSON.stringify(G)):localStorage.removeItem("user_data")}function _(G){s.value=G}let R=null,x=null;function S(){const G=localStorage.getItem("auth_token"),I=localStorage.getItem("user_data"),y=localStorage.getItem("hostname"),v=localStorage.getItem("port"),A=localStorage.getItem("token_expiration"),b=localStorage.getItem("refresh_token");G&&(t.value=G),I&&(e.value=JSON.parse(I)),y&&(n.value=y,v&&(r.value=Number(v))),A&&(i.value=Number(A)),b&&(o.value=b)}function B(){return i.value?i.value:null}function U(){if(!i.value)return null;const G=i.value-Date.now();return Math.max(0,G)}async function $(){const y="https://een-login.klaushofrichter.workers.dev/proxy/revoke";if(!ys.validateUrlScheme(y)){console.error("Invalid request URL scheme for token revocation");return}try{const v=await fetch(y,{method:"POST",credentials:"include"});v.ok||console.error("Failed to revoke token:",v.status)}catch(v){console.error("Error revoking token:",v)}}async function j(G){if(R={token:t.value,tokenExpiration:i.value,user:e.value,hostname:n.value,port:r.value,userProfile:s.value,refreshToken:o.value},t.value=null,e.value=null,n.value=null,r.value=null,s.value=null,i.value=null,o.value=null,localStorage.clear(),G&&await new Promise(I=>{const y=Date.now();x=setInterval(()=>{const v=Date.now()-y,A=Math.max(0,8e3-v);G(A),A===0&&(clearInterval(x),x=null,I())},50)}),R.tokenExpiration)try{console.log("revoking token"),await $()}catch(I){R=null,console.error("Error revoking token:",I)}else console.log("no token expiration, skipping revoke");R=null,ja.push("/")}function te(){console.log("cancelling logout"),R&&(x&&(clearInterval(x),x=null),console.log("restoring store values"),t.value=R.token,e.value=R.user,n.value=R.hostname,r.value=R.port,s.value=R.userProfile,o.value=R.refreshToken,i.value=R.tokenExpiration,t.value&&localStorage.setItem("auth_token",t.value),e.value&&localStorage.setItem("user_data",JSON.stringify(e.value)),n.value&&localStorage.setItem("hostname",n.value),r.value&&localStorage.setItem("port",String(r.value)),o.value&&localStorage.setItem("refresh_token",o.value),i.value&&localStorage.setItem("token_expiration",i.value.toString()),R=null)}return S(),{token:t,user:e,hostname:n,port:r,userProfile:s,tokenExpiration:i,refreshToken:o,isAuthenticated:l,baseUrl:c,setToken:u,setBaseUrl:p,setUser:g,setUserProfile:_,setRefreshToken:f,initialize:S,getTokenExpirationTime:B,getTokenTimeRemaining:U,logout:j,cancelLogout:te,revokeToken:$}}),AI=sm("theme",()=>{const t=Pt(localStorage.getItem("theme")||"system"),e=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>{t.value==="system"&&document.documentElement.classList.toggle("dark",e.matches)},r=()=>{t.value==="dark"?document.documentElement.classList.add("dark"):t.value==="light"?document.documentElement.classList.remove("dark"):n()},s=i=>{t.value=i,localStorage.setItem("theme",i),i==="dark"?document.documentElement.classList.add("dark"):i==="light"?document.documentElement.classList.remove("dark"):n()};return e.addEventListener("change",n),r(),{theme:t,setTheme:s}}),Tc="EEN GNG",bI="EEN Grab and Go Application",RI={class:"min-h-screen bg-gray-50 dark:bg-gray-900"},SI={key:0,class:"fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50"},PI={class:"bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 text-center"},CI={class:"text-gray-600 dark:text-gray-400 mb-4"},kI={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6"},xI={key:1,class:"bg-white dark:bg-gray-800 shadow-lg z-30 relative"},NI={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},OI={class:"flex justify-between h-16"},DI={class:"flex"},VI={class:"flex-shrink-0 flex items-center"},LI={class:"text-xl font-bold text-primary-600 dark:text-primary-400"},MI={class:"hidden sm:ml-6 sm:flex sm:space-x-6"},UI={class:"-mr-2 flex items-center sm:hidden"},FI=["aria-expanded"],BI={class:"pt-2 pb-3 space-y-1"},$I={__name:"App",setup(t){const e=pI(),n=dI(),r=vs();AI();const s=Pt(!1),i=Pt(!1),o=Pt(8e3),l=It(()=>e.path==="/"||e.path==="/direct"),c=()=>{s.value=!1},u=()=>{c(),g()},f=x=>{x.key==="Escape"&&s.value&&c()};kg(()=>{document.addEventListener("keydown",f)}),hu(()=>{document.removeEventListener("keydown",f)});function p(){localStorage.removeItem("eenBaseUrl"),localStorage.removeItem("eenHostname"),localStorage.removeItem("eenPort"),localStorage.removeItem("eenToken"),localStorage.removeItem("eenUserProfile")}const g=async()=>{i.value=!0,await r.logout(x=>{o.value=x}),p(),i.value=!1},_=()=>{i.value=!1,o.value=8e3,r.cancelLogout()},R=async()=>{i.value=!1,o.value=8e3,await r.logout(),p(),n.push("/")};return(x,S)=>{const B=mf("router-link"),U=mf("router-view");return Cr(),Jr("div",RI,[i.value?(Cr(),Jr("div",SI,[Ce("div",PI,[S[1]||(S[1]=Ce("h2",{class:"text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"},"Goodbye!",-1)),Ce("p",CI," Thank you for using "+No(Xe(Tc))+". You will be logged out in "+No(Math.ceil(o.value/1e3))+" seconds. ",1),Ce("div",kI,[Ce("div",{class:"bg-primary-600 h-2.5 rounded-full",style:ka({width:`${o.value/8e3*100}%`})},null,4)]),Ce("div",{class:"flex justify-center space-x-4"},[Ce("button",{class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:_}," Cancel Logout "),Ce("button",{class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:R}," OK ")])])])):Fl("",!0),l.value?Fl("",!0):(Cr(),Jr("nav",xI,[Ce("div",NI,[Ce("div",OI,[Ce("div",DI,[Ce("div",VI,[Ce("span",LI,No(Xe(Tc)),1)]),Ce("div",MI,[Ve(B,{to:"/home",class:rt(["inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",[Xe(e).path==="/home"?"border-primary-500 text-gray-900 dark:text-gray-100":"border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]])},{default:Qt(()=>S[2]||(S[2]=[Xt(" Home ")])),_:1,__:[2]},8,["class"]),Ve(B,{to:"/capture",class:rt(["inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",[Xe(e).path==="/capture"?"border-primary-500 text-gray-900 dark:text-gray-100":"border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]])},{default:Qt(()=>S[3]||(S[3]=[Xt(" Capture ")])),_:1,__:[3]},8,["class"]),Ve(B,{to:"/profile",class:rt(["inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",[Xe(e).path==="/profile"?"border-primary-500 text-gray-900 dark:text-gray-100":"border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]])},{default:Qt(()=>S[4]||(S[4]=[Xt(" Profile ")])),_:1,__:[4]},8,["class"]),Ve(B,{to:"/about",class:rt(["inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",[Xe(e).path==="/about"?"border-primary-500 text-gray-900 dark:text-gray-100":"border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]])},{default:Qt(()=>S[5]||(S[5]=[Xt(" About ")])),_:1,__:[5]},8,["class"]),Ve(B,{to:"/settings",class:rt(["inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",[Xe(e).path==="/settings"?"border-primary-500 text-gray-900 dark:text-gray-100":"border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]])},{default:Qt(()=>S[6]||(S[6]=[Xt(" Settings ")])),_:1,__:[6]},8,["class"])])]),Ce("div",{class:"hidden sm:ml-6 sm:flex sm:items-center"},[Ce("button",{class:"ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:g}," Logout ")]),Ce("div",UI,[Ce("button",{type:"button",class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500","aria-controls":"mobile-menu","aria-expanded":s.value,onClick:S[0]||(S[0]=$=>s.value=!s.value)},[S[9]||(S[9]=Ce("span",{class:"sr-only"},"Open main menu",-1)),(Cr(),Jr("svg",{class:rt(["block h-6 w-6",{hidden:s.value}]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},S[7]||(S[7]=[Ce("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)]),2)),(Cr(),Jr("svg",{class:rt(["hidden h-6 w-6",{block:s.value}]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},S[8]||(S[8]=[Ce("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)]),2))],8,FI)])])]),Ce("div",{id:"mobile-menu",class:rt(["sm:hidden",{block:s.value,hidden:!s.value}])},[Ce("div",BI,[Ve(B,{to:"/home",class:rt(["block pl-3 pr-4 py-2 border-l-4 text-base font-medium",[Xe(e).path==="/home"?"bg-primary-50 dark:bg-primary-900 border-primary-500 text-primary-700 dark:text-primary-400":"border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]]),onClick:c},{default:Qt(()=>S[10]||(S[10]=[Xt(" Home ")])),_:1,__:[10]},8,["class"]),Ve(B,{to:"/capture",class:rt(["block pl-3 pr-4 py-2 border-l-4 text-base font-medium",[Xe(e).path==="/capture"?"bg-primary-50 dark:bg-primary-900 border-primary-500 text-primary-700 dark:text-primary-400":"border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]]),onClick:c},{default:Qt(()=>S[11]||(S[11]=[Xt(" Capture ")])),_:1,__:[11]},8,["class"]),Ve(B,{to:"/profile",class:rt(["block pl-3 pr-4 py-2 border-l-4 text-base font-medium",[Xe(e).path==="/profile"?"bg-primary-50 dark:bg-primary-900 border-primary-500 text-primary-700 dark:text-primary-400":"border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]]),onClick:c},{default:Qt(()=>S[12]||(S[12]=[Xt(" Profile ")])),_:1,__:[12]},8,["class"]),Ve(B,{to:"/about",class:rt(["block pl-3 pr-4 py-2 border-l-4 text-base font-medium",[Xe(e).path==="/about"?"bg-primary-50 dark:bg-primary-900 border-primary-500 text-primary-700 dark:text-primary-400":"border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]]),onClick:c},{default:Qt(()=>S[13]||(S[13]=[Xt(" About ")])),_:1,__:[13]},8,["class"]),Ve(B,{to:"/settings",class:rt(["block pl-3 pr-4 py-2 border-l-4 text-base font-medium",[Xe(e).path==="/settings"?"bg-primary-50 dark:bg-primary-900 border-primary-500 text-primary-700 dark:text-primary-400":"border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300"]]),onClick:c},{default:Qt(()=>S[14]||(S[14]=[Xt(" Settings ")])),_:1,__:[14]},8,["class"]),Ce("button",{class:"w-full text-left border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:text-gray-400 hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",onClick:u}," Logout ")])],2)])),s.value?(Cr(),Jr("div",{key:2,class:"fixed inset-0 z-20 bg-black bg-opacity-30 backdrop-blur-sm transition-all duration-200",onClick:c})):Fl("",!0),Ce("div",{class:rt({"pointer-events-none":s.value})},[Ve(U)],2)])}}},jI=()=>{};var ud={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Em={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new HI;const g=i<<2|l>>4;if(r.push(g),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zI=function(t){const e=vm(t);return Em.encodeByteArray(e,!0)},sa=function(t){return zI(t).replace(/\./g,"")},wm=function(t){try{return Em.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=()=>WI().__FIREBASE_DEFAULTS__,GI=()=>{if(typeof process>"u"||typeof ud>"u")return;const t=ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wm(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return jI()||KI()||GI()||QI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tm=t=>{var e,n;return(n=(e=qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_u=t=>{const e=Tm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Im=()=>{var t;return(t=qa())===null||t===void 0?void 0:t.config},Am=t=>{var e;return(e=qa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){return t.endsWith(".cloudworkstations.dev")}async function Ha(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sa(JSON.stringify(n)),sa(JSON.stringify(o)),""].join(".")}const gi={};function YI(){const t={prod:[],emulator:[]};for(const e of Object.keys(gi))gi[e]?t.emulator.push(e):t.prod.push(e);return t}function JI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let hd=!1;function za(t,e){if(typeof window>"u"||typeof document>"u"||!Un(window.location.host)||gi[t]===e||gi[t]||hd)return;gi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=YI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{hd=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=JI(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),x=n("learnmore"),S=document.getElementById(x)||document.createElement("a"),B=n("preprendIcon"),U=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const $=g.element;l($),f(S,x);const j=u();c(U,B),$.append(U,R,S,j),document.body.appendChild($)}i?(R.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function e0(){var t;const e=(t=qa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function t0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function n0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function r0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s0(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i0(){return!e0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function o0(){try{return typeof indexedDB=="object"}catch{return!1}}function a0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=l0,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?c0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new tn(s,l,r)}}function c0(t,e){return t.replace(u0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const u0=/\{\$([^}]+)}/g;function h0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fd(i)&&fd(o)){if(!Lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function f0(t,e){const n=new d0(t,e);return n.subscribe.bind(n)}class d0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");p0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wl),s.error===void 0&&(s.error=Wl),s.complete===void 0&&(s.complete=Wl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_0(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:m0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m0(t){return t===kr?void 0:t}function _0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const v0={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},E0=_e.INFO,w0={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},T0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=w0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=E0,this._logHandler=T0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const I0=(t,e)=>e.some(n=>t instanceof n);let dd,pd;function A0(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b0(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rm=new WeakMap,Ic=new WeakMap,Sm=new WeakMap,Kl=new WeakMap,vu=new WeakMap;function R0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rm.set(n,t)}).catch(()=>{}),vu.set(e,t),e}function S0(t){if(Ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P0(t){Ac=t(Ac)}function C0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gl(this),e,...n);return Sm.set(r,e.sort?e.sort():[e]),ir(r)}:b0().includes(t)?function(...e){return t.apply(Gl(this),e),ir(Rm.get(this))}:function(...e){return ir(t.apply(Gl(this),e))}}function k0(t){return typeof t=="function"?C0(t):(t instanceof IDBTransaction&&S0(t),I0(t,A0())?new Proxy(t,Ac):t)}function ir(t){if(t instanceof IDBRequest)return R0(t);if(Kl.has(t))return Kl.get(t);const e=k0(t);return e!==t&&(Kl.set(t,e),vu.set(e,t)),e}const Gl=t=>vu.get(t);function x0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ir(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ir(o.result),c.oldVersion,c.newVersion,ir(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const N0=["get","getKey","getAll","getAllKeys","count"],O0=["put","add","delete","clear"],Ql=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ql.get(e))return Ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=O0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||N0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Ql.set(e,i),i}P0(t=>({...t,get:(e,n,r)=>gd(e,n)||t.get(e,n,r),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",md="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new yu("@firebase/app"),L0="@firebase/app-compat",M0="@firebase/analytics-compat",U0="@firebase/analytics",F0="@firebase/app-check-compat",B0="@firebase/app-check",$0="@firebase/auth",j0="@firebase/auth-compat",q0="@firebase/database",H0="@firebase/data-connect",z0="@firebase/database-compat",W0="@firebase/functions",K0="@firebase/functions-compat",G0="@firebase/installations",Q0="@firebase/installations-compat",X0="@firebase/messaging",Y0="@firebase/messaging-compat",J0="@firebase/performance",Z0="@firebase/performance-compat",eA="@firebase/remote-config",tA="@firebase/remote-config-compat",nA="@firebase/storage",rA="@firebase/storage-compat",sA="@firebase/firestore",iA="@firebase/ai",oA="@firebase/firestore-compat",aA="firebase",lA="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="[DEFAULT]",cA={[bc]:"fire-core",[L0]:"fire-core-compat",[U0]:"fire-analytics",[M0]:"fire-analytics-compat",[B0]:"fire-app-check",[F0]:"fire-app-check-compat",[$0]:"fire-auth",[j0]:"fire-auth-compat",[q0]:"fire-rtdb",[H0]:"fire-data-connect",[z0]:"fire-rtdb-compat",[W0]:"fire-fn",[K0]:"fire-fn-compat",[G0]:"fire-iid",[Q0]:"fire-iid-compat",[X0]:"fire-fcm",[Y0]:"fire-fcm-compat",[J0]:"fire-perf",[Z0]:"fire-perf-compat",[eA]:"fire-rc",[tA]:"fire-rc-compat",[nA]:"fire-gcs",[rA]:"fire-gcs-compat",[sA]:"fire-fst",[oA]:"fire-fst-compat",[iA]:"fire-vertex","fire-js":"fire-js",[aA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,uA=new Map,Sc=new Map;function _d(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fr(t){const e=t.name;if(Sc.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,t);for(const n of Ci.values())_d(n,t);for(const n of uA.values())_d(n,t);return!0}function zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new qi("app","Firebase",hA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=lA;function Pm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw or.create("bad-app-name",{appName:String(s)});if(n||(n=Im()),!n)throw or.create("no-options");const i=Ci.get(s);if(i){if(Lr(n,i.options)&&Lr(r,i.config))return i;throw or.create("duplicate-app",{appName:s})}const o=new y0(s);for(const c of Sc.values())o.addComponent(c);const l=new fA(n,r,o);return Ci.set(s,l),l}function Wa(t=Rc){const e=Ci.get(t);if(!e&&t===Rc&&Im())return Pm();if(!e)throw or.create("no-app",{appName:t});return e}function yd(){return Array.from(Ci.values())}function zt(t,e,n){var r;let s=(r=cA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}fr(new xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="firebase-heartbeat-database",pA=1,ki="firebase-heartbeat-store";let Xl=null;function Cm(){return Xl||(Xl=x0(dA,pA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Xl}async function gA(t){try{const n=(await Cm()).transaction(ki),r=await n.objectStore(ki).get(km(t));return await n.done,r}catch(e){if(e instanceof tn)Nn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function vd(t,e){try{const r=(await Cm()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,km(t)),await r.done}catch(n){if(n instanceof tn)Nn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function km(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=1024,_A=30;class yA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>_A){const o=wA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:r,unsentEntries:s}=vA(this._heartbeatsCache.heartbeats),i=sa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nn.warn(n),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function vA(t,e=mA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return o0()?a0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return sa(JSON.stringify({version:2,heartbeats:t})).length}function wA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){fr(new xn("platform-logger",e=>new D0(e),"PRIVATE")),fr(new xn("heartbeat",e=>new yA(e),"PRIVATE")),zt(bc,md,t),zt(bc,md,"esm2017"),zt("fire-js","")}TA("");var IA="firebase",AA="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(IA,AA,"app");function Eu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bA=xm,Nm=new qi("auth","Firebase",xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new yu("@firebase/auth");function RA(t,...e){ia.logLevel<=_e.WARN&&ia.warn(`Auth (${qr}): ${t}`,...e)}function Mo(t,...e){ia.logLevel<=_e.ERROR&&ia.error(`Auth (${qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw wu(t,...e)}function un(t,...e){return wu(t,...e)}function Om(t,e,n){const r=Object.assign(Object.assign({},bA()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return Om(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nm.create(t,...e)}function ue(t,e,...n){if(!t)throw wu(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function Dn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SA(){return Td()==="http:"||Td()==="https:"}function Td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SA()||n0()||"connection"in navigator)?navigator.onLine:!0}function CA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZI()||r0()}get(){return PA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NA=new Wi(3e4,6e4);function Ka(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cs(t,e,n,r,s={}){return Vm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return t0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Un(t.emulatorConfig.host)&&(u.credentials="include"),Dm.fetch()(await Mm(t,t.config.apiHost,n,l),u)})}async function Vm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kA),e);try{const s=new OA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Om(t,f,u);On(t,f)}}catch(s){if(s instanceof tn)throw s;On(t,"network-request-failed",{message:String(s)})}}async function Lm(t,e,n,r,s={}){const i=await Cs(t,e,n,r,s);return"mfaPendingCredential"in i&&On(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Mm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Tu(t.config,s):`${t.config.apiScheme}://${s}`;return xA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class OA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),NA.get())})}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){return Cs(t,"POST","/v1/accounts:delete",e)}async function oa(t,e){return Cs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Iu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mi(Yl(s.auth_time)),issuedAtTime:mi(Yl(s.iat)),expirationTime:mi(Yl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yl(t){return Number(t)*1e3}function Iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=wm(n);return s?JSON.parse(s):(Mo("Failed to decode base64 JWT payload"),null)}catch(s){return Mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Id(t){const e=Iu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&LA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xi(t,oa(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Um(i.providerUserInfo):[],l=FA(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Cc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function UA(t){const e=Se(t);await aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Um(t){return t.map(e=>{var{providerId:n}=e,r=Eu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){const n=await Vm(t,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Mm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Un(t.emulatorConfig.host)&&(c.credentials="include"),Dm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $A(t,e){return Cs(t,"POST","/v2/accounts:revokeToken",Ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await BA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hs;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VA(this,e)}reload(){return UA(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await xi(this,DA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:j,isAnonymous:te,providerData:G,stsTokenManager:I}=n;ue($&&I,e,"internal-error");const y=hs.fromJSON(this.name,I);ue(typeof $=="string",e,"internal-error"),Wn(p,e.name),Wn(g,e.name),ue(typeof j=="boolean",e,"internal-error"),ue(typeof te=="boolean",e,"internal-error"),Wn(_,e.name),Wn(R,e.name),Wn(x,e.name),Wn(S,e.name),Wn(B,e.name),Wn(U,e.name);const v=new Yt({uid:$,auth:e,email:g,emailVerified:j,displayName:p,isAnonymous:te,photoURL:R,phoneNumber:_,tenantId:x,stsTokenManager:y,createdAt:B,lastLoginAt:U});return G&&Array.isArray(G)&&(v.providerData=G.map(A=>Object.assign({},A))),S&&(v._redirectEventId=S),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new hs;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Um(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new hs;l.updateFromIdToken(r);const c=new Yt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Cc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Map;function Sn(t){Dn(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fm.type="NONE";const bd=Fm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Uo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await oa(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Sn(bd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Sn(bd);const o=Uo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await oa(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Yt._fromGetAccountInfoResponse(e,g,f)}else p=Yt._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Wm(e))return"Webos";if($m(e))return"Safari";if((e.includes("chrome/")||jm(e))&&!e.includes("edge/"))return"Chrome";if(Hm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bm(t=yt()){return/firefox\//i.test(t)}function $m(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jm(t=yt()){return/crios\//i.test(t)}function qm(t=yt()){return/iemobile/i.test(t)}function Hm(t=yt()){return/android/i.test(t)}function zm(t=yt()){return/blackberry/i.test(t)}function Wm(t=yt()){return/webos/i.test(t)}function Au(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jA(t=yt()){var e;return Au(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qA(){return s0()&&document.documentMode===10}function Km(t=yt()){return Au(t)||Hm(t)||Wm(t)||zm(t)||/windows phone/i.test(t)||qm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e=[]){let n;switch(t){case"Browser":n=Rd(yt());break;case"Worker":n=`${Rd(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e={}){return Cs(t,"GET","/v2/passwordPolicy",Ka(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=6;class KA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sd(this),this.idTokenSubscription=new Sd(this),this.beforeStateQueue=new HA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oa(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(ar(this));const n=e?Se(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zA(this),n=new KA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $A(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ga(t){return Se(t)}class Sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=f0(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QA(t){bu=t}function XA(t){return bu.loadJS(t)}function YA(){return bu.gapiScript}function JA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e){const n=zi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Lr(i,e??{}))return s;On(s,"already-initialized")}return n.initialize({options:e})}function eb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tb(t,e,n){const r=Ga(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qm(e),{host:o,port:l}=nb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Lr(u,r.config.emulator)&&Lr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Un(o)?(Ha(`${i}//${o}${c}`),za("Auth",!0)):rb()}function Qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nb(t){const e=Qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pd(o)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Lm(t,"POST","/v1/accounts:signInWithIdp",Ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="http://localhost";class Mr extends Xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:sb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Ym{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ki{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Ki{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Ki{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=Cd(r);return new Ur({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cd(r);return new Ur({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new la(e,n,r,s)}}function Jm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(t,i,e,r):i})}async function ib(t,e,n=!1){const r=await xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await xi(t,Jm(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Iu(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),Ur._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&On(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e,n=!1){if(Mt(t.app))return Promise.reject(ar(t));const r="signIn",s=await Jm(t,r,e),i=await Ur._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e){return Lm(t,"POST","/v1/accounts:signInWithCustomToken",Ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e){if(Mt(t.app))return Promise.reject(ar(t));const n=Ga(t),r=await lb(n,{token:e,returnSecureToken:!0}),s=await Ur._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}function ub(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function hb(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function fb(t){return Se(t).signOut()}const ca="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=1e3,pb=10;class e_ extends Zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Km(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const gb=e_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await mb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ru("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function yb(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wb(){return r_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="firebaseLocalStorageDb",Tb=1,ua="firebaseLocalStorage",i_="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xa(t,e){return t.transaction([ua],e?"readwrite":"readonly").objectStore(ua)}function Ib(){const t=indexedDB.deleteDatabase(s_);return new Gi(t).toPromise()}function kc(){const t=indexedDB.open(s_,Tb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ua,{keyPath:i_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ua)?e(r):(r.close(),await Ib(),e(await kc()))})})}async function kd(t,e,n){const r=Xa(t,!0).put({[i_]:e,value:n});return new Gi(r).toPromise()}async function Ab(t,e){const n=Xa(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=Xa(t,!0).delete(e);return new Gi(n).toPromise()}const bb=800,Rb=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(wb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vb(),!this.activeServiceWorker)return;this.sender=new _b(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kc();return await kd(e,ca,"1"),await xd(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xa(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const Sb=o_;new Wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t,e){return e?Sn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Xm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cb(t){return ab(t.auth,new Su(t),t.bypassAuthState)}function kb(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),ob(n,new Su(t),t.bypassAuthState)}async function xb(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),ib(n,new Su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cb;case"linkViaPopup":case"linkViaRedirect":return xb;case"reauthViaPopup":case"reauthViaRedirect":return kb;default:On(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new Wi(2e3,1e4);class os extends a_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nb.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="pendingRedirect",Fo=new Map;class Db extends a_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await Vb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vb(t,e){const n=Ub(e),r=Mb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lb(t,e){Fo.set(t._key(),e)}function Mb(t){return Sn(t._redirectPersistence)}function Ub(t){return Uo(Ob,t.config.apiKey,t.name)}async function Fb(t,e,n=!1){if(Mt(t.app))return Promise.reject(ar(t));const r=Ga(t),s=Pb(r,e),o=await new Db(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=10*60*1e3;class $b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!l_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nd(e))}saveEventToCache(e){this.cachedEventUids.add(Nd(e)),this.lastProcessedEventTime=Date.now()}}function Nd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e={}){return Cs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zb=/^https?/;async function Wb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qb(t);for(const n of e)try{if(Kb(n))return}catch{}On(t,"unauthorized-domain")}function Kb(t){const e=Pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zb.test(n))return!1;if(Hb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Wi(3e4,6e4);function Od(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qb(t){return new Promise((e,n)=>{var r,s,i;function o(){Od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Od(),n(un(t,"network-request-failed"))},timeout:Gb.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const l=JA("iframefcb");return hn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},XA(`${YA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function Xb(t){return Bo=Bo||Qb(t),Bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new Wi(5e3,15e3),Jb="__/auth/iframe",Zb="emulator/auth/iframe",eR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nR(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,Zb):`https://${t.config.authDomain}/${Jb}`,r={apiKey:e.apiKey,appName:t.name,v:qr},s=tR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hi(r).slice(1)}`}async function rR(t){const e=await Xb(t),n=hn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:nR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=hn().setTimeout(()=>{i(o)},Yb.get());function c(){hn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iR=500,oR=600,aR="_blank",lR="http://localhost";class Dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cR(t,e,n,r=iR,s=oR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},sR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=yt().toLowerCase();n&&(l=jm(u)?aR:n),Bm(u)&&(e=e||lR,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,R])=>`${g}${_}=${R},`,"");if(jA(u)&&l!=="_self")return uR(e||"",l),new Dd(null);const p=window.open(e||"",l,f);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Dd(p)}function uR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="__/auth/handler",fR="emulator/auth/handler",dR=encodeURIComponent("fac");async function Vd(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qr,eventId:s};if(e instanceof Ym){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",h0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ki){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${dR}=${encodeURIComponent(c)}`:"";return`${pR(t)}?${Hi(l).slice(1)}${u}`}function pR({config:t}){return t.emulator?Tu(t,fR):`https://${t.authDomain}/${hR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class gR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=Fb,this._overrideRedirectResult=Lb}async _openPopup(e,n,r,s){var i;Dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Vd(e,n,r,Pc(),s);return cR(e,o,Ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Vd(e,n,r,Pc(),s);return yb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rR(e),r=new $b(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Jl];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Km()||$m()||Au()}}const mR=gR;var Ld="@firebase/auth",Md="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vR(t){fr(new xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gm(t)},u=new GA(r,s,i,c);return eb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fr(new xn("auth-internal",e=>{const n=Ga(e.getProvider("auth").getImmediate());return(r=>new _R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Ld,Md,yR(t)),zt(Ld,Md,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=5*60,wR=Am("authIdTokenMaxAge")||ER;let Ud=null;const TR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wR)return;const s=n==null?void 0:n.token;Ud!==s&&(Ud=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function c_(t=Wa()){const e=zi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZA(t,{popupRedirectResolver:mR,persistence:[Sb,gb,n_]}),r=Am("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=TR(i.toString());hb(n,o,()=>o(n.currentUser)),ub(n,l=>o(l))}}const s=Tm("auth");return s&&tb(n,`http://${s}`),n}function IR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",IR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vR("Browser");var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,u_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function v(){}v.prototype=y.prototype,I.D=y.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(A,b,P){for(var w=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)w[Je-2]=arguments[Je];return y.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,v){v||(v=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)A[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=I.g[0],v=I.g[1],b=I.g[2];var P=I.g[3],w=y+(P^v&(b^P))+A[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=P+(b^y&(v^b))+A[1]+3905402710&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(v^P&(y^v))+A[2]+606105819&4294967295,b=P+(w<<17&4294967295|w>>>15),w=v+(y^b&(P^y))+A[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(P^v&(b^P))+A[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=P+(b^y&(v^b))+A[5]+1200080426&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(v^P&(y^v))+A[6]+2821735955&4294967295,b=P+(w<<17&4294967295|w>>>15),w=v+(y^b&(P^y))+A[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(P^v&(b^P))+A[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=P+(b^y&(v^b))+A[9]+2336552879&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(v^P&(y^v))+A[10]+4294925233&4294967295,b=P+(w<<17&4294967295|w>>>15),w=v+(y^b&(P^y))+A[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(P^v&(b^P))+A[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=P+(b^y&(v^b))+A[13]+4254626195&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(v^P&(y^v))+A[14]+2792965006&4294967295,b=P+(w<<17&4294967295|w>>>15),w=v+(y^b&(P^y))+A[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(b^P&(v^b))+A[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=P+(v^b&(y^v))+A[6]+3225465664&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(P^y))+A[11]+643717713&4294967295,b=P+(w<<14&4294967295|w>>>18),w=v+(P^y&(b^P))+A[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^P&(v^b))+A[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=P+(v^b&(y^v))+A[10]+38016083&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(P^y))+A[15]+3634488961&4294967295,b=P+(w<<14&4294967295|w>>>18),w=v+(P^y&(b^P))+A[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^P&(v^b))+A[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=P+(v^b&(y^v))+A[14]+3275163606&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(P^y))+A[3]+4107603335&4294967295,b=P+(w<<14&4294967295|w>>>18),w=v+(P^y&(b^P))+A[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^P&(v^b))+A[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=P+(v^b&(y^v))+A[2]+4243563512&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(P^y))+A[7]+1735328473&4294967295,b=P+(w<<14&4294967295|w>>>18),w=v+(P^y&(b^P))+A[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(v^b^P)+A[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=P+(y^v^b)+A[8]+2272392833&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^v)+A[11]+1839030562&4294967295,b=P+(w<<16&4294967295|w>>>16),w=v+(b^P^y)+A[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^P)+A[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=P+(y^v^b)+A[4]+1272893353&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^v)+A[7]+4139469664&4294967295,b=P+(w<<16&4294967295|w>>>16),w=v+(b^P^y)+A[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^P)+A[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=P+(y^v^b)+A[0]+3936430074&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^v)+A[3]+3572445317&4294967295,b=P+(w<<16&4294967295|w>>>16),w=v+(b^P^y)+A[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^P)+A[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=P+(y^v^b)+A[12]+3873151461&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^v)+A[15]+530742520&4294967295,b=P+(w<<16&4294967295|w>>>16),w=v+(b^P^y)+A[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(b^(v|~P))+A[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=P+(v^(y|~b))+A[7]+1126891415&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~v))+A[14]+2878612391&4294967295,b=P+(w<<15&4294967295|w>>>17),w=v+(P^(b|~y))+A[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~P))+A[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=P+(v^(y|~b))+A[3]+2399980690&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~v))+A[10]+4293915773&4294967295,b=P+(w<<15&4294967295|w>>>17),w=v+(P^(b|~y))+A[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~P))+A[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=P+(v^(y|~b))+A[15]+4264355552&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~v))+A[6]+2734768916&4294967295,b=P+(w<<15&4294967295|w>>>17),w=v+(P^(b|~y))+A[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~P))+A[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=P+(v^(y|~b))+A[11]+3174756917&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~v))+A[2]+718787259&4294967295,b=P+(w<<15&4294967295|w>>>17),w=v+(P^(b|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var v=y-this.blockSize,A=this.B,b=this.h,P=0;P<y;){if(b==0)for(;P<=v;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<y;)if(A[b++]=I.charCodeAt(P++),b==this.blockSize){s(this,A),b=0;break}}else for(;P<y;)if(A[b++]=I[P++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var v=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=v&255,v/=256;for(this.u(I),I=Array(16),y=v=0;4>y;++y)for(var A=0;32>A;A+=8)I[v++]=this.g[y]>>>A&255;return I};function i(I,y){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=y(I)}function o(I,y){this.h=y;for(var v=[],A=!0,b=I.length-1;0<=b;b--){var P=I[b]|0;A&&P==y||(v[b]=P,A=!1)}this.g=v}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return S(u(-I));for(var y=[],v=1,A=0;I>=v;A++)y[A]=I/v|0,v*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return S(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),A=p,b=0;b<I.length;b+=8){var P=Math.min(8,I.length-b),w=parseInt(I.substring(b,b+P),y);8>P?(P=u(Math.pow(y,P)),A=A.j(P).add(u(w))):(A=A.j(v),A=A.add(u(w)))}return A}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-S(this).m();for(var I=0,y=1,v=0;v<this.g.length;v++){var A=this.i(v);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(x(this))return"-"+S(this).toString(I);for(var y=u(Math.pow(I,6)),v=this,A="";;){var b=j(v,y).g;v=B(v,b.j(y));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=b,R(v))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=B(this,I),x(I)?-1:R(I)?0:1};function S(I){for(var y=I.g.length,v=[],A=0;A<y;A++)v[A]=~I.g[A];return new o(v,~I.h).add(g)}t.abs=function(){return x(this)?S(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],A=0,b=0;b<=y;b++){var P=A+(this.i(b)&65535)+(I.i(b)&65535),w=(P>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=w>>>16,P&=65535,w&=65535,v[b]=w<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(I,y){return I.add(S(y))}t.j=function(I){if(R(this)||R(I))return p;if(x(this))return x(I)?S(this).j(S(I)):S(S(this).j(I));if(x(I))return S(this.j(S(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,v=[],A=0;A<2*y;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var P=this.i(A)>>>16,w=this.i(A)&65535,Je=I.i(b)>>>16,bt=I.i(b)&65535;v[2*A+2*b]+=w*bt,U(v,2*A+2*b),v[2*A+2*b+1]+=P*bt,U(v,2*A+2*b+1),v[2*A+2*b+1]+=w*Je,U(v,2*A+2*b+1),v[2*A+2*b+2]+=P*Je,U(v,2*A+2*b+2)}for(A=0;A<y;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=y;A<2*y;A++)v[A]=0;return new o(v,0)};function U(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function $(I,y){this.g=I,this.h=y}function j(I,y){if(R(y))throw Error("division by zero");if(R(I))return new $(p,p);if(x(I))return y=j(S(I),y),new $(S(y.g),S(y.h));if(x(y))return y=j(I,S(y)),new $(S(y.g),y.h);if(30<I.g.length){if(x(I)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,A=y;0>=A.l(I);)v=te(v),A=te(A);var b=G(v,1),P=G(A,1);for(A=G(A,2),v=G(v,2);!R(A);){var w=P.add(A);0>=w.l(I)&&(b=b.add(v),P=w),A=G(A,1),v=G(v,1)}return y=B(I,b.j(y)),new $(b,y)}for(b=p;0<=I.l(y);){for(v=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(v),w=P.j(y);x(w)||0<w.l(I);)v-=A,P=u(v),w=P.j(y);R(P)&&(P=g),b=b.add(P),I=B(I,w)}return new $(b,I)}t.A=function(I){return j(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)&I.i(A);return new o(v,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)|I.i(A);return new o(v,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)^I.i(A);return new o(v,this.h^I.h)};function te(I){for(var y=I.g.length+1,v=[],A=0;A<y;A++)v[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(v,I.h)}function G(I,y){var v=y>>5;y%=32;for(var A=I.g.length-v,b=[],P=0;P<A;P++)b[P]=0<y?I.i(P+v)>>>y|I.i(P+v+1)<<32-y:I.i(P+v);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,lr=o}).apply(typeof Fd<"u"?Fd:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,ei,f_,$o,xc,d_,p_,g_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in d))break e;d=d[k]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,m=!1,k={next:function(){if(!m&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,k,N){for(var W=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)W[Pe-2]=arguments[Pe];return h.prototype[k].apply(m,W)}}function x(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function S(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const k=a.length||0,N=m.length||0;a.length=k+N;for(let W=0;W<N;W++)a[k+W]=m[W]}else a.push(m)}}class B{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var te=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function G(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)a[d]=m[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Je{constructor(){this.h=this.g=null}add(h,d){const m=bt.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var bt=new B(()=>new xe,a=>a.reset());class xe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,Dt=new Je,Kt=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(Bt)}};var Bt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){P(d)}var h=bt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}me=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function nn(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(te){e:{try{j(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}R(nn,Ue);var Rt={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function X(a,h,d,m,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=k,this.key=++J,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function we(a){this.src=a,this.g={},this.h=0}we.prototype.add=function(a,h,d,m,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=T(a,h,m,k);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new X(h,this.src,N,!!m,k),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var m=a.g[d],k=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=k)&&Array.prototype.splice.call(m,k,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,h,d,m){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==m)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),D={};function F(a,h,d,m,k){if(Array.isArray(h)){for(var N=0;N<h.length;N++)F(a,h[N],d,m,k);return null}return d=le(d),a&&a[O]?a.K(h,d,u(m)?!!m.capture:!1,k):L(a,h,d,!1,m,k)}function L(a,h,d,m,k,N){if(!h)throw Error("Invalid event type");var W=u(k)?!!k.capture:!!k,Pe=K(a);if(Pe||(a[C]=Pe=new we(a)),d=Pe.add(h,d,m,W,N),d.proxy)return d;if(m=Q(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Fn||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),m,k);else if(a.attachEvent)a.attachEvent(q(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=re;return a}function z(a,h,d,m,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)z(a,h[N],d,m,k);else m=u(m)?!!m.capture:!!m,d=le(d),a&&a[O]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=T(N,d,m,k),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=K(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,d,m,k)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[O])E(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(q(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=K(h))?(E(d,a),d.h==0&&(d.src=null,h[C]=null)):ee(a)}}}function q(a){return a in D?D[a]:D[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new nn(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&H(a),a=d.call(m,h)}return a}function K(a){return a=a[C],a instanceof we?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ie(){Me.call(this),this.i=new we(this),this.M=this,this.F=null}R(ie,Me),ie.prototype[O]=!0,ie.prototype.removeEventListener=function(a,h,d,m){z(this,a,h,d,m)};function pe(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var k=h;h=new Ue(m,a),A(h,k)}if(k=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];k=ve(W,m,!0,h)&&k}if(W=h.g=a,k=ve(W,m,!0,h)&&k,k=ve(W,m,!1,h)&&k,d)for(N=0;N<d.length;N++)W=h.g=d[N],k=ve(W,m,!1,h)&&k}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)ee(d[m]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},ie.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function ve(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var Pe=W.listener,nt=W.ha||W.src;W.fa&&E(a.i,W),k=Pe.call(nt,m)!==!1&&k}}return k&&!m.defaultPrevented}function Ze(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function et(a){a.g=Ze(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $t extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(a){Me.call(this),this.h=a,this.g={}}R(ct,Me);var Bn=[];function Ls(a){G(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}ct.prototype.N=function(){ct.aa.N.call(this),Ls(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,jt=l.JSON.parse,ro=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function _l(){}_l.prototype.h=null;function vh(a){return a.h||(a.h=a.i())}function Eh(){}var Ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yl(){Ue.call(this,"d")}R(yl,Ue);function vl(){Ue.call(this,"c")}R(vl,Ue);var Tr={},wh=null;function so(){return wh=wh||new ie}Tr.La="serverreachability";function Th(a){Ue.call(this,Tr.La,a)}R(Th,Ue);function Us(a){const h=so();pe(h,new Th(h))}Tr.STAT_EVENT="statevent";function Ih(a,h){Ue.call(this,Tr.STAT_EVENT,a),this.stat=h}R(Ih,Ue);function vt(a){const h=so();pe(h,new Ih(h,a))}Tr.Ma="timingevent";function Ah(a,h){Ue.call(this,Tr.Ma,a),this.size=h}R(Ah,Ue);function Fs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Bs(){this.g=!0}Bs.prototype.xa=function(){this.g=!1};function uv(a,h,d,m,k,N){a.info(function(){if(a.g)if(N)for(var W="",Pe=N.split("&"),nt=0;nt<Pe.length;nt++){var Te=Pe[nt].split("=");if(1<Te.length){var ut=Te[0];Te=Te[1];var ht=ut.split("_");W=2<=ht.length&&ht[1]=="type"?W+(ut+"="+Te+"&"):W+(ut+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+h+`
`+d+`
`+W})}function hv(a,h,d,m,k,N,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+h+`
`+d+`
`+N+" "+W})}function Kr(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+dv(a,d)+(m?" "+m:"")})}function fv(a,h){a.info(function(){return"TIMEOUT: "+h})}Bs.prototype.info=function(){};function dv(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return tt(d)}catch{return h}}var io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},El;function oo(){}R(oo,_l),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},El=new oo;function $n(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rh}function Rh(){this.i=null,this.g="",this.h=!1}var Sh={},wl={};function Tl(a,h,d){a.L=1,a.v=uo(yn(h)),a.m=d,a.P=!0,Ph(a,null)}function Ph(a,h){a.F=Date.now(),ao(a),a.A=yn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),jh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Rh,a.g=af(a.j,d?h:null,!a.m),0<a.O&&(a.M=new $t(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Bn[0]=k.toString()),k=Bn);for(var N=0;N<k.length;N++){var W=F(d,k[N],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Us(),uv(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const ht=vn(this.g);var h=this.g.Ba();const Xr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Qh(this.g)))){this.J||ht!=4||h==7||(h==8||0>=Xr?Us(3):Us(2)),Il(this);var d=this.g.Z();this.X=d;t:if(Ch(this)){var m=Qh(this.g);a="";var k=m.length,N=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),$s(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(N&&h==k-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,hv(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,nt=this.g;if((Pe=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Pe)){var Te=Pe;break t}}Te=null}if(d=Te)Kr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Al(this,d);else{this.o=!1,this.s=3,vt(12),Ir(this),$s(this);break e}}if(this.P){d=!0;let Gt;for(;!this.J&&this.C<W.length;)if(Gt=pv(this,W),Gt==wl){ht==4&&(this.s=4,vt(14),d=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Sh){this.s=4,vt(15),Kr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Kr(this.i,this.l,Gt,null),Al(this,Gt);if(Ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||W.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)Kr(this.i,this.l,W,"[Invalid Chunked Response]"),Ir(this),$s(this);else if(0<W.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),kl(ut),ut.M=!0,vt(11))}}else Kr(this.i,this.l,W,null),Al(this,W);ht==4&&Ir(this),this.o&&!this.J&&(ht==4?nf(this.j,this):(this.o=!1,ao(this)))}else xv(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Ir(this),$s(this)}}}catch{}finally{}};function Ch(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function pv(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?wl:(d=Number(h.substring(d,m)),isNaN(d)?Sh:(m+=1,m+d>h.length?wl:(h=h.slice(m,m+d),a.C=m+d,h)))}$n.prototype.cancel=function(){this.J=!0,Ir(this)};function ao(a){a.S=Date.now()+a.I,kh(a,a.I)}function kh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Fs(g(a.ba,a),h)}function Il(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(fv(this.i,this.A),this.L!=2&&(Us(),vt(17)),Ir(this),this.s=2,$s(this)):kh(this,this.S-a)};function $s(a){a.j.G==0||a.J||nf(a.j,a)}function Ir(a){Il(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ls(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Al(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||bl(d.h,a))){if(!a.K&&bl(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)_o(d),go(d);else break e;Cl(d),vt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fs(g(d.Za,d),6e3));if(1>=Oh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else br(d,11)}else if((a.K||d.g==a)&&_o(d),!U(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Te=k[h];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const ut=Te[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=Te[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const Xr=Te[5];Xr!=null&&typeof Xr=="number"&&0<Xr&&(m=1.5*Xr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Gt=a.g;if(Gt){const vo=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var N=m.h;N.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Rl(N,N.h),N.h=null))}if(m.D){const xl=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;xl&&(m.ya=xl,De(m.I,m.D,xl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=a;if(m.qa=of(m,m.J?m.ia:null,m.W),W.K){Dh(m.h,W);var Pe=W,nt=m.L;nt&&(Pe.I=nt),Pe.B&&(Il(Pe),ao(Pe)),m.g=W}else ef(m);0<d.i.length&&mo(d)}else Te[0]!="stop"&&Te[0]!="close"||br(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?br(d,7):Pl(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Us(4)}catch{}}var gv=class{constructor(a,h){this.g=a,this.map=h}};function xh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Oh(a){return a.h?1:a.g?a.g.size:0}function bl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Rl(a,h){a.g?a.g.add(h):a.h=h}function Dh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}xh.prototype.cancel=function(){if(this.i=Vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return x(a.i)}function mv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function _v(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function Lh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=_v(a),m=mv(a),k=m.length,N=0;N<k;N++)h.call(void 0,m[N],d&&d[N],a)}var Mh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yv(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),k=null;if(0<=m){var N=a[d].substring(0,m);k=a[d].substring(m+1)}else N=a[d];h(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,lo(this,a.j),this.o=a.o,this.g=a.g,co(this,a.s),this.l=a.l;var h=a.i,d=new Hs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Uh(this,d),this.m=a.m}else a&&(h=String(a).match(Mh))?(this.h=!1,lo(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),co(this,h[4]),this.l=js(h[5]||"",!0),Uh(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}Ar.prototype.toString=function(){var a=[],h=this.j;h&&a.push(qs(h,Fh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(qs(h,Fh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(qs(d,d.charAt(0)=="/"?wv:Ev,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",qs(d,Iv)),a.join("")};function yn(a){return new Ar(a)}function lo(a,h,d){a.j=d?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Uh(a,h,d){h instanceof Hs?(a.i=h,Av(a.i,a.h)):(d||(h=qs(h,Tv)),a.i=new Hs(h,a.h))}function De(a,h,d){a.i.set(h,d)}function uo(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,vv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fh=/[#\/\?@]/g,Ev=/[#\?:]/g,wv=/[#\?]/g,Tv=/[#\?@]/g,Iv=/#/g;function Hs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&yv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Hs.prototype,t.add=function(a,h){jn(this),this.i=null,a=Gr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Bh(a,h){jn(a),h=Gr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $h(a,h){return jn(a),h=Gr(a,h),a.g.has(h)}t.forEach=function(a,h){jn(this),this.g.forEach(function(d,m){d.forEach(function(k){a.call(h,k,m,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const k=a[m];for(let N=0;N<k.length;N++)d.push(h[m])}return d},t.V=function(a){jn(this);let h=[];if(typeof a=="string")$h(this,a)&&(h=h.concat(this.g.get(Gr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return jn(this),this.i=null,a=Gr(this,a),$h(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function jh(a,h,d){Bh(a,h),0<d.length&&(a.i=null,a.g.set(Gr(a,h),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const N=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var k=N;W[m]!==""&&(k+="="+encodeURIComponent(String(W[m]))),a.push(k)}}return this.i=a.join("&")};function Gr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Av(a,h){h&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(d,m){var k=m.toLowerCase();m!=k&&(Bh(this,m),jh(this,k,d))},a)),a.j=h}function bv(a,h){const d=new Bs;if(l.Image){const m=new Image;m.onload=_(qn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=_(qn,d,"TestLoadImage: error",!1,h,m),m.onabort=_(qn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(qn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Rv(a,h){const d=new Bs,m=new AbortController,k=setTimeout(()=>{m.abort(),qn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(k),N.ok?qn(d,"TestPingServer: ok",!0,h):qn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),qn(d,"TestPingServer: error",!1,h)})}function qn(a,h,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function Sv(){this.g=new ro}function Pv(a,h,d){const m=d||"";try{Lh(a,function(k,N){let W=k;u(k)&&(W=tt(k)),h.push(m+N+"="+encodeURIComponent(W))})}catch(k){throw h.push(m+"type="+encodeURIComponent("_badmap")),k}}function ho(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ho,_l),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=function(a){return function(){return a}}({});function fo(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(fo,ie),t=fo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function qh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zs(this):Ws(this),this.readyState==3&&qh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,zs(this))},t.Qa=function(a){this.g&&(this.response=a,zs(this))},t.ga=function(){this.g&&zs(this)};function zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ws(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hh(a){let h="";return G(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Sl(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Hh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,h,d))}function Be(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Be,ie);var Cv=/^https?$/i,kv=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():El.g(),this.v=this.o?vh(this.o):vh(El),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){zh(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(kv,h,void 0))||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){zh(this,N)}};function zh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Wh(a),po(a)}function Wh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kh(this):this.bb())},t.bb=function(){Kh(this)};function Kh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Ze(a.Ea,0,a);else if(pe(a,"readystatechange"),vn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=W===0){var k=String(a.D).match(Mh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!Cv.test(k?k.toLowerCase():"")}d=m}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var N=2<vn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Wh(a)}}finally{po(a)}}}}function po(a,h){if(a.g){Gh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Gh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),jt(h)}};function Qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xv(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var d=b(a[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[k]||[];h[k]=N,N.push(d)}I(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Xh(a){this.Aa=0,this.i=[],this.j=new Bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,a),this.cb=Ks("retryDelaySeedMs",1e4,a),this.Wa=Ks("forwardChannelMaxRetries",2,a),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new xh(a&&a.concurrentRequestLimit),this.Da=new Sv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){vt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=of(this,null,this.W),mo(this)};function Pl(a){if(Yh(a),a.G==3){var h=a.U++,d=yn(a.I);if(De(d,"SID",a.K),De(d,"RID",h),De(d,"TYPE","terminate"),Gs(a,d),h=new $n(a,a.j,h),h.L=2,h.v=uo(yn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=af(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ao(h)}sf(a)}function go(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function Yh(a){go(a),a.u&&(l.clearTimeout(a.u),a.u=null),_o(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function mo(a){if(!Nh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ce||Kt(),me||(ce(),me=!0),Dt.add(h,a),a.B=0}}function Nv(a,h){return Oh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Fs(g(a.Ga,a,h),rf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new $n(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Zh(this,k,h),d=yn(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Gs(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Hh(N)))+"&"+h:this.m&&Sl(d,this.m,N)),Rl(this.h,k),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",h),De(d,"SID","null"),k.T=!0,Tl(k,d,null)):Tl(k,d,h),this.G=2}}else this.G==3&&(a?Jh(this,a):this.i.length==0||Nh(this.h)||Jh(this))};function Jh(a,h){var d;h?d=h.l:d=a.U++;const m=yn(a.I);De(m,"SID",a.K),De(m,"RID",d),De(m,"AID",a.T),Gs(a,m),a.m&&a.o&&Sl(m,a.m,a.o),d=new $n(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Zh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Rl(a.h,d),Tl(d,m,h)}function Gs(a,h){a.H&&G(a.H,function(d,m){De(h,m,d)}),a.l&&Lh({},function(d,m){De(h,m,d)})}function Zh(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=k[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Pe=!0;for(let nt=0;nt<d;nt++){let Te=k[nt].g;const ut=k[nt].map;if(Te-=N,0>Te)N=Math.max(0,k[nt].g-100),Pe=!1;else try{Pv(ut,W,"req"+Te+"_")}catch{m&&m(ut)}}if(Pe){m=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function ef(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ce||Kt(),me||(ce(),me=!0),Dt.add(h,a),a.v=0}}function Cl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Fs(g(a.Fa,a),rf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,tf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Fs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),go(this),tf(this))};function kl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function tf(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),Gs(a,h),a.m&&a.o&&Sl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=uo(yn(h)),d.m=null,d.P=!0,Ph(d,a)}t.Za=function(){this.C!=null&&(this.C=null,go(this),Cl(this),vt(19))};function _o(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function nf(a,h){var d=null;if(a.g==h){_o(a),kl(a),a.g=null;var m=2}else if(bl(a.h,h))d=h.D,Dh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;m=so(),pe(m,new Ah(m,d)),mo(a)}else ef(a);else if(k=h.s,k==3||k==0&&0<h.X||!(m==1&&Nv(a,h)||m==2&&Cl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function rf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const k=!m;m=new Ar(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||lo(m,"https"),uo(m),k?bv(m.toString(),d):Rv(m.toString(),d)}else vt(2);a.G=0,a.l&&a.l.sa(h),sf(a),Yh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function sf(a){if(a.G=0,a.ka=[],a.l){const h=Vh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function of(a,h,d){var m=d instanceof Ar?yn(d):new Ar(d);if(m.g!="")h&&(m.g=h+"."+m.g),co(m,m.s);else{var k=l.location;m=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var N=new Ar(null);m&&lo(N,m),h&&(N.g=h),k&&co(N,k),d&&(N.l=d),m=N}return d=a.D,h=a.ya,d&&h&&De(m,d,h),De(m,"VER",a.la),Gs(a,m),m}function af(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new ho({eb:d})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lf(){}t=lf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yo(){}yo.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){ie.call(this),this.g=new Xh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Qr(this)}R(Vt,ie),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Pl(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tt(a),a=d);h.i.push(new gv(h.Ya++,a)),h.G==3&&mo(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Pl(this.g),delete this.g,Vt.aa.N.call(this)};function cf(a){yl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(cf,yl);function uf(){vl.call(this),this.status=1}R(uf,vl);function Qr(a){this.g=a}R(Qr,lf),Qr.prototype.ua=function(){pe(this.g,"a")},Qr.prototype.ta=function(a){pe(this.g,new cf(a))},Qr.prototype.sa=function(a){pe(this.g,new uf)},Qr.prototype.ra=function(){pe(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,g_=function(){return new yo},p_=function(){return so()},d_=Tr,xc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,$o=io,bh.COMPLETE="complete",f_=bh,Eh.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",ie.prototype.listen=ie.prototype.K,ei=Eh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,h_=Be}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const Bd="@firebase/firestore",$d="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new yu("@firebase/firestore");function ns(){return Fr.logLevel}function Z(t,...e){if(Fr.logLevel<=_e.DEBUG){const n=e.map(Pu);Fr.debug(`Firestore (${ks}): ${t}`,...n)}}function Vn(t,...e){if(Fr.logLevel<=_e.ERROR){const n=e.map(Pu);Fr.error(`Firestore (${ks}): ${t}`,...n)}}function Es(t,...e){if(Fr.logLevel<=_e.WARN){const n=e.map(Pu);Fr.warn(`Firestore (${ks}): ${t}`,...n)}}function Pu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,m_(t,r,n)}function m_(t,e,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||m_(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class bR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RR{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new __(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class SR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new SR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new jd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Nc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ge(r,s);{const i=y_(),o=xR(i.encode(qd(t,n)),i.encode(qd(e,n)));return o!==0?o:ge(r,s)}}n+=r>65535?2:1}return ge(t.length,e.length)}function qd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function xR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ge(t[n],e[n]);return ge(t.length,e.length)}function ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=-62135596800,zd=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*zd);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Hd)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Ge(0,0))}static max(){return new he(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):Nc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lr.fromString(e.substring(4,e.length-2))}}class Le extends on{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const NR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends on{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return NR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wd}static keyField(){return new at([Wd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Le.fromString(e))}static fromName(e){return new se(Le.fromString(e).popFirst(5))}static empty(){return new se(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Le(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=-1;function OR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new dr(s,se.empty(),e)}function DR(t){return new dr(t.readTime,t.key,Ni)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(he.min(),se.empty(),Ni)}static max(){return new dr(he.max(),se.empty(),Ni)}}function VR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==LR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function UR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Ya.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=-1;function Ja(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function FR(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="";function BR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kd(e)),e=$R(t.get(n),e);return Kd(e)}function $R(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case E_:n+="";break;default:n+=i}}return n}function Kd(t){return t+E_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function w_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qd(this.data.getIterator())}getIteratorFrom(e){return new Qd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Qd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Qe(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new T_("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const jR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=jR.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="server_timestamp",A_="__type__",b_="__previous_value__",R_="__local_write_time__";function ku(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[A_])===null||n===void 0?void 0:n.stringValue)===I_}function Za(t){const e=t.mapValue.fields[b_];return ku(e)?Za(e):e}function Oi(t){const e=pr(t.mapValue.fields[R_].timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const fa="(default)";class Di{constructor(e,n){this.projectId=e,this.database=n||fa}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database===fa}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="__type__",HR="__max__",Ro={mapValue:{}},P_="__vector__",da="value";function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ku(t)?4:WR(t)?9007199254740991:zR(t)?10:11:ae(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),l=pr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gr(s.bytesValue).isEqual(gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),l=qe(i.doubleValue);return o===l?ha(o)===ha(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gd(o)!==Gd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!mn(o[c],l[c])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function Vi(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=qe(i.integerValue||i.doubleValue),c=qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(Oi(t),Oi(e));case 5:return Nc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=gr(i),c=gr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ge(l[u],c[u]);if(f!==0)return f}return ge(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ge(qe(i.latitude),qe(o.latitude));return l!==0?l:ge(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const p=i.fields||{},g=o.fields||{},_=(l=p[da])===null||l===void 0?void 0:l.arrayValue,R=(c=g[da])===null||c===void 0?void 0:c.arrayValue,x=ge(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Yd(_,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ro.mapValue&&o===Ro.mapValue)return 0;if(i===Ro.mapValue)return 1;if(o===Ro.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Nc(c[p],f[p]);if(g!==0)return g;const _=Ts(l[c[p]],u[f[p]]);if(_!==0)return _}return ge(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{Pe:n})}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=pr(t),r=pr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Yd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ts(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Is(t){return Oc(t)}function Oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Oc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Oc(n.fields[o])}`;return s+"}"}(t.mapValue):ae(61005,{value:t})}function jo(t){switch(mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Za(t);return e?16+jo(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+jo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return vr(r.fields,(i,o)=>{s+=i.length+jo(o)}),s}(t.mapValue);default:throw ae(13486,{value:t})}}function Jd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dc(t){return!!t&&"integerValue"in t}function xu(t){return!!t&&"arrayValue"in t}function Zd(t){return!!t&&"nullValue"in t}function ep(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qo(t){return!!t&&"mapValue"in t}function zR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[S_])===null||n===void 0?void 0:n.stringValue)===P_}function _i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_i(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_i(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===HR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_i(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=_i(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(_i(this.value))}}function C_(t){const e=[];return vr(t.fields,(n,r)=>{const s=new at([n]);if(qo(r)){const i=C_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,he.min(),he.min(),he.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,he.min(),he.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,he.min(),he.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.position=e,this.inclusive=n}}function tp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function np(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n="asc"){this.field=e,this.dir=n}}function KR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{}class We extends k_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QR(e,n,r):n==="array-contains"?new JR(e,r):n==="in"?new ZR(e,r):n==="not-in"?new eS(e,r):n==="array-contains-any"?new tS(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XR(e,r):new YR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ts(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends k_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new en(e,n)}matches(e){return x_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function x_(t){return t.op==="and"}function N_(t){return GR(t)&&x_(t)}function GR(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Vc(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(N_(t))return t.filters.map(e=>Vc(e)).join(",");{const e=t.filters.map(n=>Vc(n)).join(",");return`${t.op}(${e})`}}function O_(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&O_(o,s.filters[l]),!0):!1}(t,e):void ae(19439)}function D_(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(D_).join(" ,")+"}"}(t):"Filter"}class QR extends We{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class XR extends We{constructor(e,n){super(e,"in",n),this.keys=V_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YR extends We{constructor(e,n){super(e,"not-in",n),this.keys=V_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function V_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class JR extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xu(n)&&Vi(n.arrayValue,this.value)}}class ZR extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class eS extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vi(this.value.arrayValue,n)}}class tS extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function rp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new nS(t,e,n,r,s,i,o)}function Nu(t){const e=fe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.Ie=n}return e.Ie}function Ou(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!np(t.startAt,e.startAt)&&np(t.endAt,e.endAt)}function Lc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function rS(t,e,n,r,s,i,o,l){return new Os(t,e,n,r,s,i,o,l)}function Du(t){return new Os(t)}function sp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L_(t){return t.collectionGroup!==null}function yi(t){const e=fe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Qe(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Li(i,r))}),n.has(at.keyField().canonicalString())||e.Ee.push(new Li(at.keyField(),r))}return e.Ee}function fn(t){const e=fe(t);return e.de||(e.de=sS(e,yi(t))),e.de}function sS(t,e){if(t.limitType==="F")return rp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Li(s.field,i)});const n=t.endAt?new pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pa(t.startAt.position,t.startAt.inclusive):null;return rp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mc(t,e){const n=t.filters.concat([e]);return new Os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ga(t,e,n){return new Os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function el(t,e){return Ou(fn(t),fn(e))&&t.limitType===e.limitType}function M_(t){return`${Nu(fn(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>D_(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function tl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=tp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,yi(r),s)||r.endAt&&!function(o,l,c){const u=tp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,yi(r),s))}(t,e)}function iS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U_(t){return(e,n)=>{let r=!1;for(const s of yi(t)){const i=oS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oS(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ts(c,u):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return w_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Fe(se.comparator);function Ln(){return aS}const F_=new Fe(se.comparator);function ti(...t){let e=F_;for(const n of t)e=e.insert(n.key,n);return e}function B_(t){let e=F_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return vi()}function $_(){return vi()}function vi(){return new Hr(t=>t.toString(),(t,e)=>t.isEqual(e))}const lS=new Fe(se.comparator),cS=new Qe(se.comparator);function ye(...t){let e=cS;for(const n of t)e=e.add(n);return e}const uS=new Qe(ge);function hS(){return uS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function j_(t){return{integerValue:""+t}}function fS(t,e){return FR(e)?j_(e):Vu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this._=void 0}}function dS(t,e,n){return t instanceof ma?function(s,i){const o={fields:{[A_]:{stringValue:I_},[R_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ku(i)&&(i=Za(i)),i&&(o.fields[b_]=i),{mapValue:o}}(n,e):t instanceof Mi?H_(t,e):t instanceof Ui?z_(t,e):function(s,i){const o=q_(s,i),l=ip(o)+ip(s.Re);return Dc(o)&&Dc(s.Re)?j_(l):Vu(s.serializer,l)}(t,e)}function pS(t,e,n){return t instanceof Mi?H_(t,e):t instanceof Ui?z_(t,e):n}function q_(t,e){return t instanceof _a?function(r){return Dc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ma extends nl{}class Mi extends nl{constructor(e){super(),this.elements=e}}function H_(t,e){const n=W_(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ui extends nl{constructor(e){super(),this.elements=e}}function z_(t,e){let n=W_(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class _a extends nl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function ip(t){return qe(t.integerValue||t.doubleValue)}function W_(t){return xu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof Ui&&s instanceof Ui?ws(r.elements,s.elements,mn):r instanceof _a&&s instanceof _a?mn(r.Re,s.Re):r instanceof ma&&s instanceof ma}(t.transform,e.transform)}class mS{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rl{}function K_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sl(t.key,Nt.none()):new Qi(t.key,t.data,Nt.none());{const n=t.data,r=Ct.empty();let s=new Qe(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Er(t.key,r,new Ft(s.toArray()),Nt.none())}}function _S(t,e,n){t instanceof Qi?function(s,i,o){const l=s.value.clone(),c=ap(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(s,i,o){if(!Ho(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ap(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(G_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ei(t,e,n,r){return t instanceof Qi?function(i,o,l,c){if(!Ho(i.precondition,o))return l;const u=i.value.clone(),f=lp(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(i,o,l,c){if(!Ho(i.precondition,o))return l;const u=lp(i.fieldTransforms,c,o),f=o.data;return f.setAll(G_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ho(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function yS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=q_(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function op(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ws(r,s,(i,o)=>gS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qi extends rl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Er extends rl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function G_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ap(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,pS(o,l,n[s]))}return r}function lp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dS(i,o,e))}return r}class sl extends rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vS extends rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_S(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=K_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>op(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>op(n,r))}}class Lu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return lS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ee;function IS(t){switch(t){case V.OK:return ae(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function Q_(t){if(t===void 0)return Vn("GRPC error has no .code"),V.UNKNOWN;switch(t){case ze.OK:return V.OK;case ze.CANCELLED:return V.CANCELLED;case ze.UNKNOWN:return V.UNKNOWN;case ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ze.INTERNAL:return V.INTERNAL;case ze.UNAVAILABLE:return V.UNAVAILABLE;case ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ze.NOT_FOUND:return V.NOT_FOUND;case ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ze.ABORTED:return V.ABORTED;case ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ze.DATA_LOSS:return V.DATA_LOSS;default:return ae(39323,{code:t})}}(Ee=ze||(ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=new lr([4294967295,4294967295],0);function cp(t){const e=y_().encode(t),n=new u_;return n.update(e),new Uint8Array(n.digest())}function up(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new lr([n,r],0),new lr([s,i],0)]}class Mu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ni(`Invalid padding: ${n}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ni(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=lr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(lr.fromNumber(r)));return s.compare(AS)===1&&(s=new lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=cp(e),[r,s]=up(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=cp(e),[r,s]=up(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new il(he.min(),s,new Fe(ge),Ln(),ye())}}class Xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xi(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class X_{constructor(e,n){this.targetId=e,this.Ce=n}}class Y_{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class hp{constructor(){this.Fe=0,this.Me=fp(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ye(),n=ye(),r=ye();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new Xi(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=fp()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Re(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class bS{constructor(e){this.ze=e,this.je=new Map,this.He=Ln(),this.Je=So(),this.Ye=So(),this.Ze=new Fe(ge)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Lc(i))if(r===0){const o=new se(i.path);this.tt(n,o,mt.newNoDocument(o,he.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=gr(r).toUint8Array()}catch(c){if(c instanceof T_)return Es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Mu(o,s,i)}catch(c){return Es(c instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&Lc(l.target)){const c=new se(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,mt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=ye();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new il(e,n,this.Ze,this.He,r);return this.He=Ln(),this.Je=So(),this.Ye=So(),this.Ze=new Fe(ge),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new hp,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Qe(ge),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Qe(ge),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new hp),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function So(){return new Fe(se.comparator)}function fp(){return new Fe(se.comparator)}const RS={asc:"ASCENDING",desc:"DESCENDING"},SS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PS={and:"AND",or:"OR"};class CS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uc(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ya(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kS(t,e){return ya(t,e.toTimestamp())}function dn(t){return Re(!!t,49232),he.fromTimestamp(function(n){const r=pr(n);return new Ge(r.seconds,r.nanos)}(t))}function Uu(t,e){return Fc(t,e).canonicalString()}function Fc(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Z_(t){const e=Le.fromString(t);return Re(sy(e),10190,{key:e.toString()}),e}function Bc(t,e){return Uu(t.databaseId,e.path)}function Zl(t,e){const n=Z_(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(ty(n))}function ey(t,e){return Uu(t.databaseId,e)}function xS(t){const e=Z_(t);return e.length===4?Le.emptyPath():ty(e)}function $c(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ty(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function dp(t,e,n){return{name:Bc(t,e),fields:n.value.mapValue.fields}}function NS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ae(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Re(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?V.UNKNOWN:Q_(u.code);return new Y(f,u.message||"")}(o);n=new Y_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zl(t,r.document.name),i=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):he.min(),l=new Ct({mapValue:{fields:r.document.fields}}),c=mt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new zo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zl(t,r.document),i=r.readTime?dn(r.readTime):he.min(),o=mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new zo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zl(t,r.document),i=r.removedTargetIds||[];n=new zo([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new TS(s,i),l=r.targetId;n=new X_(l,o)}}return n}function OS(t,e){let n;if(e instanceof Qi)n={update:dp(t,e.key,e.value)};else if(e instanceof sl)n={delete:Bc(t,e.key)};else if(e instanceof Er)n={update:dp(t,e.key,e.data),updateMask:jS(e.fieldMask)};else{if(!(e instanceof vS))return ae(16599,{ft:e.type});n={verify:Bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _a)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ae(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(t,e.precondition)),n}function DS(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?dn(s.updateTime):dn(i);return o.isEqual(he.min())&&(o=dn(i)),new mS(o,s.transformResults||[])}(n,e))):[]}function VS(t,e){return{documents:[ey(t,e.path)]}}function LS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ey(t,s);const i=function(u){if(u.length!==0)return ry(en.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:ss(g.field),direction:FS(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Uc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function MS(t){let e=xS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=ny(p);return g instanceof en&&N_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new Li(is(R.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ja(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new pa(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new pa(_,g)}(n.endAt)),rS(e,s,o,i,l,"F",c,u)}function US(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ny(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>ny(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(n.compositeFilter.op))}(t):ae(30097,{filter:t})}function FS(t){return RS[t]}function BS(t){return SS[t]}function $S(t){return PS[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return at.fromServerFormat(t.fieldPath)}function ry(t){return t instanceof We?function(n){if(n.op==="=="){if(ep(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(Zd(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ep(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(Zd(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:BS(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>ry(s));return r.length===1?r[0]:{compositeFilter:{op:$S(n.op),filters:r}}}(t):ae(54877,{filter:t})}function jS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,s,i=he.min(),o=he.min(),l=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.wt=e}}function HS(t){const e=MS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ga(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.Cn=new WS}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(dr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class WS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iy=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(iy,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new As(0)}static lr(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="LruGarbageCollector",KS=1048576;function mp([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class GS{constructor(e){this.Er=e,this.buffer=new Qe(mp),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();mp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(gp,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?Z(gp,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.mr(3e5)})}}class XS{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ya.le);const r=new GS(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(pp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pp):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ns()<=_e.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function YS(t,e){return new XS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.changes=new Hr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ei(r.mutation,s,Ft.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Nr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ti();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Ln();const o=vi(),l=function(){return vi()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Er)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ei(f.mutation,u,f.mutation.getFieldMask(),Ge.now())):o.set(u.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new ZS(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vi();let s=new Fe((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Ft.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=$_();f.forEach(g=>{if(!i.has(g)){const _=K_(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Nr());let l=Ni,c=i;return o.next(u=>M.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(f=>({batchId:l,changes:B_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const u=function(p,g){return new Os(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let l=ti();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&Ei(f.mutation,u,Ft.empty(),Ge.now()),tl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:HS(s.bundledQuery),readTime:dn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.overlays=new Fe(se.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Nr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Nr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Nr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wS(n,r));let i=this.Qr.get(n);i===void 0&&(i=ye(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.$r=new Qe(Ye.Ur),this.Kr=new Qe(Ye.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Ye(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new se(new Le([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new se(new Le([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=ye();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return se.comparator(e.key,n.key)||ge(e.Zr,n.Zr)}static Wr(e,n){return ge(e.Zr,n.Zr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Qe(Ye.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ES(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Cu:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ge);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new se(i),0);let l=new Qe(ge);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),M.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.ii=e,this.docs=function(){return new Fe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ln();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||VR(DR(f),r)<=0||(s.has(f.key)||tl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oP(this)}getSize(e){return M.resolve(this.size)}}class oP extends JS{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.persistence=e,this.oi=new Hr(n=>Nu(n),Ou),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this._i=0,this.ai=new Fu,this.targetCount=0,this.ui=As.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new As(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n){this.ci={},this.overlays={},this.li=new Ya(0),this.hi=!1,this.hi=!0,this.Pi=new rP,this.referenceDelegate=e(this),this.Ti=new aP(this),this.indexManager=new zS,this.remoteDocumentCache=function(s){return new iP(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new qS(n),this.Ei=new tP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new sP(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new lP(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class lP extends MR{constructor(e){super(),this.currentSequenceNumber=e}}class Bu{constructor(e){this.persistence=e,this.Vi=new Fu,this.mi=null}static fi(e){return new Bu(e)}get gi(){if(this.mi)return this.mi;throw ae(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const s=se.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class va{constructor(e,n){this.persistence=e,this.yi=new Hr(r=>BR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=YS(this,n)}static fi(e,n){return new va(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jo(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $u(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return i0()?8:UR(yt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cP;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(ns()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(ns()<=_e.DEBUG&&Z("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ns()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):M.resolve())}ws(e,n){if(sp(n))return M.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ga(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,ga(n,null,"F")):this.Fs(e,u,n,c)}))})))}bs(e,n,r,s){return sp(n)||s.isEqual(he.min())?M.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(ns()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.Fs(e,o,n,OR(s,Ni)).next(l=>l))})}vs(e,n){let r=new Qe(U_(e));return n.forEach((s,i)=>{tl(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ns()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",rs(n)),this.ys.getDocumentsMatchingQuery(e,n,dr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="LocalStore",hP=3e8;class fP{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Fe(ge),this.Os=new Hr(i=>Nu(i),Ou),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eP(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function dP(t,e,n,r){return new fP(t,e,n,r)}async function ay(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function pP(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let _=M.resolve();return g.forEach(R=>{_=_.next(()=>f.getEntry(c,R)).next(x=>{const S=u.docVersions.get(R);Re(S!==null,48541),x.version.compareTo(S)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),f.addEntry(x)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ly(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function gP(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(x,S,B){return x.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=hP?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,_,f)&&l.push(n.Ti.updateTargetData(i,_))});let c=Ln(),u=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(mP(i,o,e.documentUpdates).next(f=>{c=f.qs,u=f.Qs})),!r.isEqual(he.min())){const f=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function mP(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ln();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z(ju,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function _P(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yP(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function jc(t,e,n){const r=fe(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ns(o))throw o;Z(ju,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function _p(t,e,n){const r=fe(t);let s=he.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=fe(c),g=p.Os.get(f);return g!==void 0?M.resolve(p.xs.get(g)):p.Ti.getTargetData(u,f)}(r,o,fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ye())).next(l=>(vP(r,iS(e),l),{documents:l,$s:i})))}function vP(t,e,n){let r=t.Ns.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class yp{constructor(){this.activeTargetIds=hS()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EP{constructor(){this.xo=new yp,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new yp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="ConnectivityMonitor";class Ep{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(vp,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(vp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po=null;function qc(){return Po===null?Po=function(){return 268435456+Math.round(2147483648*Math.random())}():Po++,"0x"+Po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="RestConnection",TP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class IP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===fa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=qc(),l=this.jo(e,n.toUriEncodedString());Z(ec,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),f=Un(u);return this.Jo(e,l,c,r,f).then(p=>(Z(ec,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Es(ec,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=TP[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class bP extends IP{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=qc();return new Promise((l,c)=>{const u=new h_;u.setWithCredentials(!0),u.listenOnce(f_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $o.NO_ERROR:const p=u.getResponseJson();Z(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case $o.TIMEOUT:Z(ft,`RPC '${e}' ${o} timed out`),c(new Y(V.DEADLINE_EXCEEDED,"Request time out"));break;case $o.HTTP_ERROR:const g=u.getStatus();if(Z(ft,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const x=function(B){const U=B.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(U)>=0?U:V.UNKNOWN}(R.status);c(new Y(x,R.message))}else c(new Y(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Y(V.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{Z(ft,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Z(ft,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}I_(e,n,r){const s=qc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=g_(),l=p_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(ft,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.E_(p);let g=!1,_=!1;const R=new AP({Zo:S=>{_?Z(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(g||(Z(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(ft,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Xo:()=>p.close()}),x=(S,B,U)=>{S.listen(B,$=>{try{U($)}catch(j){setTimeout(()=>{throw j},0)}})};return x(p,ei.EventType.OPEN,()=>{_||(Z(ft,`RPC '${e}' stream ${s} transport opened.`),R.__())}),x(p,ei.EventType.CLOSE,()=>{_||(_=!0,Z(ft,`RPC '${e}' stream ${s} transport closed`),R.u_(),this.d_(p))}),x(p,ei.EventType.ERROR,S=>{_||(_=!0,Es(ft,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),R.u_(new Y(V.UNAVAILABLE,"The operation could not be completed")))}),x(p,ei.EventType.MESSAGE,S=>{var B;if(!_){const U=S.data[0];Re(!!U,16349);const $=U,j=($==null?void 0:$.error)||((B=$[0])===null||B===void 0?void 0:B.error);if(j){Z(ft,`RPC '${e}' stream ${s} received error:`,j);const te=j.status;let G=function(v){const A=ze[v];if(A!==void 0)return Q_(A)}(te),I=j.message;G===void 0&&(G=V.INTERNAL,I="Unknown error status: "+te+" with message "+j.message),_=!0,R.u_(new Y(G,I)),p.close()}else Z(ft,`RPC '${e}' stream ${s} received:`,U),R.c_(U)}}),x(l,d_.STAT_EVENT,S=>{S.stat===xc.PROXY?Z(ft,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===xc.NOPROXY&&Z(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return new CS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="PersistentStream";class uy{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new cy(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new Y(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return Z(wp,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(Z(wp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RP extends uy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=NS(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?dn(o.readTime):he.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=$c(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Lc(c)?{documents:VS(i,c)}:{query:LS(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=J_(i,o.resumeToken);const u=Uc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=ya(i,o.snapshotVersion.toTimestamp());const u=Uc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=US(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=$c(this.serializer),n.removeTarget=e,this.Q_(n)}}class SP extends uy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=DS(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=$c(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OS(this.serializer,r))};this.Q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{}class CP extends PP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Fc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(V.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Fc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(V.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class kP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Vn(n),this.ua=!1):Z("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="RemoteStore";class xP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{zr(this)&&(Z(Br,"Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.da.add(4),await Yi(u),u.Va.set("Unknown"),u.da.delete(4),await al(u)}(this))})}),this.Va=new kP(r,s)}}async function al(t){if(zr(t))for(const e of t.Aa)await e(!0)}async function Yi(t){for(const e of t.Aa)await e(!1)}function hy(t,e){const n=fe(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Wu(n)?zu(n):Ds(n).N_()&&Hu(n,e))}function qu(t,e){const n=fe(t),r=Ds(n);n.Ea.delete(e),r.N_()&&fy(n,e),n.Ea.size===0&&(r.N_()?r.k_():zr(n)&&n.Va.set("Unknown"))}function Hu(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).Z_(e)}function fy(t,e){t.ma.Ke(e),Ds(t).X_(e)}function zu(t){t.ma=new bS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.Va.ca()}function Wu(t){return zr(t)&&!Ds(t).O_()&&t.Ea.size>0}function zr(t){return fe(t).da.size===0}function dy(t){t.ma=void 0}async function NP(t){t.Va.set("Online")}async function OP(t){t.Ea.forEach((e,n)=>{Hu(t,e)})}async function DP(t,e){dy(t),Wu(t)?(t.Va.Pa(e),zu(t)):t.Va.set("Unknown")}async function VP(t,e,n){if(t.Va.set("Online"),e instanceof Y_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.ma.removeTarget(l))}(t,e)}catch(r){Z(Br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ea(t,r)}else if(e instanceof zo?t.ma.Xe(e):e instanceof X_?t.ma.ot(e):t.ma.nt(e),!n.isEqual(he.min()))try{const r=await ly(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ma.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(u);f&&i.Ea.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),fy(i,c);const p=new nr(f.target,c,u,f.sequenceNumber);Hu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z(Br,"Failed to raise snapshot:",r),await Ea(t,r)}}async function Ea(t,e,n){if(!Ns(e))throw e;t.da.add(1),await Yi(t),t.Va.set("Offline"),n||(n=()=>ly(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Br,"Retrying IndexedDB access"),await n(),t.da.delete(1),await al(t)})}function py(t,e){return e().catch(n=>Ea(t,n,e))}async function ll(t){const e=fe(t),n=_r(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Cu;for(;LP(e);)try{const s=await _P(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,MP(e,s)}catch(s){await Ea(e,s)}gy(e)&&my(e)}function LP(t){return zr(t)&&t.Ia.length<10}function MP(t,e){t.Ia.push(e);const n=_r(t);n.N_()&&n.ea&&n.ta(e.mutations)}function gy(t){return zr(t)&&!_r(t).O_()&&t.Ia.length>0}function my(t){_r(t).start()}async function UP(t){_r(t).ia()}async function FP(t){const e=_r(t);for(const n of t.Ia)e.ta(n.mutations)}async function BP(t,e,n){const r=t.Ia.shift(),s=Lu.from(r,e,n);await py(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ll(t)}async function $P(t,e){e&&_r(t).ea&&await async function(r,s){if(function(o){return IS(o)&&o!==V.ABORTED}(s.code)){const i=r.Ia.shift();_r(r).L_(),await py(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ll(r)}}(t,e),gy(t)&&my(t)}async function Tp(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Z(Br,"RemoteStore received new credentials");const r=zr(n);n.da.add(3),await Yi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await al(n)}async function jP(t,e){const n=fe(t);e?(n.da.delete(2),await al(n)):e||(n.da.add(2),await Yi(n),n.Va.set("Unknown"))}function Ds(t){return t.fa||(t.fa=function(n,r,s){const i=fe(n);return i.oa(),new RP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:NP.bind(null,t),n_:OP.bind(null,t),i_:DP.bind(null,t),Y_:VP.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),Wu(t)?zu(t):t.Va.set("Unknown")):(await t.fa.stop(),dy(t))})),t.fa}function _r(t){return t.ga||(t.ga=function(n,r,s){const i=fe(n);return i.oa(),new SP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:UP.bind(null,t),i_:$P.bind(null,t),na:FP.bind(null,t),ra:BP.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await ll(t)):(await t.ga.stop(),t.Ia.length>0&&(Z(Br,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ku(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Ns(t))return new Y(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{static emptySet(e){return new ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ti(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.pa=new Fe(se.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,ps.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&el(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class HP{constructor(){this.queries=Ap(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Ap(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new Y(V.ABORTED,"Firestore shutting down"))}}function Ap(){return new Hr(t=>M_(t),el)}async function _y(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new qP,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Gu(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&Qu(n)}async function yy(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zP(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Ma(s)&&(r=!0);o.ba=s}}r&&Qu(n)}function WP(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Qu(t){t.Ca.forEach(e=>{e.next()})}var Hc,bp;(bp=Hc||(Hc={})).xa="default",bp.Cache="cache";class vy{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Hc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.key=e}}class wy{constructor(e){this.key=e}}class KP{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ye(),this.mutatedKeys=ye(),this.Za=U_(e),this.Xa=new ps(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new Ip,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=tl(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;g&&_?g.data.isEqual(_.data)?R!==x&&(r.track({type:3,doc:_}),S=!0):this.ru(g,_)||(r.track({type:2,doc:_}),S=!0,(c&&this.Za(_,c)>0||u&&this.Za(_,u)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),S=!0):g&&!_&&(r.track({type:1,doc:g}),S=!0,(c||u)&&(l=!0)),S&&(_?(o=o.add(_),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:l,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,p)=>function(_,R){const x=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:S})}};return x(_)-x(R)}(f.type,p.type)||this.Za(f.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new bs(this.query,e.Xa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ip,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=ye(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new wy(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Ey(r))}),n}au(e){this.Ha=e.$s,this.Ya=ye();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return bs.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Xu="SyncEngine";class GP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QP{constructor(e){this.key=e,this.cu=!1}}class XP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Hr(l=>M_(l),el),this.Pu=new Map,this.Tu=new Set,this.Iu=new Fe(se.comparator),this.Eu=new Map,this.du=new Fu,this.Au={},this.Ru=new Map,this.Vu=As.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function YP(t,e,n=!0){const r=Sy(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Ty(r,e,n,!0),s}async function JP(t,e){const n=Sy(t);await Ty(n,e,!0,!1)}async function Ty(t,e,n,r){const s=await yP(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await ZP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&hy(t.remoteStore,s),l}async function ZP(t,e,n,r,s){t.fu=(p,g,_)=>async function(x,S,B,U){let $=S.view.tu(B);$.Cs&&($=await _p(x.localStore,S.query,!1).then(({documents:I})=>S.view.tu(I,$)));const j=U&&U.targetChanges.get(S.targetId),te=U&&U.targetMismatches.get(S.targetId)!=null,G=S.view.applyChanges($,x.isPrimaryClient,j,te);return Sp(x,S.targetId,G.ou),G.snapshot}(t,p,g,_);const i=await _p(t.localStore,e,!0),o=new KP(e,i.$s),l=o.tu(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Sp(t,n,u.ou);const f=new GP(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function eC(t,e,n){const r=fe(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!el(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await jc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qu(r.remoteStore,s.targetId),zc(r,s.targetId)}).catch(xs)):(zc(r,s.targetId),await jc(r.localStore,s.targetId,!0))}async function tC(t,e){const n=fe(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qu(n.remoteStore,r.targetId))}async function nC(t,e,n){const r=cC(t);try{const s=await function(o,l){const c=fe(o),u=Ge.now(),f=l.reduce((_,R)=>_.add(R.key),ye());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Ln(),x=ye();return c.Bs.getEntries(_,f).next(S=>{R=S,R.forEach((B,U)=>{U.isValidDocument()||(x=x.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,R)).next(S=>{p=S;const B=[];for(const U of l){const $=yS(U,p.get(U.key).overlayedDocument);$!=null&&B.push(new Er(U.key,$,C_($.value.mapValue),Nt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,B,l)}).next(S=>{g=S;const B=S.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(_,S.batchId,B)})}).then(()=>({batchId:g.batchId,changes:B_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Au[o.currentUser.toKey()];u||(u=new Fe(ge)),u=u.insert(l,c),o.Au[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ji(r,s.changes),await ll(r.remoteStore)}catch(s){const i=Gu(s,"Failed to persist write");n.reject(i)}}async function Iy(t,e){const n=fe(t);try{const r=await gP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?Re(o.cu,14607):s.removedDocuments.size>0&&(Re(o.cu,42227),o.cu=!1))}),await Ji(n,r,e)}catch(r){await xs(r)}}function Rp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const l=o.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.Sa)g.Fa(l)&&(u=!0)}),u&&Qu(c)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rC(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Fe(se.comparator);o=o.insert(i,mt.newNoDocument(i,he.min()));const l=ye().add(i),c=new il(he.min(),new Map,new Fe(ge),o,l);await Iy(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(e),Yu(r)}else await jc(r.localStore,e,!1).then(()=>zc(r,e,n)).catch(xs)}async function sC(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await pP(n.localStore,e);by(n,r,null),Ay(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ji(n,s)}catch(s){await xs(s)}}async function iC(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Re(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);by(r,e,n),Ay(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ji(r,s)}catch(s){await xs(s)}}function Ay(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function by(t,e,n){const r=fe(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function zc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||Ry(t,r)})}function Ry(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(qu(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),Yu(t))}function Sp(t,e,n){for(const r of n)r instanceof Ey?(t.du.addReference(r.key,e),oC(t,r)):r instanceof wy?(Z(Xu,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||Ry(t,r.key)):ae(19791,{pu:r})}function oC(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(Z(Xu,"New document in limbo: "+n),t.Tu.add(r),Yu(t))}function Yu(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new se(Le.fromString(e)),r=t.Vu.next();t.Eu.set(r,new QP(n)),t.Iu=t.Iu.insert(n,r),hy(t.remoteStore,new nr(fn(Du(n.path)),r,"TargetPurposeLimboResolution",Ya.le))}}async function Ji(t,e,n){const r=fe(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{o.push(r.fu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=$u.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(c,u){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,g=>M.forEach(g.ds,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>M.forEach(g.As,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ns(p))throw p;Z(ju,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=f.xs.get(g),R=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(R);f.xs=f.xs.insert(g,x)}}}(r.localStore,i))}async function aC(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Z(Xu,"User change. New user:",e.toKey());const r=await ay(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new Y(V.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ji(n,r.ks)}}function lC(t,e){const n=fe(t),r=n.Eu.get(e);if(r&&r.cu)return ye().add(r.key);{let s=ye();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const l=n.hu.get(o);s=s.unionWith(l.view.eu)}return s}}function Sy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rC.bind(null,e),e.lu.Y_=zP.bind(null,e.eventManager),e.lu.gu=WP.bind(null,e.eventManager),e}function cC(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iC.bind(null,e),e}class wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ol(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return dP(this.persistence,new uP,e.initialUser,this.serializer)}Su(e){return new oy(Bu.fi,this.serializer)}bu(e){return new EP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wa.provider={build:()=>new wa};class uC extends wa{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){Re(this.persistence.referenceDelegate instanceof va,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new QS(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new oy(r=>va.fi(r,n),this.serializer)}}class Wc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aC.bind(null,this.syncEngine),await jP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HP}()}createDatastore(e){const n=ol(e.databaseInfo.databaseId),r=function(i){return new bP(i)}(e.databaseInfo);return function(i,o,l,c){return new CP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new xP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Rp(this.syncEngine,n,0),function(){return Ep.C()?new Ep:new wP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const p=new XP(s,i,o,l,c,u);return f&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);Z(Br,"RemoteStore shutting down."),i.da.add(5),await Yi(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wc.provider={build:()=>new Wc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="FirestoreClient";class hC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=v_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ay(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fC(t);Z(yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Tp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Tp(e.remoteStore,s)),t._onlineComponents=e}async function fC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(yr,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new wa)}}else Z(yr,"Using default OfflineComponentProvider"),await nc(t,new uC(void 0));return t._offlineComponents}async function Cy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(yr,"Using user provided OnlineComponentProvider"),await Pp(t,t._uninitializedComponentsProvider._online)):(Z(yr,"Using default OnlineComponentProvider"),await Pp(t,new Wc))),t._onlineComponents}function dC(t){return Cy(t).then(e=>e.syncEngine)}async function ky(t){const e=await Cy(t),n=e.eventManager;return n.onListen=YP.bind(null,e.syncEngine),n.onUnlisten=eC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tC.bind(null,e.syncEngine),n}function pC(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Py({next:g=>{f.xu(),o.enqueueAndForget(()=>yy(i,p));const _=g.docs.has(l);!_&&g.fromCache?u.reject(new Y(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?u.reject(new Y(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new vy(Du(l.path),f,{includeMetadataChanges:!0,Qa:!0});return _y(i,p)}(await ky(t),t.asyncQueue,e,n,r)),r.promise}function gC(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new Py({next:g=>{f.xu(),o.enqueueAndForget(()=>yy(i,p)),g.fromCache&&c.source==="server"?u.reject(new Y(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new vy(l,f,{includeMetadataChanges:!0,Qa:!0});return _y(i,p)}(await ky(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e,n){if(!n)throw new Y(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,r){if(e===!0&&r===!0)throw new Y(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kp(t){if(!se.isDocumentKey(t))throw new Y(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xp(t){if(se.isDocumentKey(t))throw new Y(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cl(t);throw new Y(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function _C(t,e){if(e<=0)throw new Y(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="firestore.googleapis.com",Np=!0;class Op{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Oy,this.ssl=Np}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Np;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KS)throw new Y(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ul{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Op({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Op(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AR;switch(r.type){case"firstParty":return new PR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cp.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Cp.delete(n),r.terminate())}(this),Promise.resolve()}}function yC(t,e,n,r={}){var s;t=_n(t,ul);const i=Un(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Ha(`https://${c}`),za("Firestore",!0)),o.host!==Oy&&o.host!==c&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Lr(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=pt.MOCK_USER;else{f=bm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pt(g)}t._authCredentials=new bR(new __(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class cr extends wr{constructor(e,n,r){super(e,n,Du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new se(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function F1(t,e,...n){if(t=Se(t),Ny("collection","path",e),t instanceof ul){const r=Le.fromString(e,...n);return xp(r),new cr(t,null,r)}{if(!(t instanceof Ot||t instanceof cr))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return xp(r),new cr(t.firestore,null,r)}}function vC(t,e,...n){if(t=Se(t),arguments.length===1&&(e=v_.newId()),Ny("doc","path",e),t instanceof ul){const r=Le.fromString(e,...n);return kp(r),new Ot(t,null,new se(r))}{if(!(t instanceof Ot||t instanceof cr))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return kp(r),new Ot(t.firestore,t instanceof cr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="AsyncQueue";class Vp{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new cy(this,"async_queue_retry"),this.rc=()=>{const r=tc();r&&Z(Dp,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Pn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Ns(e))throw e;Z(Dp,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Vn("INTERNAL UNHANDLED ERROR: ",Lp(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=Ku.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&ae(47125,{cc:Lp(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Lp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Wr extends ul{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Vp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vp(e),this._firestoreClient=void 0,await e}}}function EC(t,e){const n=typeof t=="object"?t:Wa(),r=typeof t=="string"?t:fa,s=zi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_u("firestore");i&&yC(s,...i)}return s}function hl(t){if(t._terminated)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||wC(t),t._firestoreClient}function wC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new qR(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,xy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new hC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(lt.fromBase64String(e))}catch(n){throw new Y(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=/^__.*__$/;class IC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qi(e,this.data,n,this.fieldTransforms)}}class Dy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Vy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ic:t})}}class th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ta(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Vy(this.Ic)&&TC.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class AC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ol(e)}bc(e,n,r,s=!1){return new th({Ic:e,methodName:n,wc:r,path:at.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fl(t){const e=t._freezeSettings(),n=ol(t._databaseId);return new AC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ly(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);nh("Data must be an object, but it was:",o,r);const l=Fy(r,o);let c,u;if(i.merge)c=new Ft(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Kc(e,p,n);if(!o.contains(g))throw new Y(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$y(f,g)||f.push(g)}c=new Ft(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new IC(new Ct(l),c,u)}class eo extends Ju{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eo}}function My(t,e,n,r){const s=t.bc(1,e,n);nh("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();vr(r,(c,u)=>{const f=rh(e,c,n);u=Se(u);const p=s.mc(f);if(u instanceof eo)i.push(f);else{const g=to(u,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ft(i);return new Dy(o,l,s.fieldTransforms)}function Uy(t,e,n,r,s,i){const o=t.bc(1,e,n),l=[Kc(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Kc(e,i[g])),c.push(i[g+1]);const u=[],f=Ct.empty();for(let g=l.length-1;g>=0;--g)if(!$y(u,l[g])){const _=l[g];let R=c[g];R=Se(R);const x=o.mc(_);if(R instanceof eo)u.push(_);else{const S=to(R,x);S!=null&&(u.push(_),f.set(_,S))}}const p=new Ft(u);return new Dy(f,p,o.fieldTransforms)}function bC(t,e,n,r=!1){return to(n,t.bc(r?4:3,e))}function to(t,e){if(By(t=Se(t)))return nh("Unsupported field value:",e,t),Fy(t,e);if(t instanceof Ju)return function(r,s){if(!Vy(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=to(l,s.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:ya(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ya(s.serializer,i)}}if(r instanceof Zu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rs)return{bytesValue:J_(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eh)return function(o,l){return{mapValue:{fields:{[S_]:{stringValue:P_},[da]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.gc("VectorValues must only contain numeric values.");return Vu(l.serializer,u)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${cl(r)}`)}(t,e)}function Fy(t,e){const n={};return w_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,s)=>{const i=to(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function By(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Zu||t instanceof Rs||t instanceof Ot||t instanceof Ju||t instanceof eh)}function nh(t,e,n){if(!By(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=cl(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function Kc(t,e,n){if((e=Se(e))instanceof Zi)return e._internalPath;if(typeof e=="string")return rh(t,e);throw Ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const RC=new RegExp("[~\\*/\\[\\]]");function rh(t,e,n){if(e.search(RC)>=0)throw Ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zi(...e.split("."))._internalPath}catch{throw Ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(V.INVALID_ARGUMENT,l+t+c)}function $y(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SC extends jy{data(){return super.data()}}function dl(t,e){return typeof e=="string"?rh(t,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}class ih extends sh{}function B1(t,e,...n){let r=[];e instanceof sh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof oh).length,l=i.filter(c=>c instanceof pl).length;if(o>1||o>0&&l>0)throw new Y(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class pl extends ih{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pl(e,n,r)}_apply(e){const n=this._parse(e);return qy(e._query,n),new wr(e.firestore,e.converter,Mc(e._query,n))}_parse(e){const n=fl(e.firestore);return function(i,o,l,c,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Up(p,f);const R=[];for(const x of p)R.push(Mp(c,i,x));g={arrayValue:{values:R}}}else g=Mp(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Up(p,f),g=bC(l,o,p,f==="in"||f==="not-in");return We.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $1(t,e,n){const r=e,s=dl("where",t);return pl._create(s,r,n)}class oh extends sh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new oh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)qy(o,c),o=Mc(o,c)}(e._query,n),new wr(e.firestore,e.converter,Mc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ah extends ih{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ah(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Li(i,o)}(e._query,this._field,this._direction);return new wr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Os(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function j1(t,e="asc"){const n=e,r=dl("orderBy",t);return ah._create(r,n)}class lh extends ih{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new lh(e,n,r)}_apply(e){return new wr(e.firestore,e.converter,ga(e._query,this._limit,this._limitType))}}function q1(t){return _C("limit",t),lh._create("limit",t,"F")}function Mp(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new Y(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!L_(e)&&n.indexOf("/")!==-1)throw new Y(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!se.isDocumentKey(r))throw new Y(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jd(t,new se(r))}if(n instanceof Ot)return Jd(t,n._key);throw new Y(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cl(n)}.`)}function Up(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class CC{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[da].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new eh(i)}convertGeoPoint(e){return new Zu(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Za(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Re(sy(r),9688,{name:e});const s=new Di(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zy extends jy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wo extends zy{data(e={}){return super.data(e)}}class kC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wo(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Wo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:xC(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){t=_n(t,Ot);const e=_n(t.firestore,Wr);return pC(hl(e),t._key).then(n=>NC(e,t,n))}class Wy extends CC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function z1(t){t=_n(t,wr);const e=_n(t.firestore,Wr),n=hl(e),r=new Wy(e);return PC(t._query),gC(n,t._query).then(s=>new kC(e,r,t,s))}function W1(t,e,n,...r){t=_n(t,Ot);const s=_n(t.firestore,Wr),i=fl(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Zi?Uy(i,"updateDoc",t._key,e,n,r):My(i,"updateDoc",t._key,e),gl(s,[o.toMutation(t._key,Nt.exists(!0))])}function K1(t){return gl(_n(t.firestore,Wr),[new sl(t._key,Nt.none())])}function G1(t,e){const n=_n(t.firestore,Wr),r=vC(t),s=Hy(t.converter,e);return gl(n,[Ly(fl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function gl(t,e){return function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget(async()=>nC(await dC(r),s,i)),i.promise}(hl(t),e)}function NC(t,e,n){const r=n.docs.get(e._key),s=new Wy(t);return new zy(t,s,e._key,r,new ri(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=fl(e)}set(e,n,r){this._verifyNotCommitted();const s=rc(e,this._firestore),i=Hy(s.converter,n,r),o=Ly(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Nt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=rc(e,this._firestore);let o;return o=typeof(n=Se(n))=="string"||n instanceof Zi?Uy(this._dataReader,"WriteBatch.update",i._key,n,r,s):My(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Nt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=rc(e,this._firestore);return this._mutations=this._mutations.concat(new sl(n._key,Nt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Y(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function rc(t,e){if((t=Se(t)).firestore!==e)throw new Y(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(){return new eo("deleteField")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t){return hl(t=_n(t,Wr)),new OC(t,e=>gl(t,e))}(function(e,n=!0){(function(s){ks=s})(qr),fr(new xn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Wr(new RR(r.getProvider("auth-internal")),new CR(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zt(Bd,$d,e),zt(Bd,$d,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebasestorage.googleapis.com",Gy="storageBucket",DC=2*60*1e3,VC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends tn{constructor(e,n,r=0){super(sc(e),`Firebase Storage: ${n} (${sc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function sc(t){return"storage/"+t}function ch(){const t="An unknown error occurred, please check the error payload for server response.";return new je($e.UNKNOWN,t)}function LC(t){return new je($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function MC(t){return new je($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je($e.UNAUTHENTICATED,t)}function FC(){return new je($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BC(t){return new je($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $C(){return new je($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jC(){return new je($e.CANCELED,"User canceled the upload/download.")}function qC(t){return new je($e.INVALID_URL,"Invalid URL '"+t+"'.")}function HC(t){return new je($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zC(){return new je($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gy+"' property when initializing the app?")}function WC(){return new je($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function KC(){return new je($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function GC(t){return new je($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gc(t){return new je($e.INVALID_ARGUMENT,t)}function Qy(){return new je($e.APP_DELETED,"The Firebase app was deleted.")}function QC(t){return new je($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wi(t,e){return new je($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Js(t){throw new je($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw HC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},x=n===Ky?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",B=new RegExp(`^https?://${x}/${s}/${S}`,"i"),$=[{regex:l,indices:c,postModify:i},{regex:_,indices:R,postModify:u},{regex:B,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<$.length;j++){const te=$[j],G=te.regex.exec(e);if(G){const I=G[te.indices.bucket];let y=G[te.indices.path];y||(y=""),r=new At(I,y),te.postModify(r);break}}if(r==null)throw qC(e);return r}}class XC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...S){u||(u=!0,e.apply(null,S))}function p(S){s=setTimeout(()=>{s=null,t(_,c())},S)}function g(){i&&clearTimeout(i)}function _(S,...B){if(u){g();return}if(S){g(),f.call(null,S,...B);return}if(c()||o){g(),f.call(null,S,...B);return}r<64&&(r*=2);let $;l===1?(l=2,$=0):$=(r+Math.random())*1e3,p($)}let R=!1;function x(S){R||(R=!0,g(),!u&&(s!==null?(S||(l=2),clearTimeout(s),p(0)):S||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,x(!0)},n),x}function JC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return t!==void 0}function ek(t){return typeof t=="object"&&!Array.isArray(t)}function uh(t){return typeof t=="string"||t instanceof String}function Fp(t){return hh()&&t instanceof Blob}function hh(){return typeof Blob<"u"}function Qc(t,e,n,r){if(r<e)throw Gc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Xy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Vr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vr||(Vr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,s,i,o,l,c,u,f,p,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,x)=>{this.resolve_=R,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Vr.NO_ERROR,c=i.getStatus();if(!l||tk(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Vr.ABORT;r(!1,new Co(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Co(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());ZC(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=ch();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Qy():jC();o(c)}else{const c=$C();o(c)}};this.canceled_?n(!1,new Co(!1,null,!0)):this.backoffId_=YC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&JC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ik(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ok(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ak(t,e,n,r,s,i,o=!0,l=!1){const c=Xy(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return ik(f,e),rk(f,n),sk(f,i),ok(f,r),new nk(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ck(...t){const e=lk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(hh())return new Blob(t);throw new je($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){if(typeof atob>"u")throw GC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ic{constructor(e,n){this.data=e,this.contentType=n||null}}function fk(t,e){switch(t){case ln.RAW:return new ic(Yy(e));case ln.BASE64:case ln.BASE64URL:return new ic(Jy(t,e));case ln.DATA_URL:return new ic(pk(e),gk(e))}throw ch()}function Yy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dk(t){let e;try{e=decodeURIComponent(t)}catch{throw wi(ln.DATA_URL,"Malformed data URL.")}return Yy(e)}function Jy(t,e){switch(t){case ln.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw wi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw wi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=hk(e)}catch(s){throw s.message.includes("polyfill")?s:wi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Zy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wi(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=mk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pk(t){const e=new Zy(t);return e.base64?Jy(ln.BASE64,e.rest):dk(e.rest)}function gk(t){return new Zy(t).contentType}function mk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){let r=0,s="";Fp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Fp(this.data_)){const r=this.data_,s=uk(r,e,n);return s===null?null:new tr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new tr(r,!0)}}static getBlob(...e){if(hh()){const n=e.map(r=>r instanceof tr?r.data_:r);return new tr(ck.apply(null,n))}else{const n=e.map(o=>uh(o)?fk(ln.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new tr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){let e;try{e=JSON.parse(t)}catch{return null}return ek(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ev(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t,e){return e}class Et{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||vk}}let ko=null;function Ek(t){return!uh(t)||t.length<2?t:ev(t)}function tv(){if(ko)return ko;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(i,o){return Ek(o)}const n=new Et("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Et("size");return s.xform=r,t.push(s),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),ko=t,ko}function wk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new At(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return wk(r,t),r}function nv(t,e,n){const r=fh(e);return r===null?null:Tk(t,r,n)}function Ik(t,e,n,r){const s=fh(e);if(s===null||!uh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),_=Vs(g,n,r),R=Xy({alt:"media",token:u});return _+R})[0]}function Ak(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="prefixes",$p="items";function bk(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Bp])for(const s of n[Bp]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new At(e,i));r.prefixes.push(o)}if(n[$p])for(const s of n[$p]){const i=t._makeStorageReference(new At(e,s.name));r.items.push(i)}return r}function Rk(t,e,n){const r=fh(n);return r===null?null:bk(t,e,r)}class no{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){if(!t)throw ch()}function Sk(t,e){function n(r,s){const i=nv(t,s,e);return dh(i!==null),i}return n}function Pk(t,e){function n(r,s){const i=Rk(t,e,s);return dh(i!==null),i}return n}function Ck(t,e){function n(r,s){const i=nv(t,s,e);return dh(i!==null),Ik(i,s,t.host,t._protocol)}return n}function ph(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=FC():s=UC():n.getStatus()===402?s=MC(t.bucket):n.getStatus()===403?s=BC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function gh(t){const e=ph(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=LC(t.path)),i.serverResponse=s.serverResponse,i}return n}function kk(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),l=Vs(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,f=new no(l,c,Pk(t,e.bucket),u);return f.urlParams=i,f.errorHandler=ph(e),f}function xk(t,e,n){const r=e.fullServerUrl(),s=Vs(r,t.host,t._protocol)+"?alt=media",i="GET",o=t.maxOperationRetryTime,l=new no(s,i,(c,u)=>u,o);return l.errorHandler=gh(e),l}function Nk(t,e,n){const r=e.fullServerUrl(),s=Vs(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new no(s,i,Ck(t,n),o);return l.errorHandler=gh(e),l}function Ok(t,e){const n=e.fullServerUrl(),r=Vs(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new no(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=gh(e),l}function Dk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Vk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Dk(null,e)),r}function Lk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let $="";for(let j=0;j<2;j++)$=$+Math.random().toString().slice(2);return $}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=Vk(e,r,s),f=Ak(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",_=tr.getBlob(p,r,g);if(_===null)throw WC();const R={name:u.fullPath},x=Vs(i,t.host,t._protocol),S="POST",B=t.maxUploadRetryTime,U=new no(x,S,Sk(t,n),B);return U.urlParams=R,U.headers=o,U.body=_.uploadData(),U.errorHandler=ph(e),U}class rv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Js("cannot .send() more than once");if(Un(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Mk extends rv{initXhr(){this.xhr_.responseType="text"}}function ml(){return new Mk}class Uk extends rv{initXhr(){this.xhr_.responseType="arraybuffer"}}function Fk(){return new Uk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $r(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ev(this._location.path)}get storage(){return this._service}get parent(){const e=_k(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new $r(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw QC(e)}}function Bk(t,e){t._throwIfRoot("getBytes");const n=xk(t.storage,t._location);return t.storage.makeRequestWithTokens(n,Fk).then(r=>r)}function $k(t,e,n){t._throwIfRoot("uploadBytes");const r=Lk(t.storage,t._location,tv(),new tr(e,!0),n);return t.storage.makeRequestWithTokens(r,ml).then(s=>({metadata:s,ref:t}))}function jk(t){const e={prefixes:[],items:[]};return sv(t,e).then(()=>e)}async function sv(t,e,n){const s=await qk(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await sv(t,e,s.nextPageToken)}function qk(t,e){e!=null&&typeof e.maxResults=="number"&&Qc("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=kk(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ml)}function Hk(t){t._throwIfRoot("getDownloadURL");const e=Nk(t.storage,t._location,tv());return t.storage.makeRequestWithTokens(e,ml).then(n=>{if(n===null)throw KC();return n})}function zk(t){t._throwIfRoot("deleteObject");const e=Ok(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ml)}function Wk(t,e){const n=yk(t._location.path,e),r=new At(t._location.bucket,n);return new $r(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){return/^[A-Za-z]+:\/\//.test(t)}function Gk(t,e){return new $r(t,e)}function iv(t,e){if(t instanceof mh){const n=t;if(n._bucket==null)throw zC();const r=new $r(n,n._bucket);return e!=null?iv(r,e):r}else return e!==void 0?Wk(t,e):t}function Qk(t,e){if(e&&Kk(e)){if(t instanceof mh)return Gk(t,e);throw Gc("To use ref(service, url), the first argument must be a Storage instance.")}else return iv(t,e)}function jp(t,e){const n=e==null?void 0:e[Gy];return n==null?null:At.makeFromBucketSpec(n,t)}function Xk(t,e,n,r={}){t.host=`${e}:${n}`;const s=Un(e);s&&(Ha(`https://${t.host}/b`),za("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bm(i,t.app.options.projectId))}class mh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Ky,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DC,this._maxUploadRetryTime=VC,this._requests=new Set,s!=null?this._bucket=At.makeFromBucketSpec(s,this._host):this._bucket=jp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=jp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $r(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new XC(Qy());{const o=ak(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const qp="@firebase/storage",Hp="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t,e){return t=Se(t),Bk(t)}function J1(t,e,n){return t=Se(t),$k(t,e,n)}function Z1(t){return t=Se(t),jk(t)}function ex(t){return t=Se(t),Hk(t)}function tx(t){return t=Se(t),zk(t)}function nx(t,e){return t=Se(t),Qk(t,e)}function Yk(t=Wa(),e){t=Se(t);const r=zi(t,ov).getImmediate({identifier:e}),s=_u("storage");return s&&Jk(r,...s),r}function Jk(t,e,n,r={}){Xk(t,e,n,r)}function Zk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new mh(n,r,s,e,qr)}function e1(){fr(new xn(ov,Zk,"PUBLIC").setMultipleInstances(!0)),zt(qp,Hp,""),zt(qp,Hp,"esm2017")}e1();function t1(){const t=["localhost","127.0.0.1","klaushofrichter.github.io"],e=window.location.hostname;if(!t.includes(e))throw console.error(`🚫 Unauthorized domain: ${e}. Firebase services disabled.`),new Error(`Access denied: Unauthorized domain ${e}`);return console.log(`✅ Authorized domain verified: ${e}`),!0}function n1(t){const e=["apiKey","authDomain","projectId","storageBucket","messagingSenderId","appId"];for(const s of e)if(!t[s]||typeof t[s]!="string"||t[s].trim()==="")throw new Error(`Missing or invalid Firebase configuration: ${s}`);if(t.apiKey.length<30)throw new Error("Invalid Firebase API key format");if(!["een-gng.firebaseapp.com","klaus-hofrichter-simple.firebaseapp.com","localhost"].some(s=>t.authDomain.includes(s)))throw new Error(`Unauthorized Firebase auth domain: ${t.authDomain}`);return!0}function r1(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"}t1();const av={apiKey:"AIzaSyDB4T6mevosR4YdZvo_bkyCKl_sE-7czBk",authDomain:"klaus-hofrichter-simple.firebaseapp.com",databaseURL:void 0,projectId:"klaus-hofrichter-simple",storageBucket:"klaus-hofrichter-simple.firebasestorage.app",messagingSenderId:"793070861481",appId:"1:793070861481:web:13df380a068b4e92c83db8",measurementId:"G-7N4L7BEXHW"};n1(av);if(!r1()){if(window.location.protocol!=="https:")throw new Error("HTTPS required in production environment");(window.localStorage.getItem("debug")||window.sessionStorage.getItem("debug"))&&(console.warn("🚫 Debug mode detected in production environment"),window.localStorage.removeItem("debug"),window.sessionStorage.removeItem("debug"))}let Ss;yd().length===0?(Ss=Pm(av),console.log("✅ Firebase initialized successfully")):(Ss=yd()[0],console.log("✅ Firebase app already initialized"));const rx=c_(Ss);EC(Ss);const sx=Yk(Ss),s1=Ss;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="type.googleapis.com/google.protobuf.Int64Value",o1="type.googleapis.com/google.protobuf.UInt64Value";function lv(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Ia(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Ia(e));if(typeof t=="function"||typeof t=="object")return lv(t,e=>Ia(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ps(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case i1:case o1:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ps(e)):typeof t=="function"||typeof t=="object"?lv(t,e=>Ps(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xt extends tn{constructor(e,n,r){super(`${_h}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,xt.prototype)}}function a1(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Aa(t,e){let n=a1(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!zp[o])return new xt("internal","internal");n=zp[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Ps(s))}}catch{}return n==="ok"?null:new xt(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="us-central1",c1=/^data: (.*?)(?:\n|$)/;function u1(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new xt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class h1{constructor(e,n,r,s,i=Xc,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new l1(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Xc}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function f1(t,e,n){const r=Un(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Ha(t.emulatorOrigin),za("Functions",!0))}function d1(t,e,n){const r=s=>g1(t,e,s,{});return r.stream=(s,i)=>_1(t,e,s,i),r}async function p1(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function cv(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function g1(t,e,n,r){const s=t._url(e);return m1(t,s,n,r)}async function m1(t,e,n,r){n=Ia(n);const s={data:n},i=await cv(t,r),o=r.timeout||7e4,l=u1(o),c=await Promise.race([p1(e,s,i,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new xt("cancelled","Firebase Functions instance was deleted.");const u=Aa(c.status,c.json);if(u)throw u;if(!c.json)throw new xt("internal","Response is not valid JSON object.");let f=c.json.data;if(typeof f>"u"&&(f=c.json.result),typeof f>"u")throw new xt("internal","Response is missing data field.");return{data:Ps(f)}}function _1(t,e,n,r){const s=t._url(e);return y1(t,s,n,r||{})}async function y1(t,e,n,r){var s;n=Ia(n);const i={data:n},o=await cv(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let l;try{l=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:o,signal:r==null?void 0:r.signal})}catch(_){if(_ instanceof Error&&_.name==="AbortError"){const x=new xt("cancelled","Request was cancelled.");return{data:Promise.reject(x),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(x)}}}}}}const R=Aa(0,null);return{data:Promise.reject(R),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(R)}}}}}}let c,u;const f=new Promise((_,R)=>{c=_,u=R});(s=r==null?void 0:r.signal)===null||s===void 0||s.addEventListener("abort",()=>{const _=new xt("cancelled","Request was cancelled.");u(_)});const p=l.body.getReader(),g=v1(p,c,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const _=g.getReader();return{async next(){const{value:R,done:x}=await _.read();return{value:R,done:x}},async return(){return await _.cancel(),{done:!0,value:void 0}}}}},data:f}}function v1(t,e,n,r){const s=(o,l)=>{const c=o.match(c1);if(!c)return;const u=c[1];try{const f=JSON.parse(u);if("result"in f){e(Ps(f.result));return}if("message"in f){l.enqueue(Ps(f.message));return}if("error"in f){const p=Aa(0,f);l.error(p),n(p);return}}catch(f){if(f instanceof xt){l.error(f),n(f);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return c();async function c(){if(r!=null&&r.aborted){const u=new xt("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{const{value:u,done:f}=await t.read();if(f){l.trim()&&s(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new xt("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}l+=i.decode(u,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const g of p)g.trim()&&s(g.trim(),o);return c()}catch(u){const f=u instanceof xt?u:Aa(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const Wp="@firebase/functions",Kp="0.12.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="auth-internal",w1="app-check-internal",T1="messaging-internal";function I1(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(E1),o=n.getProvider(T1),l=n.getProvider(w1);return new h1(s,i,o,l,r)};fr(new xn(_h,e,"PUBLIC").setMultipleInstances(!0)),zt(Wp,Kp,t),zt(Wp,Kp,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t=Wa(),e=Xc){const r=zi(Se(t),_h).getImmediate({identifier:e}),s=_u("functions");return s&&b1(r,...s),r}function b1(t,e,n){f1(Se(t),e,n)}function R1(t,e,n){return d1(Se(t),e)}I1();class S1{constructor(){this.auth=null,this.functions=null,this.currentUser=null,this.tokenCheckInterval=null}initialize(e){if(console.log("[FirebaseAuth] Initializing Firebase Auth and Functions"),!e)throw new Error("Firebase app instance is required for initialization");try{this.auth=c_(e),console.log("[FirebaseAuth] Firebase Auth initialized successfully"),this.functions=A1(e),console.log("[FirebaseAuth] Firebase Functions initialized successfully")}catch(n){throw console.error("[FirebaseAuth] Error during initialization:",n),new Error(`Firebase initialization failed: ${n.message}`)}this.auth.onAuthStateChanged(n=>{this.currentUser=n,n?(this.checkAndRefreshToken(),this.tokenCheckInterval&&clearInterval(this.tokenCheckInterval),this.tokenCheckInterval=setInterval(()=>{this.checkAndRefreshToken()},6e4)):(console.log("[FirebaseAuth] User signed out"),this.tokenCheckInterval&&(clearInterval(this.tokenCheckInterval),this.tokenCheckInterval=null))})}async checkAndRefreshToken(){if(this.currentUser)try{const e=await this.currentUser.getIdTokenResult(),n=new Date(e.expirationTime).getTime(),r=Date.now();n-r<3e5&&(console.log("[FirebaseAuth] Firebase token expiring soon, refreshing..."),await this.refreshAuth())}catch(e){console.error("[FirebaseAuth] Error checking token expiration:",e)}}getCurrentUser(){return console.log("[FirebaseAuth] Getting current user:",this.currentUser),this.currentUser}isAuthenticated(){return console.log("[FirebaseAuth] Checking if user is authenticated:",!!this.currentUser),!!this.currentUser}isInitialized(){const e=!!(this.auth&&this.functions);return console.log("[FirebaseAuth] Checking if Firebase services are initialized:",e),e}async getCustomToken(){console.log("[FirebaseAuth] Getting custom token");const e=vs();if(!e.isAuthenticated)throw console.error("[FirebaseAuth] EEN user not authenticated"),new Error("EEN user not authenticated");if(!e.userProfile)throw console.error("[FirebaseAuth] EEN user profile not available"),new Error("EEN user profile not available");if(!e.baseUrl)throw console.error("[FirebaseAuth] EEN base URL not configured"),new Error("EEN base URL not configured");const n=e.userProfile.id||e.userProfile.userId,r=e.userProfile.email,s=e.token;if(!n||!r||!s)throw new Error("Missing required EEN user information");try{if(!this.functions)throw new Error("Firebase Functions not initialized. Please refresh the page and try again.");const o=await R1(this.functions,"createCustomToken")({eenUserId:String(n),eenUserEmail:r,eenAccessToken:s,eenBaseUrl:e.baseUrl,additionalClaims:{eenUserName:e.userProfile.name||(e.userProfile.firstName&&e.userProfile.lastName?`${e.userProfile.firstName} ${e.userProfile.lastName}`:e.userProfile.firstName||e.userProfile.lastName||"Unknown"),authProvider:"een"}});if(console.log("[FirebaseAuth] Custom token created successfully"),!o||!o.data||!o.data.customToken)throw new Error("Invalid response from Firebase function - missing custom token");return o.data.customToken}catch(i){throw console.error("[FirebaseAuth] Error getting custom token:",i),i.code==="functions/already-exists"?new Error(`Email address conflict: ${i.message}`):i.code==="functions/unauthenticated"?new Error(`Authentication failed: ${i.message}`):i.code==="functions/permission-denied"?new Error(`Permission denied: ${i.message}`):i.code==="functions/unavailable"?new Error(`Service unavailable: ${i.message}`):new Error(`Failed to get custom token: ${i.message}`)}}async signInWithEEN(){try{console.log("[FirebaseAuth] Signing in with EEN");const e=await this.getCustomToken(),r=(await cb(this.auth,e)).user;console.log("[FirebaseAuth] Successfully signed in with custom token:",r.uid);const s=await r.getIdToken();console.log("[FirebaseAuth] Firebase ID token obtained");try{const i=await r.getIdTokenResult()}catch(i){console.error("[FirebaseAuth] Error getting ID token claims:",i)}return{user:r,idToken:s,uid:r.uid}}catch(e){throw console.error("[FirebaseAuth] Error signing in with custom token:",e),new Error(`Firebase sign-in failed: ${e.message}`)}}async signOut(){console.log("[FirebaseAuth] Signing out");try{await fb(this.auth),this.currentUser=null,console.log("[FirebaseAuth] Successfully signed out")}catch(e){throw console.error("[FirebaseAuth] Error signing out:",e),new Error(`Firebase sign-out failed: ${e.message}`)}}async getIdToken(e=!1){if(console.log("[FirebaseAuth] Getting ID token"),!this.currentUser)return null;try{return await this.currentUser.getIdToken(e)}catch(n){return console.error("[FirebaseAuth] Error getting ID token:",n),null}}async refreshAuth(){if(console.log("[FirebaseAuth] Refreshing Firebase auth"),!vs().isAuthenticated)return console.log("[FirebaseAuth] EEN user not authenticated, cannot refresh Firebase auth"),!1;if(!this.isInitialized())return console.error("[FirebaseAuth] Firebase services not initialized, cannot refresh auth"),!1;try{return await this.signInWithEEN(),console.log("[FirebaseAuth] Refreshed Firebase auth"),!0}catch(n){return console.error("[FirebaseAuth] Error refreshing Firebase auth:",n),n.message.includes("not initialized")&&console.error("[FirebaseAuth] Firebase initialization issue detected. User should refresh the page."),!1}}}const P1=new S1,C1=()=>{const t=new URLSearchParams(window.location.search).get("redirect");if(t){const e=window.location.href.split("?")[0];window.history.replaceState(null,null,e),ja.push(t)}},yh=tT($I),k1=sT();yh.use(k1);yh.use(ja);P1.initialize(s1);document.title=Tc;document.querySelector('meta[name="description"]').setAttribute("content",bI);C1();yh.mount("#app");export{Q1 as $,Tc as A,Da as B,rt as C,c_ as D,nx as E,In as F,sx as G,J1 as H,A1 as I,R1 as J,ex as K,Z1 as L,tx as M,EC as N,s1 as O,G1 as P,F1 as Q,B1 as R,$1 as S,z1 as T,vC as U,W1 as V,K1 as W,X1 as X,q1 as Y,j1 as Z,zn as _,dI as a,H1 as a0,hu as a1,O1 as a2,V1 as a3,rx as a4,Yk as a5,Y1 as a6,P1 as a7,AI as a8,wI as a9,kE as aa,M1 as ab,Jr as b,It as c,Ce as d,Xe as e,Ve as f,Xt as g,EI as h,mf as i,Fl as j,ym as k,Cr as l,vs as m,L1 as n,kg as o,x1 as p,ui as q,Pt as r,ys as s,No as t,pI as u,D1 as v,Qt as w,OE as x,N1 as y,ka as z};
