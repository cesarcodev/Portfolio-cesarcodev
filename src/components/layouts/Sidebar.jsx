import React from "react";
import { Navs } from "../../../data/Links";

export default function Sidebar() {
  return (
    <div className="h-screen  md:flex hidden items-center justify-center ">
      <div className="flex flex-col text-center text-1xl w-56 ">
        {Navs.map((nav, key) => (
          <a key={key} rel="noopener noreferrer" className="mb-12 font-semibold cursor-pointer py-1.5 transition-colors duration-200 transform rounded-md  hover:bg-sky-900 hover:text-white " >
            {nav.name}
          </a>
        ))}
      </div>
    </div>
  );
}
