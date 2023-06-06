import React from "react";
import { Navs } from "../../../data/Links";


const Sidebar = ({rutaActual, setRutaActual}) => {
 
  const agregarClase = (key) =>{
    return (key==rutaActual)?'bg-sky-900 text-white' : '';
  }

  const clickNav = (key) =>{
    setRutaActual(key);
  }

  return (
    <div className="h-screen md:flex hidden items-center justify-center dark:bg-gray-700">
      <div className="flex flex-col text-center text-1xl w-56 fixed dark:text-white">
        {Navs.map((nav, key) => (
          <a 
          key={key} 
          rel="noopener noreferrer" 
          className={`mb-12 font-semibold cursor-pointer py-1.5 transition-colors duration-200 transform rounded-md  hover:bg-sky-900 hover:text-white ${agregarClase(nav.key)} `}
          onClick={() => clickNav(nav.key)}
           >
            {nav.name}
          </a>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;