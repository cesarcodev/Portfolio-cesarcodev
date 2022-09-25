import { Nav } from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/Home";
import { useState } from "react";
import About from "./components/About";

function App() {

  const [rutaActual, setRutaActual] = useState('home');

  return (
    <div>
      <Nav rutaActual={rutaActual} setRutaActual={setRutaActual} />
      <div className="flex justify-center content-center">
        <div className="w-1/5 md:block hidden bg-gray-50">
          <Sidebar rutaActual={rutaActual} setRutaActual={setRutaActual} />
        </div>
        <div className=" w-4/5 pt-28 pb-36 md:pt-0 md:pb-0">
          
          { 
                rutaActual === 'home' ? <Home /> :  
                rutaActual === 'about' ? <About /> :  <div>aaaa 494</div> 
              }
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
