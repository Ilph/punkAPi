"use strict";(self.webpackChunkaston_react=self.webpackChunkaston_react||[]).push([[716],{8082:(e,n,r)=>{r.d(n,{t:()=>B});var s=r(2791),t=r(7689),i=r(1087),o=r(168),a=r(1134),d=r(5867),c=r(272),l=r(8345),h=r(6812);var x,p,b=r(9869),u=r(8839),m=r(3527),f=r(184);const g=e=>{let{beers:n,searchValue:r,isLoading:s}=e;return(0,f.jsx)(f.Fragment,{children:r&&(0,f.jsxs)(j,{children:[s&&(0,f.jsx)("p",{children:"Loading...."}),n.map((e=>(0,f.jsx)(b.r,{to:"".concat(m.Z.CARD,"/").concat(e.id),children:(0,f.jsx)(w,{children:(0,f.jsx)(u.P1,{children:e.name})})},e.id)))]})})},j=d.ZP.ul(x||(x=(0,o.Z)(["\n  position: absolute;\n  top: 110px;\n  width: 315px;\n  min-height: 20px;\n  max-height: 300px;\n  overflow: overlay;\n  background: ",";\n  border-radius: ",";\n"])),(e=>e.theme.colors.white),(e=>e.theme.borders.primary)),w=d.ZP.li(p||(p=(0,o.Z)(["\n  padding: 10px 0 5px 10px;\n"])));var Z;const v={search:""},P=e=>{const n=(0,s.useContext)(h.ls),{onSubmitForm:r,beers:t,isLoading:i}=e,{register:o,reset:d,handleSubmit:x,watch:p,formState:{errors:b,isSubmitting:u,isDirty:m}}=(0,a.cI)({defaultValues:v,mode:"onBlur",criteriaMode:"all"}),j=p("search",v.search);(0,s.useEffect)((()=>{n({type:"addSearchValue",searchValue:j})}),[n,j]);return(0,f.jsxs)(k,{onSubmit:x((e=>{r(e),d()})),children:[(0,f.jsx)(c.I,{placeholder:"Search beers ...",type:"search",...o("search"),errorOn:!!b.search}),(0,f.jsx)(g,{beers:t,searchValue:j,isLoading:i}),(0,f.jsx)(l.z,{type:"submit",size:"middle",disabled:!m||u,children:"Search"})]})},k=d.ZP.form(Z||(Z=(0,o.Z)(["\n  display: flex;\n  gap: 10px;\n  width: 100%;\n  background-color: ",";\n  border-top: 2px solid ",";\n  padding: 10px 0 0 10px;\n"])),(e=>e.theme.colors.black),(e=>e.theme.colors.accent));var S=r(8862),y=r(6045),I=r(9872),C=r(9322);const B=()=>{const[e,n]=(0,i.lr)(),r=(0,S.C)(y.u.getIsAuth),o=(0,S.T)(),a=(0,s.useContext)(h.ci),d=(0,t.s0)(),c=function(e,n){const[r,t]=(0,s.useState)(e);return(0,s.useEffect)((()=>{const r=setTimeout((()=>t(e)),n||500);return()=>{clearTimeout(r)}}),[e,n]),r}(a.searchValue,2e3),{data:l=[],isLoading:x}=(0,C.Q9)({beerName:c},{skip:!Boolean(c)});return(0,f.jsx)(P,{beers:l,isLoading:x,onSubmitForm:e=>{d(m.Z.SEARCH),n({beer_name:e.search}),r&&o((0,I.gs)(e.search))}})}},4716:(e,n,r)=>{r.r(n),r.d(n,{default:()=>V});var s,t,i,o,a,d=r(2791),c=r(6365),l=r(8082),h=r(168),x=r(7689),p=r(5867),b=r(28),u=r(8862),m=r(6045),f=r(8345),g=r(8839),j=r(7938),w=r(1308),Z=r(184);const v=e=>{const{title:n,imageUrl:r,firstBrewed:s,description:t,brewersTips:i,abv:o,ibu:a,srm:c,ph:l}=e,h=(0,u.C)(m.u.getIsAuth),[x,p]=(0,d.useState)(!0);return(0,Z.jsxs)(P,{children:[(0,Z.jsx)(k,{children:(0,Z.jsx)("img",{src:null!==r&&void 0!==r?r:w,alt:"beer"})}),(0,Z.jsxs)(S,{children:[(0,Z.jsx)(g.H3,{children:n}),(0,Z.jsxs)(y,{children:[(0,Z.jsxs)(g.P3,{children:["ABV - ",o,"%"]}),(0,Z.jsxs)(g.P3,{children:["IBU - ",a]}),(0,Z.jsxs)(g.P3,{children:["SRM - ",c]}),(0,Z.jsxs)(g.P3,{children:["pH - ",l]}),(0,Z.jsxs)(g.P3,{children:["First brewed - ",s]})]}),(0,Z.jsxs)(g.P2,{children:[(0,Z.jsx)("span",{children:"Description:"})," ",t]}),(0,Z.jsxs)(g.P2,{children:[(0,Z.jsx)("span",{children:"Tips:"})," ",i]})]}),(0,Z.jsx)(I,{children:h?(0,Z.jsx)(f.z,{size:"small",onClick:()=>{p(!x)},children:(0,Z.jsx)(j.I,{color:x?"black":"blue"})}):null})]})},P=p.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  gap: 20px;\n  background: ",";\n  border-radius: ",";\n  border: 1px solid #7e6464;\n"])),(e=>e.theme.colors.white),(e=>e.theme.borders.primary)),k=p.ZP.div(t||(t=(0,h.Z)(["\n  min-width: 20%;\n  height: 250px;\n  align-self: center;\n\n  & img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n  }\n"]))),S=p.ZP.div(i||(i=(0,h.Z)(["\n  flex: 1 0 min-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 30px;\n\n  & span {\n    font-weight: bold;\n  }\n"]))),y=p.ZP.div(o||(o=(0,h.Z)([""]))),I=p.ZP.div(a||(a=(0,h.Z)(["\n  min-width: 8%;\n  text-align: end;\n"])));var C,B=r(3052);const F=()=>{const{cardId:e}=(0,x.UO)(),{data:n,isFetching:r,isSuccess:s,isError:t,error:i}=(0,b.SM)(Number(e));let o;if(r)o=(0,Z.jsx)(B.a,{});else if(s)o=(0,Z.jsx)(v,{title:n.name,imageUrl:n.imageUrl,firstBrewed:n.firstBrewed,description:n.description,brewersTips:n.brewersTips,abv:n.abv,ibu:n.ibu,srm:n.srm,ph:n.ph});else if(t)throw new Error(i.toString());return(0,Z.jsx)(T,{children:o})},T=p.ZP.div(C||(C=(0,h.Z)(["\n  width: 60%;\n  padding-top: 20px;\n"]))),V=()=>(0,Z.jsxs)(c.N,{children:[(0,Z.jsx)(l.t,{}),(0,Z.jsx)(F,{})]})},272:(e,n,r)=>{r.d(n,{I:()=>c});var s,t,i=r(168),o=r(2791),a=r(5867),d=r(184);const c=(0,o.forwardRef)(((e,n)=>{const{errorOn:r,...s}=e;return(0,d.jsx)(l,{children:(0,d.jsx)(h,{$errorOn:r,ref:n,...s})})})),l=a.ZP.div(s||(s=(0,i.Z)(["\n  max-width: 315px;\n  width: 100%;\n"]))),h=a.ZP.input(t||(t=(0,i.Z)(["\n  width: 100%;\n  height: 34px;\n  background: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  color: ",";\n  padding-left: 10px;\n  margin-bottom: 18px;\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:hover,\n  :focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.backgroundInput),(e=>e.theme.borders.primary),(e=>e.$errorOn?e.theme.colors.error:e.theme.colors.white),(e=>e.$errorOn?e.theme.text.error:e.theme.text.textInvert),(e=>e.theme.text.placeholder),(e=>e.theme.text.placeholder))},3052:(e,n,r)=>{r.d(n,{a:()=>l});var s,t,i,o,a=r(168),d=(r(2791),r(5867)),c=r(184);const l=()=>(0,c.jsx)(p,{children:(0,c.jsx)(b,{})}),h=(0,d.F4)(s||(s=(0,a.Z)(["\n  0% { box-shadow: 0 0  inset }\n  50% , 100% { box-shadow: 0 -98px inset }\n"]))),x=(0,d.F4)(t||(t=(0,a.Z)(["\n  0% , 50%{ box-shadow: 0 0  inset }\n  100% { box-shadow: 0 -20px inset }\n"]))),p=d.ZP.div(i||(i=(0,a.Z)(["\n  text-align: center;\n"]))),b=d.ZP.span(o||(o=(0,a.Z)(["\n  width: 40px;\n  height: 98px;\n  display: inline-block;\n  position: relative;\n  border: 2px solid #fff;\n  box-sizing: border-box;\n  color: rgba(255, 61, 0, 0.9);\n  border-radius: 20px 20px 4px 4px;\n  background: #fff;\n  animation: "," 2s linear infinite alternate;\n\n  &::after {\n    content: '';\n    box-sizing: border-box;\n    position: absolute;\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -95%);\n    border: 2px solid #fff;\n    border-bottom: none;\n    background: #fff;\n    width: 15px;\n    height: 35px;\n    animation: "," 2s linear infinite alternate;\n  }\n"])),h,x)}}]);
//# sourceMappingURL=716.94d088b4.chunk.js.map