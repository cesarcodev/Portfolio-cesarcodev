import{r as h,a as e,F as m,j as l}from"./index.7e44892f.js";const g=[{id:1,title:"Clavellinas",cover:"clavellinas/portada.png",photos:["clavellinas/portada.png","clavellinas/1.png","clavellinas/2.png","clavellinas/3.png","clavellinas/4.png","clavellinas/5.png"],description:"descripci\xF3n 1 descripci\xF3n 1 descripci\xF3n 1 descripci\xF3n 1 descripci\xF3n 1 descripci\xF3n 1 descripci\xF3n 1 descripci\xF3n 1",technologies:["html","css","js"],github:"https://github.com/cesarcodev/Primer-protfolio",link:"sssss"},{id:2,title:"CondeSalud (Landing Page)",cover:"condesalud/portada.png",photos:["condesalud/portada.png","condesalud/1l.png","condesalud/2l.png","condesalud/3l.png"],description:"descripci\xF3n 2",technologies:["html","css","js","php","laravel"],github:"",link:""},{id:3,title:"Gymfitness",cover:"gymfitness/portada.png",photos:["gymfitness/portada.png","gymfitness/1.png","gymfitness/2.png","gymfitness/3.png","gymfitness/4.png","gymfitness/5.png"],description:"descripci\xF3n 1",technologies:["html","css","js","php","wordpress"],github:"wwww",link:"sssss"},{id:4,title:"Miraelmenu",cover:"miraelmenu/portada.png",photos:["miraelmenu/portada.png"],description:"descripci\xF3n 1",technologies:["html","css","js","php","wordpress"],github:"wwww",link:"sssss"}];function p({verModal:a,setVerModal:c,project:s}){const t=h.exports.useRef(null),i=()=>{if(t.current.children.length>0){const n=t.current.children[0];t.current.style.transition="300ms ease-out all";const r=t.current.children[0].offsetWidth;t.current.style.transform=`translateX(-${r}px)`;const d=()=>{t.current.style.transition="none",t.current.style.transform="translateX(0)",t.current.appendChild(n),t.current.removeEventListener("transitionend",d)};t.current.addEventListener("transitionend",d)}},o=()=>{if(t.current.children.length>0){const n=t.current.children.length-1,r=t.current.children[n];t.current.insertBefore(r,t.current.firstChild),t.current.style.transition="none";const d=t.current.children[0].offsetWidth;t.current.style.transform=`translateX(-${d}px)`,setTimeout(()=>{t.current.style.transition="300ms ease-out all",t.current.style.transform="translateX(0px)"},30)}};return e(m,{children:a&&e("div",{className:"fixed top-0 left-0 w-screen h-full z-10 bg-[#00000080] flex justify-center items-center",children:l("div",{className:"bg-white min-h-[100px] w-full md:w-2/3 rounded  relative drop-shadow-2xl",children:[e("div",{className:"flex items-center justify-between p-5 rounded-t  bg-sky-900",children:e("h2",{className:"font-semibold  text-lg text-white",children:s.title})}),e("button",{className:"absolute top-5 right-5 w-8 h-8 border-0  cursor-pointer transition duration-150 ease-out rounded color-sky-900 hover:bg-sky-700",onClick:()=>c(!a),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-full h-full text-white bi bi-x",viewBox:"0 0 16 16",children:e("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})}),e("div",{className:"overflow-hidden",children:e("div",{className:"flex flex-nowrap ",ref:t,children:s.photos.map((n,r)=>e("div",{className:" min-w-full relative ",children:e("img",{src:`/portfolio-cesarcodev/Projects/${n}`,className:"w-full align-top"})},r))})}),l("div",{className:"absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 false",children:[e("button",{className:"grid h-10 w-10 place-items-center  rounded-full bg-white",onClick:o,children:e("svg",{width:"12",height:"18",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11 1 3 9l8 8",stroke:"#1D2026",strokeWidth:"3",fill:"none",fillRule:"evenodd"})})}),e("button",{className:" grid h-10 w-10 place-items-center rounded-full bg-white",onClick:i,children:e("svg",{width:"13",height:"18",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"m2 1 8 8-8 8",stroke:"#1D2026",strokeWidth:"3",fill:"none",fillRule:"evenodd"})})})]}),l("div",{className:"p-5 dark:bg-gray-700 dark:text-white",children:[e("div",{children:s.description}),l("div",{children:[e("span",{className:"font-bold",children:"Tecnolog\xEDas: "}),s.technologies.map((n,r)=>l("span",{className:"capitalize ",children:[n," "]},r))]}),l("div",{className:"flex  gap-2 mt-2",children:[s.github?l("a",{rel:"noopener noreferrer",href:s.github,target:"_blank",className:"bg-gray-900 rounded text-white flex items-center p-2 hover:bg-zinc-700",children:[e("img",{src:"/portfolio-cesarcodev/Github-white.png",alt:`icono de github de ${s.title}`,className:"mr-1 w-5 h-5"}),"Github"]}):"",s.link?l("a",{rel:"noopener noreferrer",href:s.link,target:"_blank",className:"bg-blue-700 rounded text-white flex items-center p-2 w-auto hover:bg-blue-600",children:[e("img",{src:"/portfolio-cesarcodev/demo.png",alt:`icono de demo de ${s.title}`,className:"mr-1 w-5 h-5"}),"Demo"]}):""]})]})]})})})}function f(){const[a,c]=h.exports.useState(!1),[s,t]=h.exports.useState(null);return l(m,{children:[e("div",{className:"flex flex-col  md:justify-center h-full md:h-screen px-0 md:px-5 my-0 md:my-28 dark:bg-slate-800",children:e("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6  ",children:g.map(i=>l("div",{className:"border border-black border-1 rounded-lg h-full w-full dark:bg-gray-700",children:[e("div",{className:"p-2 font-bold text-white bg-sky-900",children:i.title}),l("div",{className:"relative ",children:[e("div",{className:"absolute right-0",children:i.technologies.map(o=>e("div",{className:"rounded-full bg-white p-2",children:e("img",{src:`/portfolio-cesarcodev/icons/${o}.png`,width:"20",alt:o})},o))}),e("img",{src:`/portfolio-cesarcodev/Projects/${i.cover}`,alt:i.title,className:"h-48 w-full  object-cover z-0",onClick:()=>{c(!a),t(i)}})]}),l("div",{className:"p-2 dark:text-white",children:[e("div",{children:i.description}),l("div",{className:"flex  gap-2 mt-2",children:[i.github?l("a",{rel:"noopener noreferrer",href:i.github,target:"_blank",className:"bg-gray-900 rounded text-white flex items-center p-2 hover:bg-zinc-700",children:[e("img",{src:"/portfolio-cesarcodev/Github-white.png",alt:`icono de github de ${i.title}`,className:"mr-1 w-5 h-5"}),"Github"]}):"",i.link?l("a",{rel:"noopener noreferrer",href:i.link,target:"_blank",className:"bg-blue-700 rounded text-white flex items-center p-2 w-auto hover:bg-blue-600",children:[e("img",{src:"/portfolio-cesarcodev/demo.png",alt:`icono de demo de ${i.title}`,className:"mr-1 w-5 h-5"}),"Demo"]}):""]})]})]},i.id))})}),e(p,{verModal:a,setVerModal:c,project:s})]})}export{f as default};
