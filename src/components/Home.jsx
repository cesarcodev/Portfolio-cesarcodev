import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center md:h-screen items-center md:flex-row  w-full">
      <div className="w-full md:w-1/2 md:flex md:pr-8 md:justify-end">
        <img src="/portfolio-cesarcodev/cc.png" className="md:w-96 w-19" />
      </div>
      <div className="w-full md:w-1/2  flex justify-center">
        <div className="text-center">
          <p className="text-lg mt-2 md:text-4xl leading-tight font-bold mb-5 ">
            ¡Hola! <br /> Espero que tengas un buen día
            <br />
            Mi nombre es César Castañeda
            <br />
            Programar Web
          </p>
          <a
            className="bg-blue-900 hover:bg-blue-800 md:text-xl text-white font-bold md:py-4 py-2 md:px-8 px-4 rounded inline-flex items-center"
            href="/portfolio-cesarcodev/CV-César Castañeda.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`/portfolio-cesarcodev/descargar.png`}
              alt={`icono de descargar`}
              className={"mr-2 w-4 md:w-6"}
            />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
