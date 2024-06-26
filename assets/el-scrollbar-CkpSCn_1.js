import{_ as D,e as N,k as ae,a as I,u as se}from"./constants-CI75o6qA.js";import{b as W,a as P,y as G,u as J,z as h,c as k,a9 as le,ab as K,o as B,p as M,w as Q,h as oe,j as O,n as L,k as g,l as A,v as re,T as ne,R as Z,f as ee,g as U,V as ie,d as ce,e as R,A as V,B as F,I as ue,O as fe,D as ve,E as de,r as me,q as pe,x as he,ak as ye,m as be,$ as ge}from"./index-Y4Rm1UyW.js";import{t as we}from"./el-button-D2Kp3mTB.js";const T=4,Se={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ze=({move:s,size:t,bar:a})=>({[a.size]:t,transform:`translate${a.axis}(${s}%)`}),$=Symbol("scrollbarContextKey"),Ee=W({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),_e="Thumb",He=P({__name:"thumb",props:Ee,setup(s){const t=s,a=G($),o=J("scrollbar");a||we(_e,"can not inject scrollbar context");const n=h(),c=h(),u=h({}),f=h(!1);let r=!1,y=!1,b=Z?document.onselectstart:null;const l=k(()=>Se[t.vertical?"vertical":"horizontal"]),i=k(()=>ze({size:t.size,move:t.move,bar:l.value})),m=k(()=>n.value[l.value.offset]**2/a.wrapElement[l.value.scrollSize]/t.ratio/c.value[l.value.offset]),p=d=>{var S;if(d.stopPropagation(),d.ctrlKey||[1,2].includes(d.button))return;(S=window.getSelection())==null||S.removeAllRanges(),_(d);const H=d.currentTarget;H&&(u.value[l.value.axis]=H[l.value.offset]-(d[l.value.client]-H.getBoundingClientRect()[l.value.direction]))},E=d=>{if(!c.value||!n.value||!a.wrapElement)return;const S=Math.abs(d.target.getBoundingClientRect()[l.value.direction]-d[l.value.client]),H=c.value[l.value.offset]/2,x=(S-H)*100*m.value/n.value[l.value.offset];a.wrapElement[l.value.scroll]=x*a.wrapElement[l.value.scrollSize]/100},_=d=>{d.stopImmediatePropagation(),r=!0,document.addEventListener("mousemove",w),document.addEventListener("mouseup",v),b=document.onselectstart,document.onselectstart=()=>!1},w=d=>{if(!n.value||!c.value||r===!1)return;const S=u.value[l.value.axis];if(!S)return;const H=(n.value.getBoundingClientRect()[l.value.direction]-d[l.value.client])*-1,x=c.value[l.value.offset]-S,te=(H-x)*100*m.value/n.value[l.value.offset];a.wrapElement[l.value.scroll]=te*a.wrapElement[l.value.scrollSize]/100},v=()=>{r=!1,u.value[l.value.axis]=0,document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",v),j(),y&&(f.value=!1)},e=()=>{y=!1,f.value=!!t.size},C=()=>{y=!0,f.value=r};le(()=>{j(),document.removeEventListener("mouseup",v)});const j=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return N(K(a,"scrollbarElement"),"mousemove",e),N(K(a,"scrollbarElement"),"mouseleave",C),(d,S)=>(B(),M(ne,{name:g(o).b("fade"),persisted:""},{default:Q(()=>[oe(O("div",{ref_key:"instance",ref:n,class:L([g(o).e("bar"),g(o).is(g(l).key)]),onMousedown:E},[O("div",{ref_key:"thumb",ref:c,class:L(g(o).e("thumb")),style:A(g(i)),onMousedown:p},null,38)],34),[[re,d.always||f.value]])]),_:1},8,["name"]))}});var X=D(He,[["__file","thumb.vue"]]);const Te=W({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),ke=P({__name:"bar",props:Te,setup(s,{expose:t}){const a=s,o=G($),n=h(0),c=h(0),u=h(""),f=h(""),r=h(1),y=h(1);return t({handleScroll:i=>{if(i){const m=i.offsetHeight-T,p=i.offsetWidth-T;c.value=i.scrollTop*100/m*r.value,n.value=i.scrollLeft*100/p*y.value}},update:()=>{const i=o==null?void 0:o.wrapElement;if(!i)return;const m=i.offsetHeight-T,p=i.offsetWidth-T,E=m**2/i.scrollHeight,_=p**2/i.scrollWidth,w=Math.max(E,a.minSize),v=Math.max(_,a.minSize);r.value=E/(m-E)/(w/(m-w)),y.value=_/(p-_)/(v/(p-v)),f.value=w+T<m?`${w}px`:"",u.value=v+T<p?`${v}px`:""}}),(i,m)=>(B(),ee(ie,null,[U(X,{move:n.value,ratio:y.value,size:u.value,always:i.always},null,8,["move","ratio","size","always"]),U(X,{move:c.value,ratio:r.value,size:f.value,vertical:"",always:i.always},null,8,["move","ratio","size","always"])],64))}});var Ce=D(ke,[["__file","bar.vue"]]);const Re=W({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ce([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...ae(["ariaLabel","ariaOrientation"])}),Be={scroll:({scrollTop:s,scrollLeft:t})=>[s,t].every(R)},Le="ElScrollbar",Pe=P({name:Le}),xe=P({...Pe,props:Re,emits:Be,setup(s,{expose:t,emit:a}){const o=s,n=J("scrollbar");let c,u;const f=h(),r=h(),y=h(),b=h(),l=k(()=>{const e={};return o.height&&(e.height=I(o.height)),o.maxHeight&&(e.maxHeight=I(o.maxHeight)),[o.wrapStyle,e]}),i=k(()=>[o.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!o.native}]),m=k(()=>[n.e("view"),o.viewClass]),p=()=>{var e;r.value&&((e=b.value)==null||e.handleScroll(r.value),a("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function E(e,C){ye(e)?r.value.scrollTo(e):R(e)&&R(C)&&r.value.scrollTo(e,C)}const _=e=>{R(e)&&(r.value.scrollTop=e)},w=e=>{R(e)&&(r.value.scrollLeft=e)},v=()=>{var e;(e=b.value)==null||e.update()};return V(()=>o.noresize,e=>{e?(c==null||c(),u==null||u()):({stop:c}=se(y,v),u=N("resize",v))},{immediate:!0}),V(()=>[o.maxHeight,o.height],()=>{o.native||F(()=>{var e;v(),r.value&&((e=b.value)==null||e.handleScroll(r.value))})}),ue($,fe({scrollbarElement:f,wrapElement:r})),ve(()=>{o.native||F(()=>{v()})}),de(()=>v()),t({wrapRef:r,update:v,scrollTo:E,setScrollTop:_,setScrollLeft:w,handleScroll:p}),(e,C)=>(B(),ee("div",{ref_key:"scrollbarRef",ref:f,class:L(g(n).b())},[O("div",{ref_key:"wrapRef",ref:r,class:L(g(i)),style:A(g(l)),onScroll:p},[(B(),M(pe(e.tag),{id:e.id,ref_key:"resizeRef",ref:y,class:L(g(m)),style:A(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:Q(()=>[me(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?he("v-if",!0):(B(),M(Ce,{key:0,ref_key:"barRef",ref:b,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Ne=D(xe,[["__file","scrollbar.vue"]]);const De=be(Ne),z=new Map;let Y;Z&&(document.addEventListener("mousedown",s=>Y=s),document.addEventListener("mouseup",s=>{for(const t of z.values())for(const{documentHandler:a}of t)a(s,Y)}));function q(s,t){let a=[];return Array.isArray(t.arg)?a=t.arg:ge(t.arg)&&a.push(t.arg),function(o,n){const c=t.instance.popperRef,u=o.target,f=n==null?void 0:n.target,r=!t||!t.instance,y=!u||!f,b=s.contains(u)||s.contains(f),l=s===u,i=a.length&&a.some(p=>p==null?void 0:p.contains(u))||a.length&&a.includes(f),m=c&&(c.contains(u)||c.contains(f));r||y||b||l||i||m||t.value(o,n)}}const We={beforeMount(s,t){z.has(s)||z.set(s,[]),z.get(s).push({documentHandler:q(s,t),bindingFn:t.value})},updated(s,t){z.has(s)||z.set(s,[]);const a=z.get(s),o=a.findIndex(c=>c.bindingFn===t.oldValue),n={documentHandler:q(s,t),bindingFn:t.value};o>=0?a.splice(o,1,n):a.push(n)},unmounted(s){z.delete(s)}};export{We as C,De as E};
