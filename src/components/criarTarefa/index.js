import React, { useState } from "react";

import "./style.scss";

const AdicionarTarefa = (props) => {
  const initialFormState = {
    id: null,
    tarefa: "",
    descricao: "",
  };
  const [toDo, setToDo] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setToDo({ ...toDo, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!toDo.tarefa) return alert("Preencha a tarefa a ser adicionada");

        props.adicionarTarefa(toDo);
        setToDo(initialFormState);
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
      <button>Adicionar nova tarefa</button>
    </form>
  );
};

export default AdicionarTarefa;
