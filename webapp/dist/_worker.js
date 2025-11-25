var yt=Object.defineProperty;var ze=e=>{throw TypeError(e)};var wt=(e,t,r)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var m=(e,t,r)=>wt(e,typeof t!="symbol"?t+"":t,r),Te=(e,t,r)=>t.has(e)||ze("Cannot "+r);var o=(e,t,r)=>(Te(e,t,"read from private field"),r?r.call(e):t.get(e)),g=(e,t,r)=>t.has(e)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),p=(e,t,r,n)=>(Te(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),x=(e,t,r)=>(Te(e,t,"access private method"),r);var Fe=(e,t,r,n)=>({set _(a){p(e,t,a,r)},get _(){return o(e,t,n)}});var He=(e,t,r)=>(n,a)=>{let i=-1;return s(0);async function s(l){if(l<=i)throw new Error("next() called multiple times");i=l;let c,d=!1,f;if(e[l]?(f=e[l][0][0],n.req.routeIndex=l):f=l===e.length&&a||void 0,f)try{c=await f(n,()=>s(l+1))}catch(h){if(h instanceof Error&&t)n.error=h,c=await t(h,n),d=!0;else throw h}else n.finalized===!1&&r&&(c=await r(n));return c&&(n.finalized===!1||d)&&(n.res=c),n}},At=Symbol(),Et=async(e,t=Object.create(null))=>{const{all:r=!1,dot:n=!1}=t,i=(e instanceof at?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Ot(e,{all:r,dot:n}):{}};async function Ot(e,t){const r=await e.formData();return r?Rt(r,t):{}}function Rt(e,t){const r=Object.create(null);return e.forEach((n,a)=>{t.all||a.endsWith("[]")?Ct(r,a,n):r[a]=n}),t.dot&&Object.entries(r).forEach(([n,a])=>{n.includes(".")&&(kt(r,n,a),delete r[n])}),r}var Ct=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:t.endsWith("[]")?e[t]=[r]:e[t]=r},kt=(e,t,r)=>{let n=e;const a=t.split(".");a.forEach((i,s)=>{s===a.length-1?n[i]=r:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},St=e=>{const{groups:t,path:r}=jt(e),n=Ze(r);return Tt(n,t)},jt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(r,n)=>{const a=`@${n}`;return t.push([a,r]),a}),{groups:t,path:e}},Tt=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[n]=t[r];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,t[r][1]);break}}return e},ye={},Dt=(e,t)=>{if(e==="*")return"*";const r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){const n=`${e}#${t}`;return ye[n]||(r[2]?ye[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,r[1],new RegExp(`^${r[2]}(?=/${t})`)]:[e,r[1],new RegExp(`^${r[2]}$`)]:ye[n]=[e,r[1],!0]),ye[n]}return null},_e=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return t(r)}catch{return r}})}},Pt=e=>_e(e,decodeURI),et=e=>{const t=e.url,r=t.indexOf("/",t.indexOf(":")+4);let n=r;for(;n<t.length;n++){const a=t.charCodeAt(n);if(a===37){const i=t.indexOf("?",n),s=t.slice(r,i===-1?void 0:i);return Pt(s.includes("%25")?s.replace(/%25/g,"%2525"):s)}else if(a===63)break}return t.slice(r,n)},It=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},te=(e,t,...r)=>(r.length&&(t=te(t,...r)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),r=[];let n="";return t.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){r.length===0&&n===""?r.push("/"):r.push(n);const i=a.replace("?","");n+="/"+i,r.push(n)}else n+="/"+a}),r.filter((a,i,s)=>s.indexOf(a)===i)},De=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?_e(e,nt):e):e,rt=(e,t,r)=>{let n;if(!r&&t&&!/[%+]/.test(t)){let s=e.indexOf("?",8);if(s===-1)return;for(e.startsWith(t,s+1)||(s=e.indexOf(`&${t}`,s+1));s!==-1;){const l=e.charCodeAt(s+t.length+1);if(l===61){const c=s+t.length+2,d=e.indexOf("&",c);return De(e.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";s=e.indexOf(`&${t}`,s+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const s=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>s&&s!==-1&&(l=-1);let c=e.slice(i+1,l===-1?s===-1?void 0:s:l);if(n&&(c=De(c)),i=s,c==="")continue;let d;l===-1?d="":(d=e.slice(l+1,s===-1?void 0:s),n&&(d=De(d))),r?(a[c]&&Array.isArray(a[c])||(a[c]=[]),a[c].push(d)):a[c]??(a[c]=d)}return t?a[t]:a},Lt=rt,_t=(e,t)=>rt(e,t,!0),nt=decodeURIComponent,Me=e=>_e(e,nt),ae,S,F,it,st,Ie,M,Ue,at=(Ue=class{constructor(e,t="/",r=[[]]){g(this,F);m(this,"raw");g(this,ae);g(this,S);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});g(this,M,e=>{const{bodyCache:t,raw:r}=this,n=t[e];if(n)return n;const a=Object.keys(t)[0];return a?t[a].then(i=>(a==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=r[e]()});this.raw=e,this.path=t,p(this,S,r),p(this,ae,{})}param(e){return e?x(this,F,it).call(this,e):x(this,F,st).call(this)}query(e){return Lt(this.url,e)}queries(e){return _t(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((r,n)=>{t[n]=r}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Et(this,e))}json(){return o(this,M).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,M).call(this,"text")}arrayBuffer(){return o(this,M).call(this,"arrayBuffer")}blob(){return o(this,M).call(this,"blob")}formData(){return o(this,M).call(this,"formData")}addValidatedData(e,t){o(this,ae)[e]=t}valid(e){return o(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[At](){return o(this,S)}get matchedRoutes(){return o(this,S)[0].map(([[,e]])=>e)}get routePath(){return o(this,S)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,S=new WeakMap,F=new WeakSet,it=function(e){const t=o(this,S)[0][this.routeIndex][1][e],r=x(this,F,Ie).call(this,t);return r&&/\%/.test(r)?Me(r):r},st=function(){const e={},t=Object.keys(o(this,S)[0][this.routeIndex][1]);for(const r of t){const n=x(this,F,Ie).call(this,o(this,S)[0][this.routeIndex][1][r]);n!==void 0&&(e[r]=/\%/.test(n)?Me(n):n)}return e},Ie=function(e){return o(this,S)[1]?o(this,S)[1][e]:e},M=new WeakMap,Ue),Nt={Stringify:1},ot=async(e,t,r,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(a?a[0]+=e:a=[e],Promise.all(i.map(l=>l({phase:t,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ot(c,t,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},zt="text/plain; charset=UTF-8",Pe=(e,t)=>({"Content-Type":e,...t}),me,ue,L,ie,_,C,ge,se,oe,K,xe,ve,$,re,qe,Ft=(qe=class{constructor(e,t){g(this,$);g(this,me);g(this,ue);m(this,"env",{});g(this,L);m(this,"finalized",!1);m(this,"error");g(this,ie);g(this,_);g(this,C);g(this,ge);g(this,se);g(this,oe);g(this,K);g(this,xe);g(this,ve);m(this,"render",(...e)=>(o(this,se)??p(this,se,t=>this.html(t)),o(this,se).call(this,...e)));m(this,"setLayout",e=>p(this,ge,e));m(this,"getLayout",()=>o(this,ge));m(this,"setRenderer",e=>{p(this,se,e)});m(this,"header",(e,t,r)=>{this.finalized&&p(this,C,new Response(o(this,C).body,o(this,C)));const n=o(this,C)?o(this,C).headers:o(this,K)??p(this,K,new Headers);t===void 0?n.delete(e):r!=null&&r.append?n.append(e,t):n.set(e,t)});m(this,"status",e=>{p(this,ie,e)});m(this,"set",(e,t)=>{o(this,L)??p(this,L,new Map),o(this,L).set(e,t)});m(this,"get",e=>o(this,L)?o(this,L).get(e):void 0);m(this,"newResponse",(...e)=>x(this,$,re).call(this,...e));m(this,"body",(e,t,r)=>x(this,$,re).call(this,e,t,r));m(this,"text",(e,t,r)=>!o(this,K)&&!o(this,ie)&&!t&&!r&&!this.finalized?new Response(e):x(this,$,re).call(this,e,t,Pe(zt,r)));m(this,"json",(e,t,r)=>x(this,$,re).call(this,JSON.stringify(e),t,Pe("application/json",r)));m(this,"html",(e,t,r)=>{const n=a=>x(this,$,re).call(this,a,t,Pe("text/html; charset=UTF-8",r));return typeof e=="object"?ot(e,Nt.Stringify,!1,{}).then(n):n(e)});m(this,"redirect",(e,t)=>{const r=String(e);return this.header("Location",/[^\x00-\xFF]/.test(r)?encodeURI(r):r),this.newResponse(null,t??302)});m(this,"notFound",()=>(o(this,oe)??p(this,oe,()=>new Response),o(this,oe).call(this,this)));p(this,me,e),t&&(p(this,_,t.executionCtx),this.env=t.env,p(this,oe,t.notFoundHandler),p(this,ve,t.path),p(this,xe,t.matchResult))}get req(){return o(this,ue)??p(this,ue,new at(o(this,me),o(this,ve),o(this,xe))),o(this,ue)}get event(){if(o(this,_)&&"respondWith"in o(this,_))return o(this,_);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,_))return o(this,_);throw Error("This context has no ExecutionContext")}get res(){return o(this,C)||p(this,C,new Response(null,{headers:o(this,K)??p(this,K,new Headers)}))}set res(e){if(o(this,C)&&e){e=new Response(e.body,e);for(const[t,r]of o(this,C).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=o(this,C).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(t,r)}p(this,C,e),this.finalized=!0}get var(){return o(this,L)?Object.fromEntries(o(this,L)):{}}},me=new WeakMap,ue=new WeakMap,L=new WeakMap,ie=new WeakMap,_=new WeakMap,C=new WeakMap,ge=new WeakMap,se=new WeakMap,oe=new WeakMap,K=new WeakMap,xe=new WeakMap,ve=new WeakMap,$=new WeakSet,re=function(e,t,r){const n=o(this,C)?new Headers(o(this,C).headers):o(this,K)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[s,l]of i)s.toLowerCase()==="set-cookie"?n.append(s,l):n.set(s,l)}if(r)for(const[i,s]of Object.entries(r))if(typeof s=="string")n.set(i,s);else{n.delete(i);for(const l of s)n.append(i,l)}const a=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ie);return new Response(e,{status:a,headers:n})},qe),w="ALL",Ht="all",Mt=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",lt=class extends Error{},$t="__COMPOSED_HANDLER",Yt=e=>e.text("404 Not Found",404),$e=(e,t)=>{if("getResponse"in e){const r=e.getResponse();return t.newResponse(r.body,r)}return console.error(e),t.text("Internal Server Error",500)},j,A,ft,T,W,we,Ae,We,dt=(We=class{constructor(t={}){g(this,A);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");g(this,j,"/");m(this,"routes",[]);g(this,T,Yt);m(this,"errorHandler",$e);m(this,"onError",t=>(this.errorHandler=t,this));m(this,"notFound",t=>(p(this,T,t),this));m(this,"fetch",(t,...r)=>x(this,A,Ae).call(this,t,r[1],r[0],t.method));m(this,"request",(t,r,n,a)=>t instanceof Request?this.fetch(r?new Request(t,r):t,n,a):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${te("/",t)}`,r),n,a)));m(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,A,Ae).call(this,t.request,t,void 0,t.request.method))})});[...Mt,Ht].forEach(i=>{this[i]=(s,...l)=>(typeof s=="string"?p(this,j,s):x(this,A,W).call(this,i,o(this,j),s),l.forEach(c=>{x(this,A,W).call(this,i,o(this,j),c)}),this)}),this.on=(i,s,...l)=>{for(const c of[s].flat()){p(this,j,c);for(const d of[i].flat())l.map(f=>{x(this,A,W).call(this,d.toUpperCase(),o(this,j),f)})}return this},this.use=(i,...s)=>(typeof i=="string"?p(this,j,i):(p(this,j,"*"),s.unshift(i)),s.forEach(l=>{x(this,A,W).call(this,w,o(this,j),l)}),this);const{strict:n,...a}=t;Object.assign(this,a),this.getPath=n??!0?t.getPath??et:It}route(t,r){const n=this.basePath(t);return r.routes.map(a=>{var s;let i;r.errorHandler===$e?i=a.handler:(i=async(l,c)=>(await He([],r.errorHandler)(l,()=>a.handler(l,c))).res,i[$t]=a.handler),x(s=n,A,W).call(s,a.method,a.path,i)}),this}basePath(t){const r=x(this,A,ft).call(this);return r._basePath=te(this._basePath,t),r}mount(t,r,n){let a,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?a=c=>c:a=n.replaceRequest));const s=i?c=>{const d=i(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};a||(a=(()=>{const c=te(this._basePath,t),d=c==="/"?0:c.length;return f=>{const h=new URL(f.url);return h.pathname=h.pathname.slice(d)||"/",new Request(h,f)}})());const l=async(c,d)=>{const f=await r(a(c.req.raw),...s(c));if(f)return f;await d()};return x(this,A,W).call(this,w,te(t,"*"),l),this}},j=new WeakMap,A=new WeakSet,ft=function(){const t=new dt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,T,o(this,T)),t.routes=this.routes,t},T=new WeakMap,W=function(t,r,n){t=t.toUpperCase(),r=te(this._basePath,r);const a={basePath:this._basePath,path:r,method:t,handler:n};this.router.add(t,r,[n,a]),this.routes.push(a)},we=function(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t},Ae=function(t,r,n,a){if(a==="HEAD")return(async()=>new Response(null,await x(this,A,Ae).call(this,t,r,n,"GET")))();const i=this.getPath(t,{env:n}),s=this.router.match(a,i),l=new Ft(t,{path:i,matchResult:s,env:n,executionCtx:r,notFoundHandler:o(this,T)});if(s[0].length===1){let d;try{d=s[0][0][0][0](l,async()=>{l.res=await o(this,T).call(this,l)})}catch(f){return x(this,A,we).call(this,f,l)}return d instanceof Promise?d.then(f=>f||(l.finalized?l.res:o(this,T).call(this,l))).catch(f=>x(this,A,we).call(this,f,l)):d??o(this,T).call(this,l)}const c=He(s[0],this.errorHandler,o(this,T));return(async()=>{try{const d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return x(this,A,we).call(this,d,l)}})()},We),pt=[];function Bt(e,t){const r=this.buildAllMatchers(),n=(a,i)=>{const s=r[a]||r[w],l=s[2][i];if(l)return l;const c=i.match(s[0]);if(!c)return[[],pt];const d=c.indexOf("",1);return[s[1][d],c]};return this.match=n,n(e,t)}var Oe="[^/]+",pe=".*",he="(?:|/.*)",ne=Symbol(),Ut=new Set(".\\+*[^]$()");function qt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===pe||e===he?1:t===pe||t===he?-1:e===Oe?1:t===Oe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var V,X,D,Ge,Le=(Ge=class{constructor(){g(this,V);g(this,X);g(this,D,Object.create(null))}insert(t,r,n,a,i){if(t.length===0){if(o(this,V)!==void 0)throw ne;if(i)return;p(this,V,r);return}const[s,...l]=t,c=s==="*"?l.length===0?["","",pe]:["","",Oe]:s==="/*"?["","",he]:s.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(c){const f=c[1];let h=c[2]||Oe;if(f&&c[2]&&(h===".*"||(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))))throw ne;if(d=o(this,D)[h],!d){if(Object.keys(o(this,D)).some(u=>u!==pe&&u!==he))throw ne;if(i)return;d=o(this,D)[h]=new Le,f!==""&&p(d,X,a.varIndex++)}!i&&f!==""&&n.push([f,o(d,X)])}else if(d=o(this,D)[s],!d){if(Object.keys(o(this,D)).some(f=>f.length>1&&f!==pe&&f!==he))throw ne;if(i)return;d=o(this,D)[s]=new Le}d.insert(l,r,n,a,i)}buildRegExpStr(){const r=Object.keys(o(this,D)).sort(qt).map(n=>{const a=o(this,D)[n];return(typeof o(a,X)=="number"?`(${n})@${o(a,X)}`:Ut.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof o(this,V)=="number"&&r.unshift(`#${o(this,V)}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}},V=new WeakMap,X=new WeakMap,D=new WeakMap,Ge),Re,be,Ke,Wt=(Ke=class{constructor(){g(this,Re,{varIndex:0});g(this,be,new Le)}insert(e,t,r){const n=[],a=[];for(let s=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const d=`@\\${s}`;return a[s]=[d,c],s++,l=!0,d}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let s=a.length-1;s>=0;s--){const[l]=a[s];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(l)!==-1){i[c]=i[c].replace(l,a[s][1]);break}}return o(this,be).insert(i,t,n,o(this,Re),r),n}buildRegExp(){let e=o(this,be).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const r=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,i,s)=>i!==void 0?(r[++t]=Number(i),"$()"):(s!==void 0&&(n[Number(s)]=++t),"")),[new RegExp(`^${e}`),r,n]}},Re=new WeakMap,be=new WeakMap,Ke),Gt=[/^$/,[],Object.create(null)],Ee=Object.create(null);function ht(e){return Ee[e]??(Ee[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`))}function Kt(){Ee=Object.create(null)}function Vt(e){var d;const t=new Wt,r=[];if(e.length===0)return Gt;const n=e.map(f=>[!/\*|\/:/.test(f[0]),...f]).sort(([f,h],[u,y])=>f?1:u?-1:h.length-y.length),a=Object.create(null);for(let f=0,h=-1,u=n.length;f<u;f++){const[y,k,v]=n[f];y?a[k]=[v.map(([R])=>[R,Object.create(null)]),pt]:h++;let b;try{b=t.insert(k,h,y)}catch(R){throw R===ne?new lt(k):R}y||(r[h]=v.map(([R,Z])=>{const le=Object.create(null);for(Z-=1;Z>=0;Z--){const[P,Se]=b[Z];le[P]=Se}return[R,le]}))}const[i,s,l]=t.buildRegExp();for(let f=0,h=r.length;f<h;f++)for(let u=0,y=r[f].length;u<y;u++){const k=(d=r[f][u])==null?void 0:d[1];if(!k)continue;const v=Object.keys(k);for(let b=0,R=v.length;b<R;b++)k[v[b]]=l[k[v[b]]]}const c=[];for(const f in s)c[f]=r[s[f]];return[i,c,a]}function ee(e,t){if(e){for(const r of Object.keys(e).sort((n,a)=>a.length-n.length))if(ht(r).test(t))return[...e[r]]}}var Y,B,Ce,mt,Ve,Xt=(Ve=class{constructor(){g(this,Ce);m(this,"name","RegExpRouter");g(this,Y);g(this,B);m(this,"match",Bt);p(this,Y,{[w]:Object.create(null)}),p(this,B,{[w]:Object.create(null)})}add(e,t,r){var l;const n=o(this,Y),a=o(this,B);if(!n||!a)throw new Error(ct);n[e]||[n,a].forEach(c=>{c[e]=Object.create(null),Object.keys(c[w]).forEach(d=>{c[e][d]=[...c[w][d]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ht(t);e===w?Object.keys(n).forEach(d=>{var f;(f=n[d])[t]||(f[t]=ee(n[d],t)||ee(n[w],t)||[])}):(l=n[e])[t]||(l[t]=ee(n[e],t)||ee(n[w],t)||[]),Object.keys(n).forEach(d=>{(e===w||e===d)&&Object.keys(n[d]).forEach(f=>{c.test(f)&&n[d][f].push([r,i])})}),Object.keys(a).forEach(d=>{(e===w||e===d)&&Object.keys(a[d]).forEach(f=>c.test(f)&&a[d][f].push([r,i]))});return}const s=tt(t)||[t];for(let c=0,d=s.length;c<d;c++){const f=s[c];Object.keys(a).forEach(h=>{var u;(e===w||e===h)&&((u=a[h])[f]||(u[f]=[...ee(n[h],f)||ee(n[w],f)||[]]),a[h][f].push([r,i-d+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,B)).concat(Object.keys(o(this,Y))).forEach(t=>{e[t]||(e[t]=x(this,Ce,mt).call(this,t))}),p(this,Y,p(this,B,void 0)),Kt(),e}},Y=new WeakMap,B=new WeakMap,Ce=new WeakSet,mt=function(e){const t=[];let r=e===w;return[o(this,Y),o(this,B)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];a.length!==0?(r||(r=!0),t.push(...a)):e!==w&&t.push(...Object.keys(n[w]).map(i=>[i,n[w][i]]))}),r?Vt(t):null},Ve),U,N,Xe,Jt=(Xe=class{constructor(e){m(this,"name","SmartRouter");g(this,U,[]);g(this,N,[]);p(this,U,e.routers)}add(e,t,r){if(!o(this,N))throw new Error(ct);o(this,N).push([e,t,r])}match(e,t){if(!o(this,N))throw new Error("Fatal error");const r=o(this,U),n=o(this,N),a=r.length;let i=0,s;for(;i<a;i++){const l=r[i];try{for(let c=0,d=n.length;c<d;c++)l.add(...n[c]);s=l.match(e,t)}catch(c){if(c instanceof lt)continue;throw c}this.match=l.match.bind(l),p(this,U,[l]),p(this,N,void 0);break}if(i===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,s}get activeRouter(){if(o(this,N)||o(this,U).length!==1)throw new Error("No active router has been determined yet.");return o(this,U)[0]}},U=new WeakMap,N=new WeakMap,Xe),fe=Object.create(null),q,O,J,ce,E,z,G,Je,ut=(Je=class{constructor(e,t,r){g(this,z);g(this,q);g(this,O);g(this,J);g(this,ce,0);g(this,E,fe);if(p(this,O,r||Object.create(null)),p(this,q,[]),e&&t){const n=Object.create(null);n[e]={handler:t,possibleKeys:[],score:0},p(this,q,[n])}p(this,J,[])}insert(e,t,r){p(this,ce,++Fe(this,ce)._);let n=this;const a=St(t),i=[];for(let s=0,l=a.length;s<l;s++){const c=a[s],d=a[s+1],f=Dt(c,d),h=Array.isArray(f)?f[0]:c;if(h in o(n,O)){n=o(n,O)[h],f&&i.push(f[1]);continue}o(n,O)[h]=new ut,f&&(o(n,J).push(f),i.push(f[1])),n=o(n,O)[h]}return o(n,q).push({[e]:{handler:r,possibleKeys:i.filter((s,l,c)=>c.indexOf(s)===l),score:o(this,ce)}}),n}search(e,t){var l;const r=[];p(this,E,fe);let a=[this];const i=Ze(t),s=[];for(let c=0,d=i.length;c<d;c++){const f=i[c],h=c===d-1,u=[];for(let y=0,k=a.length;y<k;y++){const v=a[y],b=o(v,O)[f];b&&(p(b,E,o(v,E)),h?(o(b,O)["*"]&&r.push(...x(this,z,G).call(this,o(b,O)["*"],e,o(v,E))),r.push(...x(this,z,G).call(this,b,e,o(v,E)))):u.push(b));for(let R=0,Z=o(v,J).length;R<Z;R++){const le=o(v,J)[R],P=o(v,E)===fe?{}:{...o(v,E)};if(le==="*"){const H=o(v,O)["*"];H&&(r.push(...x(this,z,G).call(this,H,e,o(v,E))),p(H,E,P),u.push(H));continue}const[Se,Ne,de]=le;if(!f&&!(de instanceof RegExp))continue;const I=o(v,O)[Se],bt=i.slice(c).join("/");if(de instanceof RegExp){const H=de.exec(bt);if(H){if(P[Ne]=H[0],r.push(...x(this,z,G).call(this,I,e,o(v,E),P)),Object.keys(o(I,O)).length){p(I,E,P);const je=((l=H[0].match(/\//))==null?void 0:l.length)??0;(s[je]||(s[je]=[])).push(I)}continue}}(de===!0||de.test(f))&&(P[Ne]=f,h?(r.push(...x(this,z,G).call(this,I,e,P,o(v,E))),o(I,O)["*"]&&r.push(...x(this,z,G).call(this,o(I,O)["*"],e,P,o(v,E)))):(p(I,E,P),u.push(I)))}}a=u.concat(s.shift()??[])}return r.length>1&&r.sort((c,d)=>c.score-d.score),[r.map(({handler:c,params:d})=>[c,d])]}},q=new WeakMap,O=new WeakMap,J=new WeakMap,ce=new WeakMap,E=new WeakMap,z=new WeakSet,G=function(e,t,r,n){const a=[];for(let i=0,s=o(e,q).length;i<s;i++){const l=o(e,q)[i],c=l[t]||l[w],d={};if(c!==void 0&&(c.params=Object.create(null),a.push(c),r!==fe||n&&n!==fe))for(let f=0,h=c.possibleKeys.length;f<h;f++){const u=c.possibleKeys[f],y=d[c.score];c.params[u]=n!=null&&n[u]&&!y?n[u]:r[u]??(n==null?void 0:n[u]),d[c.score]=!0}}return a},Je),Q,Qe,Qt=(Qe=class{constructor(){m(this,"name","TrieRouter");g(this,Q);p(this,Q,new ut)}add(e,t,r){const n=tt(t);if(n){for(let a=0,i=n.length;a<i;a++)o(this,Q).insert(e,n[a],r);return}o(this,Q).insert(e,t,r)}match(e,t){return o(this,Q).search(e,t)}},Q=new WeakMap,Qe),gt=class extends dt{constructor(e={}){super(e),this.router=e.router??new Jt({routers:[new Xt,new Qt]})}},Zt=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Ye=(e,t=tr)=>{const r=/\.([a-zA-Z0-9]+?)$/,n=e.match(r);if(!n)return;let a=t[n[1]];return a&&a.startsWith("text")&&(a+="; charset=utf-8"),a},er={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},tr=er,rr=(...e)=>{let t=e.filter(a=>a!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const r=t.split("/"),n=[];for(const a of r)a===".."&&n.length>0&&n.at(-1)!==".."?n.pop():a!=="."&&n.push(a);return n.join("/")||"."},xt={br:".br",zstd:".zst",gzip:".gz"},nr=Object.keys(xt),ar="index.html",ir=e=>{const t=e.root??"./",r=e.path,n=e.join??rr;return async(a,i)=>{var f,h,u,y;if(a.finalized)return i();let s;if(e.path)s=e.path;else try{if(s=decodeURIComponent(a.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(s))throw new Error}catch{return await((f=e.onNotFound)==null?void 0:f.call(e,a.req.path,a)),i()}let l=n(t,!r&&e.rewriteRequestPath?e.rewriteRequestPath(s):s);e.isDir&&await e.isDir(l)&&(l=n(l,ar));const c=e.getContent;let d=await c(l,a);if(d instanceof Response)return a.newResponse(d.body,d);if(d){const k=e.mimes&&Ye(l,e.mimes)||Ye(l);if(a.header("Content-Type",k||"application/octet-stream"),e.precompressed&&(!k||Zt.test(k))){const v=new Set((h=a.req.header("Accept-Encoding"))==null?void 0:h.split(",").map(b=>b.trim()));for(const b of nr){if(!v.has(b))continue;const R=await c(l+xt[b],a);if(R){d=R,a.header("Content-Encoding",b),a.header("Vary","Accept-Encoding",{append:!0});break}}}return await((u=e.onFound)==null?void 0:u.call(e,l,a)),a.body(d)}await((y=e.onNotFound)==null?void 0:y.call(e,l,a)),await i()}},sr=async(e,t)=>{let r;t&&t.manifest?typeof t.manifest=="string"?r=JSON.parse(t.manifest):r=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?r=JSON.parse(__STATIC_CONTENT_MANIFEST):r=__STATIC_CONTENT_MANIFEST;let n;t&&t.namespace?n=t.namespace:n=__STATIC_CONTENT;const a=r[e]||e;if(!a)return null;const i=await n.get(a,{type:"stream"});return i||null},or=e=>async function(r,n){return ir({...e,getContent:async i=>sr(i,{manifest:e.manifest,namespace:e.namespace?e.namespace:r.env?r.env.__STATIC_CONTENT:void 0})})(r,n)},cr=e=>or(e),lr=e=>{const r={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:s=>i===s?s:null:typeof i=="function"?i:s=>i.includes(s)?s:null)(r.origin),a=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(r.allowMethods);return async function(s,l){var f;function c(h,u){s.res.headers.set(h,u)}const d=await n(s.req.header("origin")||"",s);if(d&&c("Access-Control-Allow-Origin",d),r.credentials&&c("Access-Control-Allow-Credentials","true"),(f=r.exposeHeaders)!=null&&f.length&&c("Access-Control-Expose-Headers",r.exposeHeaders.join(",")),s.req.method==="OPTIONS"){r.origin!=="*"&&c("Vary","Origin"),r.maxAge!=null&&c("Access-Control-Max-Age",r.maxAge.toString());const h=await a(s.req.header("origin")||"",s);h.length&&c("Access-Control-Allow-Methods",h.join(","));let u=r.allowHeaders;if(!(u!=null&&u.length)){const y=s.req.header("Access-Control-Request-Headers");y&&(u=y.split(/\s*,\s*/))}return u!=null&&u.length&&(c("Access-Control-Allow-Headers",u.join(",")),s.res.headers.append("Vary","Access-Control-Request-Headers")),s.res.headers.delete("Content-Length"),s.res.headers.delete("Content-Type"),new Response(null,{headers:s.res.headers,status:204,statusText:"No Content"})}await l(),r.origin!=="*"&&s.header("Vary","Origin",{append:!0})}};const ke=new gt;ke.use("/api/*",lr());ke.use("/static/*",cr({root:"./public"}));ke.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>F&A Construction Services - Roofing & Drywall Experts</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/premium-styles.css" rel="stylesheet">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rye&family=Alfa+Slab+One&family=Pirata+One&family=Metal+Mania&family=Special+Elite&family=Rubik+Dirt&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: 'Special Elite', 'Courier New', monospace;
            background: #2a1810;
            color: #f5e6d3;
            overflow-x: hidden;
            background-image: 
              repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
              repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px);
            background-size: 40px 40px;
          }
          
          .western-font {
            font-family: 'Rye', serif;
            letter-spacing: 3px;
            text-shadow: 3px 3px 0px rgba(0,0,0,0.3);
          }
          
          .texan-font {
            font-family: 'Alfa Slab One', cursive;
            letter-spacing: 2px;
            text-shadow: 2px 2px 0px rgba(0,0,0,0.3);
          }
          
          .stencil-font {
            font-family: 'Metal Mania', cursive;
            letter-spacing: 4px;
          }
          
          /* Hero Section with Parallax */
          .hero-section {
            position: relative;
            height: 100vh;
            overflow: hidden;
          }
          
          .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 120%;
            background-image: url('/static/images/Create_an_aerial_view_image_of_a_house_in_Texas_f-1764107116997.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            transform: translateY(0);
            transition: transform 0.5s ease-out;
          }

          @media (min-width: 768px) {
            .hero-bg {
              background-position: center 30%;
            }
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(66, 35, 18, 0.4), rgba(42, 24, 16, 0.6));
            box-shadow: inset 0 0 200px rgba(0,0,0,0.3);
          }
          
          .hero-overlay::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px);
            pointer-events: none;
          }
          
          .hero-content {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
          }
          
          .hero-title {
            font-size: clamp(3rem, 10vw, 8rem);
            font-weight: 900;
            text-transform: uppercase;
            line-height: 1.1;
            margin-bottom: 1rem;
            font-family: 'Rye', serif;
            color: #DAA520;
            text-shadow: 
              4px 4px 0 #000,
              6px 6px 0 #8B4513,
              8px 8px 20px rgba(0,0,0,0.8),
              0 0 40px rgba(218, 165, 32, 0.5);
            animation: fadeInUp 1s ease-out;
            letter-spacing: 5px;
            -webkit-text-stroke: 2px #3E2723;
          }
          
          .hero-subtitle {
            font-size: clamp(1rem, 3vw, 2rem);
            font-weight: 400;
            letter-spacing: 4px;
            margin-bottom: 2rem;
            animation: fadeInUp 1.2s ease-out;
            font-family: 'Special Elite', cursive;
            color: #F4E4CD;
            text-shadow: 2px 2px 4px #000, 0 0 10px rgba(0,0,0,0.5);
          }
          
          .hero-cta {
            display: inline-block;
            padding: 1.5rem 4rem;
            background: linear-gradient(135deg, #DAA520 0%, #F4C542 50%, #DAA520 100%);
            color: #2a1810;
            text-decoration: none;
            font-weight: 900;
            font-size: 1.3rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            border-radius: 8px;
            border: 4px solid #8B4513;
            box-shadow: 
              0 4px 0 #6B3410,
              0 8px 20px rgba(0,0,0,0.5),
              inset 0 2px 0 rgba(255,255,255,0.3),
              inset 0 -2px 0 rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            animation: fadeInUp 1.4s ease-out, pulse 2s infinite;
            font-family: 'Alfa Slab One', cursive;
            text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
            position: relative;
          }
          
          .hero-cta::before {
            content: '★';
            position: absolute;
            left: 1rem;
            font-size: 1.5rem;
          }
          
          .hero-cta::after {
            content: '★';
            position: absolute;
            right: 1rem;
            font-size: 1.5rem;
          }
          
          .hero-cta:hover {
            transform: translateY(-5px);
            box-shadow: 
              0 6px 0 #6B3410,
              0 12px 30px rgba(0,0,0,0.7),
              inset 0 2px 0 rgba(255,255,255,0.4),
              0 0 20px rgba(218, 165, 32, 0.6);
          }
          
          .hero-cta:active {
            transform: translateY(-2px);
            box-shadow: 
              0 2px 0 #6B3410,
              0 4px 15px rgba(0,0,0,0.5);
          }
          
          .scroll-indicator {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            animation: bounce 2s infinite;
          }
          
          .scroll-indicator i {
            font-size: 2rem;
            color: #DAA520;
          }
          
          /* Animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
            }
            50% {
              box-shadow: 0 10px 60px rgba(212, 175, 55, 0.7);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            40% {
              transform: translateX(-50%) translateY(-10px);
            }
            60% {
              transform: translateX(-50%) translateY(-5px);
            }
          }
          
          /* Navigation - Western Saloon Style */
          nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: linear-gradient(180deg, #4A2511 0%, #3E2723 100%);
            backdrop-filter: blur(10px);
            padding: 1rem 3%;
            transition: all 0.3s ease;
            border-bottom: 3px solid #DAA520;
            box-shadow: 0 2px 0 #000, 0 4px 15px rgba(0,0,0,0.5);
            background-image:
              repeating-linear-gradient(90deg, transparent 0px, rgba(0,0,0,0.1) 1px, transparent 2px, transparent 100px),
              linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 50%);
          }

          @media (min-width: 768px) {
            nav {
              padding: 1.5rem 5%;
              border-bottom: 4px solid #DAA520;
              box-shadow: 0 4px 0 #000, 0 8px 20px rgba(0,0,0,0.5);
            }
          }
          
          nav.scrolled {
            background: linear-gradient(180deg, #3E2723 0%, #2a1810 100%);
            box-shadow: 0 4px 0 #DAA520, 0 8px 30px rgba(218, 165, 32, 0.3);
            border-bottom: 3px solid #D2691E;
          }
          
          .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .logo {
            font-size: 1.5rem;
            font-weight: 900;
            color: #DAA520;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-family: 'Rye', serif;
            text-shadow: 2px 2px 0 #000, 3px 3px 8px rgba(0,0,0,0.5);
            letter-spacing: 1px;
          }

          @media (min-width: 768px) {
            .logo {
              font-size: 2.5rem;
              gap: 0.5rem;
              letter-spacing: 3px;
              text-shadow: 3px 3px 0 #000, 5px 5px 10px rgba(0,0,0,0.5);
            }
          }
          
          .logo i {
            color: #D2691E;
            filter: drop-shadow(2px 2px 0 #000);
          }
          
          .nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
          }
          
          .nav-links a {
            color: #F4E4CD;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.3s ease;
            position: relative;
            font-family: 'Alfa Slab One', cursive;
            text-shadow: 2px 2px 0 #000;
            padding: 0.5rem 1rem;
          }
          
          .nav-links a::before {
            content: '★';
            position: absolute;
            left: -10px;
            opacity: 0;
            color: #DAA520;
            transition: all 0.3s ease;
          }
          
          .nav-links a:hover::before,
          .nav-links a.active::before {
            opacity: 1;
            left: -15px;
          }
          
          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #DAA520, #D2691E);
            transition: width 0.3s ease;
            box-shadow: 0 0 10px #DAA520;
          }
          
          .nav-links a:hover::after,
          .nav-links a.active::after {
            width: 100%;
          }
          
          /* Services Section */
          .services-section {
            padding: 8rem 5%;
            background: linear-gradient(180deg, #3E2723 0%, #8B4513 100%);
          }
          
          .section-title {
            text-align: center;
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 1rem;
            color: #DAA520;
          }
          
          .section-subtitle {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 300;
            color: #ccc;
            margin-bottom: 5rem;
            letter-spacing: 2px;
          }
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .service-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            transition: all 0.5s ease;
            cursor: pointer;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
          }
          
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255, 69, 0, 0.1), rgba(139, 0, 0, 0.1));
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          
          .service-card:hover::before {
            opacity: 1;
          }
          
          .service-card:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: #DAA520;
            box-shadow: 0 20px 60px rgba(255, 69, 0, 0.3);
          }
          
          .service-icon {
            font-size: 4rem;
            color: #DAA520;
            margin-bottom: 1.5rem;
            display: inline-block;
            transition: all 0.5s ease;
          }
          
          .service-card:hover .service-icon {
            transform: scale(1.2) rotate(10deg);
          }
          
          .service-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-transform: uppercase;
          }
          
          .service-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #ccc;
          }
          
          /* Stats Section */
          .stats-section {
            padding: 6rem 5%;
            background: rgba(255, 69, 0, 0.1);
            text-align: center;
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .stat-item {
            padding: 2rem;
          }
          
          .stat-number {
            font-size: 4rem;
            font-weight: 900;
            color: #DAA520;
            margin-bottom: 0.5rem;
          }
          
          .stat-label {
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #ccc;
          }
          
          /* Projects Section */
          .projects-section {
            padding: 8rem 5%;
            background: linear-gradient(180deg, #8B4513 0%, #3E2723 100%);
          }
          
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 2rem;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .project-card {
            position: relative;
            height: 500px;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.5s ease;
          }
          
          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          
          .project-card:hover .project-image {
            transform: scale(1.1);
          }
          
          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 50%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2rem;
            transition: all 0.5s ease;
          }
          
          .project-card:hover .project-overlay {
            background: linear-gradient(to top, rgba(139, 0, 0, 0.95) 0%, rgba(255, 69, 0, 0.7) 100%);
          }
          
          .project-category {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: #DAA520;
            color: white;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 20px;
            margin-bottom: 1rem;
            width: fit-content;
          }
          
          .project-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            transform: translateY(0);
            transition: transform 0.5s ease;
          }
          
          .project-card:hover .project-title {
            transform: translateY(-10px);
          }
          
          .project-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #eee;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
          }
          
          .project-card:hover .project-description {
            opacity: 1;
            transform: translateY(0);
          }
          
          .project-stats {
            display: flex;
            gap: 2rem;
            margin-top: 1rem;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease 0.1s;
          }
          
          .project-card:hover .project-stats {
            opacity: 1;
            transform: translateY(0);
          }
          
          .stat-item-project {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #fff;
          }
          
          .stat-icon {
            color: #DAA520;
          }
          
          /* Contact Section */
          .contact-section {
            padding: 8rem 5%;
            background: linear-gradient(180deg, #3E2723 0%, #8B4513 100%);
            position: relative;
            overflow: hidden;
          }
          
          .contact-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, rgba(30, 58, 95, 0.3) 0%, transparent 50%);
            pointer-events: none;
          }
          
          .contact-container {
            max-width: 1200px;
            margin: 3rem auto;
            position: relative;
            z-index: 1;
          }
          
          .contact-premium-card {
            background: linear-gradient(135deg, rgba(30, 58, 95, 0.4), rgba(10, 22, 40, 0.6));
            border-radius: 30px;
            padding: 4rem;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          }
          
          .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          
          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
          }
          
          .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            opacity: 0;
            animation: fadeInUp 0.6s ease forwards;
          }
          
          .contact-item:nth-child(1) { animation-delay: 0.1s; }
          .contact-item:nth-child(2) { animation-delay: 0.2s; }
          .contact-item:nth-child(3) { animation-delay: 0.3s; }
          .contact-item:nth-child(4) { animation-delay: 0.4s; }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .contact-item-icon {
            width: 60px;
            height: 60px;
            min-width: 60px;
            background: linear-gradient(135deg, #DAA520, #f4d03f);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: #3E2723;
            box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
            transition: all 0.3s ease;
          }
          
          .contact-item:hover .contact-item-icon {
            transform: scale(1.1) rotate(-5deg);
            box-shadow: 0 12px 30px rgba(212, 175, 55, 0.6);
          }
          
          .contact-item-content h3 {
            font-size: 1rem;
            color: #DAA520;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }
          
          .contact-item-content p {
            font-size: 1.1rem;
            color: #fff;
            line-height: 1.6;
            margin: 0;
          }
          
          .contact-item-content a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-block;
          }
          
          .contact-item-content a:hover {
            color: #DAA520;
            transform: translateX(5px);
          }
          
          .contact-cta {
            text-align: center;
          }
          
          .contact-cta-title {
            font-size: 2.5rem;
            font-weight: 900;
            color: #fff;
            margin-bottom: 1rem;
            text-transform: uppercase;
            text-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
          }
          
          .contact-cta-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2rem;
            line-height: 1.6;
          }
          
          .contact-phone-big {
            display: inline-block;
            font-size: 3.5rem;
            font-weight: 900;
            color: #DAA520;
            text-decoration: none;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
            text-shadow: 0 4px 20px rgba(212, 175, 55, 0.5);
          }
          
          .contact-phone-big:hover {
            color: #fff;
            transform: scale(1.05);
            text-shadow: 0 8px 30px rgba(212, 175, 55, 0.8);
          }
          
          .contact-badges {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .contact-badge {
            background: rgba(212, 175, 55, 0.15);
            border: 1px solid rgba(212, 175, 55, 0.4);
            border-radius: 30px;
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
            color: #DAA520;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .contact-badge i {
            font-size: 1rem;
          }
          
          /* Emergency Banner */
          .emergency-banner {
            background: linear-gradient(135deg, #DAA520, #f4d03f);
            padding: 3rem 3rem;
            text-align: center;
            border-radius: 25px;
            max-width: 1200px;
            margin: 4rem auto 0;
            box-shadow: 0 20px 60px rgba(212, 175, 55, 0.4);
            position: relative;
            overflow: hidden;
          }
          
          .emergency-banner::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.1) 10px,
              rgba(255, 255, 255, 0.1) 20px
            );
            animation: emergency-stripes 20s linear infinite;
            pointer-events: none;
          }
          
          @keyframes emergency-stripes {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          .emergency-title {
            font-size: 1.8rem;
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 1rem;
            color: #3E2723;
            letter-spacing: 2px;
            position: relative;
            z-index: 1;
          }
          
          .emergency-title i {
            color: #c41e3a;
            animation: pulse 2s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          
          .emergency-phone {
            font-size: 3.5rem;
            font-weight: 900;
            color: #3E2723;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
          }
          
          .emergency-phone:hover {
            transform: scale(1.05);
            text-shadow: 0 4px 20px rgba(10, 22, 40, 0.3);
          }
          
          .emergency-text {
            font-size: 1.1rem;
            margin-top: 1rem;
            color: #3E2723;
            font-weight: 600;
            position: relative;
            z-index: 1;
          }
          
          /* Footer */
          footer {
            background: #000;
            padding: 4rem 5% 2rem;
          }
          
          .footer-content {
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .footer-main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
          }
          
          .footer-info h3 {
            font-size: 2rem;
            color: #DAA520;
            margin-bottom: 1rem;
            text-transform: uppercase;
          }
          
          .footer-info p {
            color: #ccc;
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          
          .footer-map {
            border-radius: 15px;
            overflow: hidden;
            height: 300px;
            border: 2px solid rgba(255, 69, 0, 0.3);
          }
          
          .footer-map iframe {
            width: 100%;
            height: 100%;
            border: none;
            filter: grayscale(0.3) brightness(0.9);
          }
          
          .footer-bottom {
            border-top: 1px solid rgba(255, 69, 0, 0.2);
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;
          }
          
          .footer-social {
            display: flex;
            gap: 1rem;
          }
          
          .social-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 69, 0, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #DAA520;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            border: 2px solid #DAA520;
            text-decoration: none;
          }
          
          .social-icon:hover {
            background: #DAA520;
            color: #fff;
            transform: translateY(-5px);
          }
          
          .copyright {
            color: #666;
            font-size: 0.9rem;
          }
          
          /* Mobile Menu */
          .mobile-menu-btn {
            display: block;
            background: none;
            border: 2px solid #DAA520;
            color: #DAA520;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem 0.8rem;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .mobile-menu-btn:hover {
            background: #DAA520;
            color: #2a1810;
          }

          @media (min-width: 769px) {
            .mobile-menu-btn {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background: linear-gradient(180deg, #3E2723 0%, #2a1810 100%);
              padding: 1.5rem 1rem;
              gap: 0.5rem;
              border-bottom: 3px solid #DAA520;
              box-shadow: 0 8px 20px rgba(0,0,0,0.7);
            }

            .nav-links a {
              padding: 1rem;
              border-bottom: 1px solid rgba(218, 165, 32, 0.2);
              text-align: center;
            }

            .nav-links a::before {
              display: none;
            }

            .nav-links a::after {
              display: none;
            }

            .nav-links.active {
              display: flex;
            }
            
            .services-grid,
            .projects-grid {
              grid-template-columns: 1fr;
            }
            
            .contact-content {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            
            .contact-premium-card {
              padding: 2.5rem 1.5rem;
            }
            
            .contact-phone-big {
              font-size: 2.5rem;
            }
            
            .contact-cta-title {
              font-size: 2rem;
            }
            
            .emergency-phone {
              font-size: 2.5rem;
            }
            
            .emergency-title {
              font-size: 1.5rem;
            }
            
            .footer-main {
              grid-template-columns: 1fr;
            }
            
            .footer-bottom {
              flex-direction: column;
              text-align: center;
            }
          }
        </style>
    </head>
    <body>
        <!-- Navigation -->
        <nav id="navbar">
            <div class="nav-container">
                <a href="#home" class="logo texan-font">
                    <i class="fas fa-tools"></i>
                    F&A CONSTRUCTION
                </a>
                <button class="mobile-menu-btn" onclick="toggleMenu()">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav-links" id="navLinks">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero-section">
            <div class="hero-bg" id="heroBg"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <div>
                    <p class="hero-subtitle">Roofing • Drywall • Complete Home Solutions</p>
                    <a href="#contact" class="hero-cta">GET FREE ESTIMATE</a>
                </div>
            </div>
            <div class="scroll-indicator">
                <i class="fas fa-chevron-down"></i>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services-section">
            <h2 class="section-title texan-font">OUR EXPERTISE</h2>
            <p class="section-subtitle">Professional Services for Your Home</p>
            
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-home service-icon"></i>
                    <h3 class="service-title texan-font">ROOFING</h3>
                    <p class="service-description">
                        Expert roof installation, repair, and maintenance. We specialize in all types of roofing materials 
                        and guarantee quality that stands the test of Texas weather.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-paint-roller service-icon"></i>
                    <h3 class="service-title texan-font">DRYWALL</h3>
                    <p class="service-description">
                        Professional drywall installation, repair, and finishing. From new construction to renovations, 
                        we deliver smooth, flawless walls every time.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-wrench service-icon"></i>
                    <h3 class="service-title texan-font">HANDYMAN</h3>
                    <p class="service-description">
                        Complete home maintenance and repair services. Whatever your home needs, 
                        we've got the skills and experience to get it done right.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-hammer service-icon"></i>
                    <h3 class="service-title texan-font">REMODELING</h3>
                    <p class="service-description">
                        Transform your space with our expert remodeling services. Kitchen, bathroom, 
                        or whole-home renovations done with precision and care.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-bolt service-icon"></i>
                    <h3 class="service-title texan-font">EMERGENCY</h3>
                    <p class="service-description">
                        24/7 emergency repair services available. When disaster strikes, 
                        we're here to help restore your home quickly and efficiently.
                    </p>
                </div>
                
                <div class="service-card">
                    <i class="fas fa-star service-icon"></i>
                    <h3 class="service-title texan-font">QUALITY</h3>
                    <p class="service-description">
                        Licensed, insured, and committed to excellence. We take pride in every project 
                        and ensure complete customer satisfaction.
                    </p>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="15">0</div>
                    <div class="stat-label">YEARS EXPERIENCE</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="500">0</div>
                    <div class="stat-label">HAPPY CLIENTS</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="1000">0</div>
                    <div class="stat-label">PROJECTS COMPLETED</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number texan-font" data-target="100">0</div>
                    <div class="stat-label">5-STAR REVIEWS</div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
            <h2 class="section-title texan-font">OUR PORTFOLIO</h2>
            <p class="section-subtitle">Excellence in Every Project</p>
            
            <div class="portfolio-categories">
                <!-- Roofing Portfolio -->
                <div class="portfolio-category">
                    <h3 class="category-title texan-font">
                        <i class="fas fa-home"></i> Roofing Projects
                    </h3>
                    <div id="roofing-carousel"></div>
                </div>
                
                <!-- Drywall Portfolio -->
                <div class="portfolio-category">
                    <h3 class="category-title texan-font">
                        <i class="fas fa-paint-roller"></i> Drywall Projects
                    </h3>
                    <div id="drywall-carousel"></div>
                </div>
                
                <!-- Kitchen Portfolio -->
                <div class="portfolio-category">
                    <h3 class="category-title texan-font">
                        <i class="fas fa-utensils"></i> Kitchen Remodeling
                    </h3>
                    <div id="kitchen-carousel"></div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact-section">
            <h2 class="section-title texan-font">GET IN TOUCH</h2>
            <p class="section-subtitle">Your San Antonio Home Experts</p>
            
            <div class="contact-container">
                <div class="contact-premium-card">
                    <div class="contact-content">
                        <!-- Contact Information -->
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Call Us Now</h3>
                                    <p><a href="tel:+17135551234">(713) 555-1234</a></p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">Mon-Sat: 7AM - 7PM</p>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Email Us</h3>
                                    <p><a href="mailto:info@sanantoniopro.com">info@sanantoniopro.com</a></p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">24-hour response time</p>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Service Area</h3>
                                    <p>Greater San Antonio Area</p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">San Antonio • New Braunfels • Boerne<br>Stone Oak • Alamo Heights</p>
                                </div>
                            </div>
                            
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="contact-item-content">
                                    <h3 class="texan-font">Our Guarantee</h3>
                                    <p>Free Estimates</p>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.3rem;">Licensed & Insured<br>Quality Workmanship</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Call to Action -->
                        <div class="contact-cta">
                            <h3 class="contact-cta-title texan-font">Ready to Start<br>Your Project?</h3>
                            <p class="contact-cta-subtitle">
                                Get your free estimate today!<br>
                                Professional service you can trust.
                            </p>
                            <a href="tel:+17135551234" class="contact-phone-big texan-font">
                                (713) 555-1234
                            </a>
                            <div class="contact-badges">
                                <div class="contact-badge">
                                    <i class="fas fa-shield-alt"></i>
                                    Licensed
                                </div>
                                <div class="contact-badge">
                                    <i class="fas fa-certificate"></i>
                                    Insured
                                </div>
                                <div class="contact-badge">
                                    <i class="fas fa-clock"></i>
                                    24/7 Emergency
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Emergency Banner -->
            <div class="emergency-banner">
                <h2 class="emergency-title texan-font">
                    <i class="fas fa-exclamation-triangle"></i> 24/7 EMERGENCY SERVICE AVAILABLE
                </h2>
                <a href="tel:+17135551234" class="emergency-phone texan-font">
                    (713) 555-1234
                </a>
                <p class="emergency-text">
                    Storm Damage • Roof Leaks • Water Damage • Urgent Repairs
                </p>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="footer-content">
                <div class="footer-main">
                    <div class="footer-info">
                        <h3 class="texan-font">F&A CONSTRUCTION HANDYMAN</h3>
                        <p>
                            <i class="fas fa-map-marker-alt" style="color: #DAA520;"></i>
                            Serving Greater San Antonio Area, TX
                        </p>
                        <p>
                            <i class="fas fa-phone" style="color: #DAA520;"></i>
                            <a href="tel:+17135551234" style="color: #ccc; text-decoration: none;">(713) 555-1234</a>
                        </p>
                        <p>
                            <i class="fas fa-envelope" style="color: #DAA520;"></i>
                            <a href="mailto:info@sanantoniopro.com" style="color: #ccc; text-decoration: none;">info@sanantoniopro.com</a>
                        </p>
                        <p style="margin-top: 2rem;">
                            Licensed, Insured & Certified<br>
                            15+ Years of Excellence in San Antonio
                        </p>
                    </div>
                    
                    <div class="footer-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221697.43718031652!2d-98.73463844999999!3d29.4246002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p class="copyright">&copy; 2025 F&A Construction Services. All Rights Reserved.</p>
                    
                    <div class="footer-social">
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>

        <script>
          // Parallax Effect
          window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroBg = document.getElementById('heroBg');
            if (heroBg) {
              heroBg.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
            }
            
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            if (scrolled > 100) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
            
            // Active nav link based on scroll position
            updateActiveNavLink();
          });
          
          // Update active nav link
          function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
              if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
              }
            });
            
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
              }
            });
          }
          
          // Counter Animation
          const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
              current += increment;
              if (current < target) {
                element.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
              } else {
                element.textContent = target + '+';
              }
            };
            
            updateCounter();
          };
          
          // Intersection Observer for counter animation
          const observerOptions = {
            threshold: 0.5
          };
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const counters = document.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                  if (counter.textContent === '0') {
                    animateCounter(counter);
                  }
                });
                observer.unobserve(entry.target);
              }
            });
          }, observerOptions);
          
          const statsSection = document.querySelector('.stats-section');
          if (statsSection) {
            observer.observe(statsSection);
          }
          
          // Mobile Menu Toggle
          function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
          }
          
          // Close mobile menu when clicking a link
          document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
              const navLinks = document.getElementById('navLinks');
              navLinks.classList.remove('active');
            });
          });
          
          // Service Card Hover Effect
          const serviceCards = document.querySelectorAll('.service-card');
          serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0) scale(1)';
            });
          });
          
          // Smooth scroll for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });
        <\/script>
        
        <!-- Application Scripts - Clean Code Architecture -->
        <script src="/static/data.js"><\/script>
        <script src="/static/components.js"><\/script>
        
        <!-- Initialize Carousels -->
        <script>
          // Wait for all scripts to load
          window.addEventListener('load', () => {
            console.log('Initializing carousels...');
            console.log('PORTFOLIO_DATA:', typeof PORTFOLIO_DATA);
            console.log('ComponentFactory:', typeof ComponentFactory);
            
            // Render Roofing Carousel
            const roofingContainer = document.getElementById('roofing-carousel');
            if (roofingContainer && typeof ComponentFactory !== 'undefined' && typeof PORTFOLIO_DATA !== 'undefined') {
              console.log('Rendering roofing carousel with', PORTFOLIO_DATA.roofing.length, 'images');
              roofingContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.roofing, 'roofing');
            } else {
              console.error('Roofing carousel failed:', {
                container: !!roofingContainer,
                factory: typeof ComponentFactory,
                data: typeof PORTFOLIO_DATA
              });
            }
            
            // Render Drywall Carousel
            const drywallContainer = document.getElementById('drywall-carousel');
            if (drywallContainer && typeof ComponentFactory !== 'undefined' && typeof PORTFOLIO_DATA !== 'undefined') {
              console.log('Rendering drywall carousel with', PORTFOLIO_DATA.drywall.length, 'images');
              drywallContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.drywall, 'drywall');
            } else {
              console.error('Drywall carousel failed');
            }
            
            // Render Kitchen Carousel
            const kitchenContainer = document.getElementById('kitchen-carousel');
            if (kitchenContainer && typeof ComponentFactory !== 'undefined' && typeof PORTFOLIO_DATA !== 'undefined') {
              console.log('Rendering kitchen carousel with', PORTFOLIO_DATA.kitchen.length, 'images');
              kitchenContainer.innerHTML = ComponentFactory.createCarousel(PORTFOLIO_DATA.kitchen, 'kitchen');
            } else {
              console.error('Kitchen carousel failed');
            }
            
            console.log('All carousels rendered successfully');
            
            // Small delay to ensure DOM is updated before carousel.js runs
            setTimeout(() => {
              const script = document.createElement('script');
              script.src = '/static/carousel.js';
              document.body.appendChild(script);
            }, 100);
          });
        <\/script>
    </body>
    </html>
  `));const Be=new gt,dr=Object.assign({"/src/index.tsx":ke});let vt=!1;for(const[,e]of Object.entries(dr))e&&(Be.all("*",t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),Be.notFound(t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),vt=!0);if(!vt)throw new Error("Can't import modules from ['/src/index.tsx']");export{Be as default};
