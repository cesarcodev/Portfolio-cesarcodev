import { useState } from "react";
import { ProjectsData } from "../../data/ProjectsData";

import Modal from "./Modal";

function Projects() {
  const [verModal, setVerModal] = useState(false);
  const [project, setProject] = useState(null);
  return (
    <>
      <div className="flex flex-col  md:justify-center h-full md:h-screen px-0 md:px-5 my-28">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 ">
          {ProjectsData.map((project) => (
            <div
              key={project.id}
              className="border border-black border-1 rounded-lg h-full w-full"
            >
              <div className="p-2 font-bold text-white bg-sky-900">
                {project.title}
              </div>
              <div className="relative">
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
              <div className="p-2">
                <div>{project.description}</div>
                <div className="flex  gap-2 mt-2">
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

                    Demo
                  </a>
                ) : (
                  ""
                )}
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal verModal={verModal} setVerModal={setVerModal} project={project} />
    </>
  );
}

export default Projects;
