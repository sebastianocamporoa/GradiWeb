import React from "react";

const List = ({ todos = [], onDeleteTodo }) => {

  const maskString = (str) => {
    return str.split(" ")[3];
  }

  return (
    <>
      <br />
      <div className="table-container">
        <h2 className="heading">Lista de tarjetas guardadas</h2>
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Nombre</th>
              <th>Numero</th>
              <th>Fecha de expiración</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => {
              return (
                <tr key={item.id}>
                  {/* <td data-label="ID">{item.id}</td> */}
                  <td data-label="Nombre">{item.name}</td>
                  <td data-label="Número">**** **** **** {maskString(item.card_number)}</td>
                  <td data-label="Fecha de expiración">{item.expiry}</td>
                  <td data-label="Eliminar" className="btn-delete">
                    <button onClick={() => onDeleteTodo(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
