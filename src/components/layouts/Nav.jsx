import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { Navs } from "../../../data/Links";

export const Nav = ({rutaActual, setRutaActual}) => {
 
  let [open, setOpen] = useState(false);
  const [color, setColor] = useState('white'); // Nuevo estado para el color
  
  const clickNav = (key) =>{
    setRutaActual(key);
    setOpen(false);
    const element = document.getElementById(key);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="sticky top-0 w-full z-10">
      <div className="md:flex items-center justify-between bg-sky-900 py-4 md:px-24 px-7">
        <div className="font-bold text-lg cursor-pointer flex items-center  text-white">
          <div className=" mr-1 ">
            <img src="/portfolio-cesarcodev/LogoC.png" width={"45px"} alt="Imagen Logo de CesarCodev" title="Imagen Logo de CesarCodev"/>
          </div>
          Cesarcodev
        </div>

        <div className="hidden xl:block ">
          <ul className="flex gap-x-2 ">
          {Navs.map((link, index) => (
            <li
              key={index}
              className={`md:my-0 my-7  flex items-center`} 
            >
              <a className={`text-white cursor-pointer hover:bg-gray-800 hover:border-b-4 border-sky-500 h-12  px-5 py-2`}   onClick={() => clickNav(link.key)} >{link.name}</a>
            </li>
          ))}
          </ul>
        
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer xl:hidden text-white"
        >
          {open ? <BiX /> : <BiMenu />}
        </div>
        
        <ul
          className={`xl:flex xl:items-center text-center xl:pb-0 pb-6 absolute xl:static  xl:z-auto z-[9] left-0 w-full xl:w-auto xl:pl-0 pl-0 transition-all duration-500 ease-in-out  bg-sky-900 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Navs.map((link, index) => (
            <li
              key={index}
              className={`xl:ml-8 text-xl xl:hidden block xl:my-0 my-7 `} 
            >
              <a className="text-white cursor-pointer"   onClick={() => clickNav(link.key)} >{link.name}</a>
            </li>
          ))}
<li>

        <ToggleDarkMode/>
</li>
        </ul>

      </div>
    </div>
  );
};
