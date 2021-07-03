import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 700,
    backgroundColor: theme.palette.error.dark,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: theme.palette.error.contrastText,
    fontFamily: 'Maven Pro',
    fontSize: '20px'
  },
  container: {
    textAlign: "right",
  },
  title: {
    fontFamily: 'Shadows Into Light',
    fontSize:'50px',
    color: theme.palette.error.contrastText,
  },
  btn: {
    fontFamily: 'Shadows Into Light',
    fontSize:'20px',
    color: theme.palette.error.contrastText,
  }
}));

const Receta = ({ receta }) => {
  const { setIdReceta, recetaModal } = useContext(ModalContext);

  const styles = useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => setModal(!modal);

  const ingrediente = [];
  const listaIngredientes = () => {
    for (let i = 1; i < 16; i++) {
      if (recetaModal[`strIngredient${i}`] === null || recetaModal[`strIngredient${i}`] === '') {
        break;
      }
      ingrediente.push(
        recetaModal[`strMeasure${i}`] + " — " + recetaModal[`strIngredient${i}`]
      );
    }
    return ingrediente;
  };
  listaIngredientes();

  const body = (
    <div className={styles.modal}>
      <h2 className={styles.title}>{recetaModal.strDrink}</h2>
      <span>
        <b>Ingredients:</b>
      </span>
      {ingrediente.map((item, i) => (
        <div key={item + i}>{item}</div>
      ))}
      <div>
        <b>Glass: </b>
        {recetaModal.strGlass}
      </div>
      <div>
        <b>Instructions: </b>
        {recetaModal.strInstructions}
      </div>
      <div className={styles.container}>
        <Button onClick={abrirCerrarModal} className={styles.btn}>
          Cerrar
        </Button>
      </div>
    </div>
  );

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header fs-5 text">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={receta.strDrink}
        />
        <div className="card-body d-grid gap-2">
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={() => {
              abrirCerrarModal();
              setIdReceta(receta.idDrink);
            }}
          >
            Ver Receta
          </button>
        </div>
      </div>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
    </div>
  );
};

export default Receta;
