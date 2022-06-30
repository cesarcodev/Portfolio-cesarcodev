import "./App.css";
import { Nav } from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";

function App() {
  return (
    <div >
      <Nav />
      <div className="flex ">
        <div className="w-1/5  bg-gray-50">
         <Sidebar/>
        </div>
        <div className="w-4/5">content</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
