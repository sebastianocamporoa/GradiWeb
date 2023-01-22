import { useEffect, useReducer } from "react";
import "./App.css";
// import { motion } from "framer-motion";
import FormCards from "./components/FormCards";
// import Header from "./components/header/Header";
import { todoReducer } from "./todoReducer";
import List from "./components/List";
import Swal from "sweetalert2";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add card",
      payload: todo,
    };
    dispatch(action);
    Swal.fire({
      icon: "success",
      title: "Correcto",
      text: "Se ha agregado la información de la tarjeta",
      timer: 3000,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] remove",
      payload: id,
    });
    Swal.fire({
      icon: "success",
      title: "Correcto",
      text: "Se ha eliminado la información de la tarjeta",
      timer: 3000,
    });
  };

  return (
    <>
      {/* isn't Bootstrap, check App.css File */}
      <h1 style={{ fontFamily: "Poppins" }}>
        Ingresa los datos de tu tarjeta bancaria
      </h1>
      <br />
      <div className="content">
        <div className="col-12">
          <FormCards setHandleSubmit={handleNewTodo} />
        </div>
        <br />
        <div className="col-12">
          <List todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
      </div>
    </>
  );
};

export default App;
