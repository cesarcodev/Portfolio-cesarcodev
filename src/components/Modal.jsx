import React, { useRef } from "react";
export default function Modal({ verModal, setVerModal, project }) {
  const slideshow = useRef(null);


  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;

      const SizeSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${SizeSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0)";

        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;

      const ultimoElemento = slideshow.current.children[index];

      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const SizeSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${SizeSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0px)`;
      }, 30);
    }
  };

  return (
    <>
      {verModal && (
        <div className="fixed top-0 left-0 w-screen h-full z-10 bg-[#00000080] flex justify-center items-center">
          <div className="bg-white min-h-[100px] w-full md:w-2/3 rounded  relative drop-shadow-2xl">
            <div className="flex items-center justify-between p-5 rounded-t  bg-sky-900">
              <h2 className="font-semibold  text-lg text-white">
                {project.title}
              </h2>
            </div>

            <button
              className="absolute top-5 right-5 w-8 h-8 border-0  cursor-pointer transition duration-150 ease-out rounded color-sky-900 hover:bg-sky-700"
              onClick={() => setVerModal(!verModal)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-full h-full text-white bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <div className="overflow-hidden">
              <div className="flex flex-nowrap " ref={slideshow}>
                {project.photos.map((photo) => (
                  <div key={photo} className=" min-w-full relative ">
                    <img
                      src={`/portfolio-cesarcodev/Projects/${photo}`}
                      className="w-full align-top"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 false">
              <button
                className="grid h-10 w-10 place-items-center  rounded-full bg-white"
                onClick={anterior}
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                className=" grid h-10 w-10 place-items-center rounded-full bg-white"
                onClick={siguiente}
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-5 dark:bg-gray-700 dark:text-white">
              <div>{project.description}</div>
              <div>
              <span className="font-bold">Tecnologías: </span>   
                {project.technologies.map((technology) => (
                   <span className="capitalize ">{technology} </span>
                ))}
              </div>
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
        </div>
      )}
    </>
  );
}
