import { useState , Suspense, lazy} from "react";

import { Nav } from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";

import Loading from "./components/Loading";


const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));

function App() {
  const [rutaActual, setRutaActual] = useState("home");
  
  return (
    <div>
      <Nav rutaActual={rutaActual} setRutaActual={setRutaActual} />
      <div className="flex justify-center content-center">
        <div className="w-1/5 md:block hidden bg-gray-50 dark:bg-gray-700">
          <Sidebar rutaActual={rutaActual} setRutaActual={setRutaActual} />
        </div>
        <div className=" w-4/5 pt-28 pb-36 md:pt-0 md:pb-0 dark:bg-slate-800">
        <Suspense fallback={<Loading />}>
          {rutaActual === "home" ? (
            <Home />
          ) : rutaActual === "about" ? (
            <About />
          ) : rutaActual === "projects" ? (
            <Projects />
          ) : (
            <Loading/>
          )}
           </Suspense>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
