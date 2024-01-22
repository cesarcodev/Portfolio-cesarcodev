import{r as n,j as a,F as d,a as e}from"./index.ee38a155.js";const p=[{name:"CSS",img:"css.png"},{name:"HTML",img:"html.png"},{name:"Javascript",img:"js.png"},{name:"ReactJs",img:"react.png"},{name:"Tailwindcss",img:"tailwindcss.png"}],g=[{name:"PHP",img:"php.png"},{name:"WordPress",img:"wordpress.png"},{name:"Laravel",img:"laravel.png"},{name:"NodeJs",img:"nodejs.png"},{name:"Postgre",img:"postgre.png"},{name:"Mysql",img:"mysql.png"}],b=[{name:"Git",img:"git.png"},{name:"Trello",img:"trello.png"},{name:"Github",img:"github.png"},{name:"Bitbucket",img:"bitbucket.png"}],x=({tipo:i})=>{const[l,s]=n.exports.useState([]),[m,r]=n.exports.useState("");return n.exports.useEffect(()=>{switch(i){case"front":s(p),r("FRONT-END");break;case"back":s(g),r("BACK-END");break;case"tool":s(b),r("HERRAMIENTAS");break;default:s([]),r("OTROS");break}},[i]),a(d,{children:[e("div",{className:" bg-sky-900 text-center text-white font-bold ",children:m}),e("div",{className:"p-1 flex flex-wrap gap-3 bg-gray-50 dark:bg-gray-700",children:l.map((o,c)=>a("div",{className:" p-1 inline-flex items-center",children:[e("img",{src:`/portfolio-cesarcodev/icons/${o.img}`,alt:"",className:"mr-2"}),e("span",{className:"font-bold leading-none",children:o.name})]},c))})]})};var t=x;function h(){return a("div",{className:"grid content-center h-full px-0 md:px-5 py-0 md:py-28 dark:bg-slate-800 dark:text-white",children:[a("div",{className:" flex flex-col md:flex-row pt-0 items-center px-0 pb-4 md:pb-0 md:px-20 mb-8",children:[a("div",{className:"w-full order-2 md:order-1 md:w-3/5 text-xl  md:pr-20",children:[e("p",{className:"mb-2",children:"Soy Licenciado en Computaci\xF3n y me especialic\xE9 como Desarrollador Web"}),e("p",{className:"mb-2",children:"Tengo la creencia de que siempre se puede aprender algo nuevo y encontrar formas mucho m\xE1s f\xE1ciles y r\xE1pidas de solucionar los problemas."}),e("p",{children:"Me gustan los retos porque me permiten superarme profesionalmente, tambi\xE9n tengo facilidad para trabajar en equipo y alcanzar todos los objetivos planteados."})]}),e("div",{className:"w-3/5 order-1 md:order-2 md:w-2/5 flex items-center justify-center",children:e("img",{src:"/portfolio-cesarcodev/foto.webp",className:"w-64 rounded-full border-[10px] border-gray-300"})})]}),e("div",{className:"h-1/3",children:a("div",{className:"grid grid-cols-1 md:grid-cols-3 px-0 md:px-20 gap-5",children:[e("div",{children:e(t,{tipo:"front"})}),e("div",{children:e(t,{tipo:"back"})}),e("div",{children:e(t,{tipo:"tool"})})]})})]})}export{h as default};
