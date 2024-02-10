import { useState, useEffect } from "react";
import { frontend, backend, tool } from "../../data/Tecnologias";
import Angular from "./icons/Angular";
import Symfony from "./icons/Symfony";
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
        setTitle("HERRAMIENTAS");
        break;
      default:
        setItems([]);
        setTitle("OTROS");
        break;
    }
  }, [tipo]);

  return (
    <>
      <div className=" bg-sky-900  text-white font-bold p-1">
        {title}
      </div>
      <div className="p-1 flex flex-wrap gap-3 bg-gray-50 dark:text-white dark:bg-gray-700">
        {items.map((item, index) => (
          <div key={index} className="p-1 inline-flex items-center">
            {item.icon ? (
              // Renderiza el componente del icono
              <>
                {item.icon === 'Angular' && <Angular className="h-5 w-5 mr-2" />}
                {item.icon === 'Symfony' && <Symfony className="h-5 w-5 mr-2" />}
              </>
            ) : (
              // Renderiza la imagen
              <img
                src={`/portfolio-cesarcodev/icons/${item.img}`}
                alt={`imagen de ${item.name}`}
                className="mr-2"
              />
            )}
            <span className="leading-none">{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsTechs;
