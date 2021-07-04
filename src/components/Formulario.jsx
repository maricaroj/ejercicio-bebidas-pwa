import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { setBusquedaReceta, setConsultar } = useContext(RecetasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const [error, setError] = useState(false);

  const obtenerDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        if (busqueda.categoria === "" && busqueda.nombre.trim().length === 0) {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 1500);
          return;
        }
        setError(false);
        setBusquedaReceta(busqueda);
        setConsultar(true);
        setBusqueda({
          nombre: "",
          categoria: "",
        });
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Ingrediente o Categoria</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder={error ? "¡Escríbeme!" : "Buscar por Ingrediente"}
            onChange={obtenerDatosReceta}
            value={busqueda.nombre}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
            value={busqueda.categoria}
          >
            {error ? (
              <option value="categoria"> ¡Seleccioname! </option>
            ) : (
              <option value="categoria">--Buscar por Categoría--</option>
            )}
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 d-grid gap-2">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Recetas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
