import { useState, useEffect } from "react";
import { frontend, backend, tool } from "../../data/Tecnologias";
const ItemsTechs = ({ tipo }) => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (tipo) {
      case "front":
        setItems(frontend);
        setTitle("FRONT-END");
        break;
      case "back":
        setItems(backend);
        setTitle("BACK-END");
        break;
      case "tool":
        setItems(tool);
        setTitle("HERRAMIENTA");
        break;
      default:
        setItems([]);
        setTitle("OTROS");
        break;
    }
  }, [tipo]);

  return (
    <>
        <div className="w-2/5 bg-sky-900 border-black border-2 text-white font-bold pl-4">
          {title}
        </div>
        <div className="border-2 border-black p-2 flex flex-wrap gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-dotted border-black p-1 inline-flex items-center"
            >
              <img
                src={`/portfolio-cesarcodev/icons/${item.img}`}
                alt=""
                className="mr-2"
              />
              <span className="font-bold leading-none">{item.name}</span>
            </div>
          ))}
        </div>
    </>
  );
};

export default ItemsTechs;
