import React, { useEffect, useState, useRef  } from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

export const ToggleDarkMode = () => {
  const [theme, setTheme] = useState("");
  const checkTheme = useRef(null);



  useEffect(() => {
    if('theme' in localStorage){

        if (localStorage.theme === 'dark') {
          setTheme("dark");
          document.body.classList.add('dark');
          checkTheme.current.checked=true;
        } else {
          document.body.classList.remove('dark');  
          setTheme("light");
          checkTheme.current.checked=false;
        }

    }else{

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark')
        localStorage.theme = 'dark'
        setTheme("dark");
        checkTheme.current.checked=true;
      } else {
        document.body.classList.remove('dark')
        localStorage.theme = 'light'
        setTheme("light");
        checkTheme.current.checked=false;
      }

    }
  }, [localStorage.theme])
  
  const prueba = () => {
    if (theme=="dark") {
      document.body.classList.remove('dark');  
      setTheme("light");
      localStorage.theme = 'light';
      checkTheme.current.checked=false;
    }else{
      document.body.classList.add('dark');
      setTheme("dark");
      localStorage.theme = 'dark';
      checkTheme.current.checked=true;
    }
  }

  return (
    <div className="flex items-center justify-center">
      <MdWbSunny color={"yellow"} className="text-2xl" />
      <label
        htmlFor="default-toggle"
        className="relative inline-flex items-center mx-2 cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
          onChange={prueba}
          ref={checkTheme}
        />
        <div className="w-11 h-6 bg-gray-700 rounded peer peer-focus:ring-4 peer-focus:ring-blue-800  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
      </label>
      <MdDarkMode color={"grey"} className="text-2xl" />
    </div>
  );
};
