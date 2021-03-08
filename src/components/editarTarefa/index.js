import React, { useState, useEffect } from "react";
import "../criarTarefa/style.scss";

const EditarTarefa = (props) => {
  const [toDo, setToDo] = useState(props.tarefaAtual);

  useEffect(() => {
    setToDo(props.tarefaAtual);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setToDo({ ...toDo, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!toDo.tarefa) return alert("Não deixe o campo 'Tarefa' vazio");

        props.atualizarTarefa(toDo.id, toDo);
      }}
    >
      <div className="boxInputs">
        <label className="labelTarefa">Tarefa</label>
        <input
          type="text"
          name="tarefa"
          value={toDo.tarefa}
          onChange={handleInputChange}
        />
      </div>
      <div className="boxInputs">
        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          value={toDo.descricao}
          onChange={handleInputChange}
        />
      </div>
      <button>Atualizar tarefa</button>
      <button
        onClick={() => props.setEdicao(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditarTarefa;
