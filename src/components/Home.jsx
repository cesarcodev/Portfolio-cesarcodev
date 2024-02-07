import SocialPill from "./SocialPill";
import { Social } from "../../data/Links";
import Badge from "./Badge";


export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-wrap gap-4 pb-6 lg:pb-10">
          ¡Hola! Soy CesarCodev 
          <a
          href="https://www.linkedin.com/in/cesarcodev"
          target="_blank"
          rel="noopener"
          className="flex justify-center items-center hover:scale-105 transition"
        >
          <Badge text="Disponible para trabajar"/>
        </a>
        </h1>
        <div className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white">
          <h2 className="text-xl lg:text-2xl text-balance max-w-[700px] text-black dark:text-white">
            <span className="text-sky-800 dark:text-sky-500 font-bold">Desarrollador web </span> 
            <span >especializado en</span>
            <span className="text-sky-800 dark:text-sky-500 font-bold"> aplicaciones web</span> 
            <br />
            <span>Con +4 años de experiencia.</span>            
          </h2>
        </div>
      </div>
      <div className="flex gap-2 md:gap-4 mt-8 flex-wrap">
        {Social.map((link, index) => (
            <SocialPill title={link.name} url={link.url} key={index} />
          ))}
            <SocialPill title="Ver CV" url="/portfolio-cesarcodev/CV - César Castañeda.pdf"  />
      </div> 
    </div>
  );
}
