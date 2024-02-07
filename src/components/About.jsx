import ItemsTechs from "./ItemsTechs";
import Profile from "./icons/Profile";


export default function About() {
  return (
    <div className="md:justify-center h-full ">
      <div>
        <div className="border-b-4 border-sky-900 pb-2 flex items-center gap-x-2">
          <Profile className="w-8 h-8 dark:text-white" />
          <p className="dark:text-white text-3xl font-bold">
            Sobre mi
          </p>
        </div>
        <div className="mt-6">
          <article className="flex flex-col md:flex-row gap-14 justify-center items-center dark:text-white">
            <div
              className="[&>p]:mb-4 [&>p>strong]:font-semibold text-pretty order-2 md:order-1"
            >
              <p>

                Soy César Castañeda, <strong className="text-sky-800 dark:text-sky-500">Licenciado en Computación</strong> que se especializó como <strong className="text-sky-800 dark:text-sky-500">Desarrollador Web Full Stack</strong>.
                </p>
                <p>  
                 Tengo experiencia en el desarrollo de sistemas web para diferentes tipos de empresas, desde startups hasta grandes corporaciones. He trabajado en proyectos de <strong className="text-sky-800 dark:text-sky-500">e-business, e-commerce y gestión de sistemas</strong>, aportando buenas prácticas de programación y soluciones innovadoras.
              </p>

              <p>
              Actualmente estoy trabajando como <strong className="text-sky-800 dark:text-sky-500">freelancer de manera remota</strong>, desarrollando sistemas web para diversos clientes y sectores.
              </p>


            </div>

            <img loading="lazy" src="/portfolio-cesarcodev/foto.webp" className="rounded-full h-64 order-1 md:order-2"  alt="Foto de CesarCodev" title="Foto de CesarCodev" />

          </article>
          <div className="mt-6">
            <div className="grid grid-cols gap-5">
              <div>
                <ItemsTechs tipo="front" />
              </div>
              <div>
                <ItemsTechs tipo="back" />
              </div>
              <div>
                <ItemsTechs tipo="tool" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
