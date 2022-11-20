import React from "react";
import { Social } from "../../../data/Links";

export default function Footer() {
  return (
    <footer className="fixed w-full flex flex-col md:flex-row justify-between items-center bottom-0 right-0 text-white bg-sky-900 py-4 md:px-24 px-7 text-center ">
      <p className="text-sm  text-center order-last md:order-first">
        Cesarcodev - Desarrollador Web - 2022
      </p>

      <div className="flex my-3 ">
        
        {Social.map((link, key) => (
          <div
            key={key}
            className="relative flex flex-col items-center group mx-5"
          >
            <a rel="noopener noreferrer" href={link.url} target="_blank">
              <img
                src={`/portfolio-cesarcodev/${link.name}-white.png`}
                alt={`icono de ${link.name}`}
                width={"25px"}
              />
            </a>

            <div className="absolute bottom-0  flex-col items-center hidden mb-6 group-hover:flex">
              <span className="relative z-10 p-2 text-xs rounded-lg leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                {link.name}
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
          </div>
        ))}

      </div>

      <div className="font-bold text-lg cursor-pointer flex items-center order-first md:order-last text-white">
        <div className=" mr-1 ">
          <img src="/portfolio-cesarcodev/LogoC.png" width={"35px"} />
        </div>
        Cesarcodev
      </div>
    </footer>
  );
}
