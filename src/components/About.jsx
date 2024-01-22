import ItemsTechs from "./ItemsTechs";

export default function About() {
  return (
    <div className="grid content-center h-full px-0 md:px-5 py-0 md:py-28 dark:bg-slate-800 dark:text-white">
      <div className=" flex flex-col md:flex-row pt-0 items-center px-0 pb-4 md:pb-0 md:px-20 mb-8">
        <div className="w-full order-2 md:order-1 md:w-3/5 text-xl  md:pr-20">
          <p className="mb-2">
            Soy Licenciado en Computación y me especialicé como Desarrollador
            Web
          </p>
          <p className="mb-2">
            Tengo la creencia de que siempre se puede aprender algo nuevo y
            encontrar formas mucho más fáciles y rápidas de solucionar los
            problemas.
          </p>

          <p>
            Me gustan los retos porque me permiten superarme profesionalmente,
            también tengo facilidad para trabajar en equipo y alcanzar todos los
            objetivos planteados.
          </p> 
        </div>
        <div className="w-3/5 order-1 md:order-2 md:w-2/5 flex items-center justify-center">
          <img
            src="/portfolio-cesarcodev/foto.webp"
            className="w-64 rounded-full border-[10px] border-gray-300"
          />
        </div>
      </div>
      <div className="h-1/3">
        <div className="grid grid-cols-1 md:grid-cols-3 px-0 md:px-20 gap-5">
          <div>
            <ItemsTechs tipo="front" />
          </div>
          <div>
            <ItemsTechs tipo="back"  />
          </div>
          <div>
            <ItemsTechs tipo="tool"  />
          </div>
        </div>
      </div>
    </div>
  );
}
