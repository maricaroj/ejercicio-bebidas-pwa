import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [busquedaReceta, setBusquedaReceta] = useState({
    nombre: "",
    categoria: "",
  });
  const [recetas, setRecetas] = useState([]);
  const [consultar, setConsultar] = useState(false);

  const { nombre, categoria } = busquedaReceta;

  useEffect(() => {
      if(consultar){
          const obtenerRecetas = async () => {
            let url;
            if(nombre){
                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`;
            }
            if(categoria){
                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`;
            }
            const recetasResponse = await axios.get(url);
            setRecetas(recetasResponse.data.drinks);
          };
          obtenerRecetas();
      }
  }, [busquedaReceta]);

  return (
    <RecetasContext.Provider
      value={{
        setBusquedaReceta,
        setConsultar,
        recetas,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
