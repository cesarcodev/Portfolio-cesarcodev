import { Educations, Experiences } from "../../data/ExperiencesData";
export default function Experience() {
  return (
    <>
      <div className="md:justify-center h-full px-0 md:px-20 py-0 md:py-28 dark:bg-slate-800 ">
        <div>
          <div className="border-b-4 border-sky-900  pb-2">
            <p className="dark:text-white text-3xl font-bold">Educación</p>
          </div>

          <div>
            {Educations.map((education) => (
              <div key={education.id} className=" bg-gray-50 dark:bg-gray-700 my-2 rounded-lg p-4">
                <div className="mb-1">
                  <p className="dark:text-white text-xl font-bold">
                    {education.title}
                  </p>
                  <p className="dark:text-white text-sm font-bold">
                    {education.date}
                  </p>
                </div>
                <p className="dark:text-white ">{education.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border-b-4 border-sky-900 pb-2">
            <p className="dark:text-white text-3xl font-bold">
              Experiencia laboral
            </p>
          </div>
          <div>
            {Experiences.map((experience) => (
              <div  key={experience.id} className="bg-gray-50 dark:bg-gray-700 my-2 rounded-lg p-4">
                <div className="mb-1">
                  <p className="dark:text-white text-xl font-bold">
                    {experience.title}
                  </p>
                  <p className="dark:text-white text-sm font-bold">
                    {experience.date}
                  </p>
                </div>
                <p className="dark:text-white whitespace-pre-wrap">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
