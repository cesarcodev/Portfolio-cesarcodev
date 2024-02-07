import { useState } from "react";

import { Nav } from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import EmailSection from "./components/EmailSection";


function App() {
  const [rutaActual, setRutaActual] = useState("home");
  
  return (
    <div className="top-0 bottom-0 z-[-2] min-h-screen w-full dark:bg-gray-800">
      <Nav rutaActual={rutaActual} setRutaActual={setRutaActual} />
      <div className={`dark:bg-gray-800 px-4`}>
        {/* <div className="w-1/5 md:block hidden dark:bg-gray-700  bg-gray-50">
          <Sidebar rutaActual={rutaActual} setRutaActual={setRutaActual} />
        </div> */}
        <div className="pt-0  pb-36 md:pt-0 md:pb-0 w-full dark:bg-gray-800">
            <section className="section pt-20 pb-32 md:pt-25 lg:pt-25  md:py-48 px-1 md:px-0 w-full mx-auto lg:w-[750px]" id="home">
              <Home />
            </section >
            {/* <section className="section px-1 md:px-0  pt-2 w-full mx-auto lg:w-[740px] pb-24 " id="experience"> */}
            <section className="section  w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-24" id="experience">
              <Experience />
            </section>
            <section className="section  w-full mx-auto container lg:max-w-4xl md:max-w-2xl py-24" id="projects">
              <Projects />
            </section>
            <section className="section  w-full mx-auto container lg:max-w-4xl md:max-w-2xl  pt-24 pb-28" id="about">
              <About />
            </section>
            <section className="section  w-full mx-auto container lg:max-w-4xl md:max-w-2xl  pt-24 pb-24 md:pb-64 " id="contact">
            <EmailSection/>
            </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
