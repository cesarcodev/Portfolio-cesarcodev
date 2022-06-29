import "./App.css";
import { Nav } from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div >
      <Nav />
      <div className="flex ">
        <div className="w-1/5  ">
          sidebar
        </div>
        <div className="w-4/5">content</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
