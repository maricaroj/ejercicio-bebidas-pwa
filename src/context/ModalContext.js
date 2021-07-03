import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [recetaModal, setRecetaModal] = useState({});

  useEffect(() => {
    const obtenerId = async () => {
      if (!idReceta) {
        return;
      }
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const receta = await axios.get(url);
      console.log(receta.data.drinks[0]);
      setRecetaModal(receta.data.drinks[0]);
    };
    obtenerId();
  }, [idReceta]);
  return (
    <ModalContext.Provider
      value={{
        setIdReceta,
        recetaModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
