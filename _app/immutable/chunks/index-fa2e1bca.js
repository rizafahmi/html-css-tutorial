function M(){}function ot(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function z(){return Object.create(null)}function $(t){t.forEach(K)}function Q(t){return typeof t=="function"}function kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function lt(t){return Object.keys(t).length===0}function U(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function At(t){let e;return U(t,n=>e=n)(),e}function St(t,e,n){t.$$.on_destroy.push(U(e,n))}function Tt(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function Nt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Mt(t,e,n,i,s,l){if(s){const r=V(e,n,i,l);t.p(r,s)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ct(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ht(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Lt(t){const e={};for(const n in t)e[n]=!0;return e}function Dt(t,e,n){return t.set(n),e}function Ot(t){return t&&Q(t.destroy)?t.destroy:M}let j=!1;function ut(){j=!0}function at(){j=!1}function ft(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:ft(1,s,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(r[c],f)}}function dt(t,e){if(j){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function mt(t,e,n){j&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function Pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function qt(){return B(" ")}function Bt(){return B("")}function Gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function It(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Z(t,i,e[i])}function zt(t,e){for(const n in e)Z(t,n,e[n])}function pt(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,s=!1){tt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function nt(t,e,n,i){return et(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ft(t,e,n){return nt(t,e,n,X)}function Rt(t,e,n){return nt(t,e,n,Y)}function yt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Wt(t){return yt(t," ")}function F(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Jt(t,e){const n=F(t,"HTML_TAG_START",0),i=F(t,"HTML_TAG_END",n);if(n===i)return new R(void 0,e);tt(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new R(l,e)}function Kt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ut(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Vt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Xt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class xt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Y(n.nodeName):this.e=X(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class R extends xt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}}let v;function b(t){v=t}function x(){if(!v)throw new Error("Function called outside component initialization");return v}function Yt(t){x().$$.on_mount.push(t)}function Zt(t){x().$$.after_update.push(t)}function te(t){x().$$.on_destroy.push(t)}function ee(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=gt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function ne(t,e){return x().$$.context.set(t,e),e}function ie(t){return x().$$.context.get(t)}const w=[],W=[],S=[],J=[],it=Promise.resolve();let P=!1;function st(){P||(P=!0,it.then(rt))}function se(){return st(),it}function q(t){S.push(t)}const O=new Set;let A=0;function rt(){const t=v;do{for(;A<w.length;){const e=w[A];A++,b(e),wt(e.$$)}for(b(null),w.length=0,A=0;W.length;)W.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];O.has(n)||(O.add(n),n())}S.length=0}while(w.length);for(;J.length;)J.pop()();P=!1,O.clear(),b(t)}function wt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const T=new Set;let g;function re(){g={r:0,c:[],p:g}}function ce(){g.r||$(g.c),g=g.p}function ct(t,e){t&&t.i&&(T.delete(t),t.i(e))}function bt(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),g.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function oe(t,e){bt(t,1,1,()=>{e.delete(t.key)})}function le(t,e,n,i,s,l,r,o,c,u,f,d){let _=t.length,m=l.length,h=_;const C={};for(;h--;)C[t[h].key]=h;const E=[],H=new Map,L=new Map;for(h=m;h--;){const a=d(s,l,h),p=n(a);let y=r.get(p);y?i&&y.p(a,e):(y=u(p,a),y.c()),H.set(p,E[h]=y),p in C&&L.set(p,Math.abs(h-C[p]))}const G=new Set,I=new Set;function D(a){ct(a,1),a.m(o,f),r.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=E[m-1],p=t[_-1],y=a.key,k=p.key;a===p?(f=a.first,_--,m--):H.has(k)?!r.has(y)||G.has(y)?D(a):I.has(k)?_--:L.get(y)>L.get(k)?(I.add(y),D(a)):(G.add(k),_--):(c(p,r),_--)}for(;_--;){const a=t[_];H.has(a.key)||c(a,r)}for(;m;)D(E[m-1]);return E}function ue(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ae(t){return typeof t=="object"&&t!==null?t:{}}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function vt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||q(()=>{const c=l.map(K).filter(Q);r?r.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(q)}function $t(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,s,l,r,o=[-1]){const c=v;b(t);const u=t.$$={fragment:null,ctx:null,props:l,update:M,not_equal:s,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&s(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),f&&Et(t,d)),_}):[],u.update(),f=!0,$(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ut();const d=pt(e.target);u.fragment&&u.fragment.l(d),d.forEach(N)}else u.fragment&&u.fragment.c();e.intro&&ct(t.$$.fragment),vt(t,e.target,e.anchor,e.customElement),at(),rt()}b(c)}class he{$destroy(){$t(this,1),this.$destroy=M}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as $,ae as A,$t as B,ot as C,se as D,M as E,U as F,$ as G,Q as H,Tt as I,Mt as J,jt as K,Nt as L,dt as M,te as N,Gt as O,Ht as P,Ct as Q,It as R,he as S,Y as T,Rt as U,zt as V,W,Ot as X,Lt as Y,ee as Z,St as _,qt as a,oe as a0,Dt as a1,q as a2,Ut as a3,Vt as a4,At as a5,Xt as a6,R as a7,Jt as a8,ie as a9,Pt as aa,mt as b,Wt as c,ce as d,Bt as e,ct as f,re as g,N as h,de as i,ne as j,Zt as k,X as l,Ft as m,pt as n,Yt as o,Z as p,Qt as q,B as r,kt as s,bt as t,yt as u,Kt as v,fe as w,_e as x,vt as y,ue as z};