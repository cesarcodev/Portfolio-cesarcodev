import { Nav } from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center content-center">
        <div className="w-1/5 md:block hidden bg-gray-50">
          <Sidebar />
        </div>
        <div className="mt-24 md:mt-0 md:pt-0 pt-10 w-4/5 ">
          <Home />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
