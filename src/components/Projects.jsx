import { useState } from "react";
import { ProjectsData } from "../../data/ProjectsData";
import Html5 from './icons/Html5';
import Css from './icons/Css';
import Javascript from './icons/Javascript';
import Angular from './icons/Angular';


import { Code } from "./icons/Code";
import Php from "./icons/Php";
import Symfony from "./icons/Symfony";
function Projects() {
  const [verModal, setVerModal] = useState(false);
  const [project, setProject] = useState(null);
  return (
    <>

      {/* <div className="md:justify-center h-full px-0 md:px-5 py-0 md:py-28 dark:bg-slate-800">
    
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6  ">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="border border-black border-1 rounded-lg h-full w-full bg-gray-50 dark:bg-gray-700"
            >
              <div className="p-2 font-bold text-white bg-sky-900 rounded-t-lg">
                {project.title}
              </div>
              <div className="relative ">
                <div className="absolute right-0">
                  {project.technologies.map((technology) => (
                    <div key={technology} className="rounded-full bg-white p-2">
                      <img
                        src={`/portfolio-cesarcodev/icons/${technology}.png`}
                        width={"20"}
                        alt={technology}
                      />
                    </div>
                  ))}
                </div>
                <img
                  src={`/portfolio-cesarcodev/Projects/${project.cover}`}
                  alt={project.title}
                  className="h-48 w-full  object-cover z-0"
                  onClick={() => {
                    setVerModal(!verModal);
                    setProject(project);
                  }}
                />
              </div>
              <div className="p-2 dark:text-white" >
                <p className="line-clamp-5">{project.description}</p>
                <div className="flex h-10 gap-2 mt-2">
                {project.github ? (
                  <a
                    rel="noopener noreferrer"
                    href={project.github}
                    target="_blank"
                    className="bg-gray-900 rounded text-white flex items-center p-2 hover:bg-zinc-700"
                  >
                    <img
                      src={`/portfolio-cesarcodev/Github-white.png`}
                      alt={`icono de github de ${project.title}`}
                      className="mr-1 w-5 h-5"
                    />

                    Github
                  </a>
                ) : (
                  ""
                )}
                {project.link ? (
                  <a
                    rel="noopener noreferrer"
                    href={project.link}
                    target="_blank"
                    className="bg-blue-700 rounded text-white flex items-center p-2 w-auto hover:bg-blue-600"
                  >
                  <img
                      src={`/portfolio-cesarcodev/demo.png`}
                      alt={`icono de demo de ${project.title}`}
                      className="mr-1 w-5 h-5"
                    />

                    Ir al sitio
                  </a>
                ) : (
                  ""
                )}
        
                </div>
                        
                <button  
                 onClick={() => {
                  setVerModal(!verModal);
                  setProject(project);
                }}
                className=" mt-2  bg-sky-900 hover:bg-sky-800   text-white dark:text-white font-bold rounded inline-flex items-center justify-center w-full p-2 transition duration-150 ease-out ">
                  Ver más
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* <Modal verModal={verModal} setVerModal={setVerModal} project={project} /> */}

      <div className="md:justify-center h-full ">
        <div>
          <div className="border-b-4 border-sky-900 pb-2 flex items-center gap-x-2 ">
            <Code className="w-8 h-8 dark:text-white" />
            <p className="dark:text-white text-3xl font-bold">
              Mis últimos proyectos
            </p>
          </div>

          <div className="flex flex-col gap-y-24 md:gap-y-10 mt-6" >
            {ProjectsData.map((project) => (

              <article key={project.id} className="flex flex-col space-x-0 space-y-0 group md:flex-row md:space-x-0 md:space-y-0 gap-5">
                <div className="w-full mb:w-2/5">
                  <img className="rounded shadow-2xl shadow-white/10 h-60 md:h-64 md:w-96" loading="lazy" src={project.image} alt={`Captura de pantalla del proyecto ${project.image}`} />

                </div>

                <div className="w-full mb:w-3/5">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap mt-2">
                     <ul className="flex gap-3 flex-wrap mb-2">
                      {project.technologies.map(tag => (
                        <li key={tag.id}>
                          <span
                            className={"flex gap-x-2 rounded-full text-xs py-1 px-2 bg-blue-900 text-white"}
                          >
                            {tag.icon == 'Html5' && <Html5 className="h-5 w-5" />}
                            {tag.icon == "Css" && <Css className="h-5 w-5" />}
                            {tag.icon == "Javascript" && <Javascript className="h-5 w-5" />}
                            {tag.icon == "Angular" && <Angular className="h-5 w-5" />}
                            {tag.icon == "Php" && <Php className="h-5 w-5" />}
                            {tag.icon == "Symfony" && <Symfony className="h-5 w-5" />}
                            {tag.name}
                          </span>
                        </li>
                      ))}
                    </ul> 


                    <div className="mt-2 text-gray-700 dark:text-gray-400">{project.description}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>



    </>
  );
}

export default Projects;
