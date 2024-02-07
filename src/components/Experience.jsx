import { Experiences } from "../../data/ExperiencesData";
import Briefcase from "./icons/Briefcase";
export default function Experience() {
  return (
    <>
      <div className="md:justify-center h-full ">
        <div>
          <div className="border-b-4 border-sky-900 pb-2 flex items-center gap-x-2">
            <Briefcase className="w-8 h-8 dark:text-white" />
            <p className="dark:text-white text-3xl font-bold">
              Experiencia laboral
            </p>
          </div>
          <div className="mt-6">
            {Experiences.map(({ id, title, date, description, company }) => (
              <div key={id} className="relative  mx-0 md:mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-gray-500 before:border-dashed before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]  ">
                <div className="relative pb-5 md:pb-12 md:col-span-2">
                  <div className="sticky top-0">
                    <span className="dark:text-sky-400 text-sky-900 -left-[48px] absolute rounded-full text-7xl"
                    >&bull;</span>

                    <h3 className="text-xl font-bold dark:text-sky-400 text-sky-900">{title}</h3>
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{company}</h4>
                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{date}</time>
                  </div>
                </div>
                <div className="relative flex flex-col gap-2 pb-4 text-black dark:text-gray-300 md:col-span-3 text-pretty">
                  {description}
                </div>
              </div>
            ))}

      
          </div>
        </div>
      </div>
    </>
  );
}
