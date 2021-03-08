import React from "react";

import "./style.scss";

const Tarefas = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.toDo.length > 0 ? (
          props.toDo.map((toDo) => (
            <tr key={toDo.id}>
              <td>{toDo.tarefa}</td>
              <td>
                {toDo.descricao === ""
                  ? "Nenhuma descrição para esta tarefa"
                  : toDo.descricao}
              </td>
              <td>
                <button
                  onClick={() => {
                    props.editarLinha(toDo);
                  }}
                  className="button muted-button"
                >
                  Editar
                </button>
                <button
                  onClick={() => props.deletarTarefa(toDo.id)}
                  className="button muted-button"
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Nenhuma tarefa</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tarefas;
