import{R as d,r as n,j as c,a as t,_ as h,L as p}from"./index.09fadf64.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=d.createContext&&d.createContext(v),i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(e){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},i.apply(this,arguments)},k=globalThis&&globalThis.__rest||function(e,r){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)r.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(a[o[l]]=e[o[l]]);return a};function b(e){return e&&e.map(function(r,a){return d.createElement(r.tag,i({key:a},r.attr),b(r.child))})}function u(e){return function(r){return d.createElement(w,i({attr:i({},e.attr)},r),b(e.child))}}function w(e){var r=function(a){var o=e.attr,l=e.size,s=e.title,f=k(e,["attr","size","title"]),g=l||a.size||"1em",m;return a.className&&(m=a.className),e.className&&(m=(m?m+" ":"")+e.className),d.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,o,f,{className:m,style:i(i({color:e.color||a.color},a.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),s&&d.createElement("title",null,s),e.children)};return x!==void 0?d.createElement(x.Consumer,null,function(a){return r(a)}):r(v)}function N(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(e)}function _(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"}}]})(e)}function z(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function E(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"}}]})(e)}const O=()=>{const[e,r]=n.exports.useState(""),a=n.exports.useRef(null);return n.exports.useEffect(()=>{"theme"in localStorage?localStorage.theme==="dark"?(r("dark"),document.body.classList.add("dark"),a.current.checked=!0):(document.body.classList.remove("dark"),r("light"),a.current.checked=!1):localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.body.classList.add("dark"),localStorage.theme="dark",r("dark"),a.current.checked=!0):(document.body.classList.remove("dark"),localStorage.theme="light",r("light"),a.current.checked=!1)},[localStorage.theme]),c("div",{className:"flex items-center justify-center",children:[t(E,{color:"yellow",className:"text-2xl"}),c("label",{htmlFor:"default-toggle",className:"relative inline-flex items-center mx-2 cursor-pointer",children:[t("input",{type:"checkbox",value:"",id:"default-toggle",className:"sr-only peer",onChange:()=>{e=="dark"?(document.body.classList.remove("dark"),r("light"),localStorage.theme="light",a.current.checked=!1):(document.body.classList.add("dark"),r("dark"),localStorage.theme="dark",a.current.checked=!0)},ref:a}),t("div",{className:"w-11 h-6 bg-gray-700 rounded peer peer-focus:ring-4 peer-focus:ring-blue-800  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"})]}),t(z,{color:"grey",className:"text-2xl"})]})},y=[{name:"INICIO",key:"home"},{name:"SOBRE MI",key:"about"},{name:"PROYECTOS",key:"projects"},{name:"EXPERIENCIA",key:"experience"}],S=[{name:"Github",url:"https://github.com/cesarcodev/"},{name:"Linkedin",url:"https://www.linkedin.com/in/cesarcodev/"},{name:"Gmail",url:"mailto:cesarce735@gmail.com"}],C=({rutaActual:e,setRutaActual:r})=>{let[a,o]=n.exports.useState(!1);const l=s=>{r(s),o(!1)};return t("div",{className:"shadow-md w-full fixed  z-10 top-0 left-0 ",children:c("div",{className:"md:flex items-center justify-between bg-sky-900 py-4 md:px-24 px-7",children:[c("div",{className:"font-bold text-lg cursor-pointer flex items-center  text-white",children:[t("div",{className:" mr-1 ",children:t("img",{src:"/portfolio-cesarcodev/LogoC.png",width:"45px"})}),"Cesarcodev"]}),t("div",{onClick:()=>o(!a),className:"text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white",children:a?t(_,{}):t(N,{})}),c("ul",{className:`md:flex md:items-center text-center md:pb-0 pb-6 absolute md:static  md:z-auto z-[9] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in-out  bg-sky-900 ${a?"top-20 ":"top-[-490px]"}`,children:[y.map((s,f)=>t("li",{className:"md:ml-8 text-xl md:hidden block md:my-0 my-7 ",children:t("a",{className:"text-white cursor-pointer",onClick:()=>l(s.key),children:s.name})},f)),t(O,{})]})]})})};function j(){return c("footer",{className:"fixed w-full flex flex-col md:flex-row justify-between items-center bottom-0 right-0 text-white bg-sky-900 py-4 md:px-24 px-7 text-center ",children:[t("p",{className:"text-sm  text-center order-last md:order-first",children:"Cesarcodev - Desarrollador Web - 2022"}),t("div",{className:"flex my-3 ",children:S.map((e,r)=>c("div",{className:"relative flex flex-col items-center group mx-5",children:[t("a",{rel:"noopener noreferrer",href:e.url,target:"_blank",children:t("img",{src:`/portfolio-cesarcodev/${e.name}-white.png`,alt:`icono de ${e.name}`,width:"25px"})}),c("div",{className:"absolute bottom-0  flex-col items-center hidden mb-6 group-hover:flex",children:[t("span",{className:"relative z-10 p-2 text-xs rounded-lg leading-none text-white whitespace-no-wrap bg-black shadow-lg",children:e.name}),t("div",{className:"w-3 h-3 -mt-2 rotate-45 bg-black"})]})]},r))}),c("div",{className:"font-bold text-lg cursor-pointer flex items-center order-first md:order-last text-white",children:[t("div",{className:" mr-1 ",children:t("img",{src:"/portfolio-cesarcodev/LogoC.png",width:"35px"})}),"Cesarcodev"]})]})}const L=({rutaActual:e,setRutaActual:r})=>{const a=l=>l==e?"bg-sky-900 text-white":"",o=l=>{r(l)};return t("div",{className:"h-screen md:flex hidden items-center justify-center dark:bg-gray-700",children:t("div",{className:"flex flex-col text-center text-1xl w-56 fixed dark:text-white",children:y.map((l,s)=>t("a",{rel:"noopener noreferrer",className:`mb-12 font-semibold cursor-pointer py-1.5 transition-colors duration-200 transform rounded-md  hover:bg-sky-900 hover:text-white ${a(l.key)} `,onClick:()=>o(l.key),children:l.name},s))})})},I=n.exports.lazy(()=>h(()=>import("./Home.dde70fe4.js"),["assets/Home.dde70fe4.js","assets/index.09fadf64.js","assets/index.7d84ce07.css"])),M=n.exports.lazy(()=>h(()=>import("./About.a42c1325.js"),["assets/About.a42c1325.js","assets/index.09fadf64.js","assets/index.7d84ce07.css"])),P=n.exports.lazy(()=>h(()=>import("./Projects.0c119854.js"),["assets/Projects.0c119854.js","assets/index.09fadf64.js","assets/index.7d84ce07.css"])),T=n.exports.lazy(()=>h(()=>import("./Experience.cb8ffd47.js"),["assets/Experience.cb8ffd47.js","assets/index.09fadf64.js","assets/index.7d84ce07.css"]));function A(){const[e,r]=n.exports.useState("home");return c("div",{children:[t(C,{rutaActual:e,setRutaActual:r}),c("div",{className:`flex justify-center ${e=="home"?"h-screen":"h-full"}  dark:bg-gray-800`,children:[t("div",{className:"w-1/5 md:block hidden dark:bg-gray-700  bg-gray-50",children:t(L,{rutaActual:e,setRutaActual:r})}),t("div",{className:" w-4/5 pt-28 pb-36 md:pt-0 md:pb-0 ",children:t(n.exports.Suspense,{fallback:t(p,{}),children:e==="home"?t(I,{}):e==="about"?t(M,{}):e==="projects"?t(P,{}):e==="experience"?t(T,{}):t(p,{})})})]}),t(j,{})]})}export{A as default};
