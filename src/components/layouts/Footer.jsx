import { Social } from "../../../data/Links";
import Github from "../Icons/Github";
import Gmail from "../icons/Gmail";
import LinkedIn from "../icons/LinkedIn";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="fixed w-full flex flex-col md:flex-row justify-between items-center bottom-0 right-0 text-white bg-sky-900 py-4 md:px-24 px-7 text-center ">
      <p className="text-sm  text-center order-last md:order-first">
        Cesarcodev - Desarrollador Web - {year}
      </p>

      <div className="flex my-3 ">

        {Social.map(({ name, url }, key) => (
          <div
            key={key}
            className="relative flex flex-col items-center group mx-5"
          >
            <a rel="noopener noreferrer" href={name == "Gmail" ? `mailto:` + url : url} target="_blank" title={`Visitar a ${name}`}
        aria-label={`Visitar a ${name}`}>
              {name == "Gmail" && <Gmail className="h-6 w-6" />}
              {name == "Linkedin" && <LinkedIn className="h-6 w-6" />}
              {name == "Github" && <Github className="h-6 w-6" />}
            </a>

            <div className="absolute bottom-0  flex-col items-center hidden mb-6 group-hover:flex">
              <span className="relative z-10 p-2 text-xs rounded-lg leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                {name}
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
          </div>
        ))}

      </div>

      <div className="font-bold text-lg cursor-pointer flex items-center order-first md:order-last text-white">
        <div className=" mr-1 ">
          <img src="/portfolio-cesarcodev/LogoC.png" width={"35px"}  alt="Imagen Logo de CesarCodev" title="Imagen Logo de CesarCodev"/>
        </div>
        Cesarcodev
      </div>
    </footer>
  );
}
