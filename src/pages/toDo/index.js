import React, { useState, useEffect } from "react";
import Tarefas from "../../components/listaTarefas";
import EditarTarefa from "../../components/editarTarefa";
import AdicionarTarefa from "../../components/criarTarefa";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const ToDo = () => {
  const [toDo, setToDo] = useState([]);
  const [edicao, setEdicao] = useState(false);
  const formInicial = { id: null, tarefa: "", descricao: "" };
  const [tarefaAtual, setTarefaAtual] = useState(formInicial);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("tarefas"));

    storedArray != null && setToDo(storedArray);
  }, []);

  const adicionarTarefa = (tarefa) => {
    tarefa.id = toDo.length + 1;

    localStorage.setItem("tarefas", JSON.stringify([...toDo, tarefa]));

    setToDo([...toDo, tarefa]);
  };

  const deletarTarefa = (id) => {
    const data = JSON.parse(localStorage.getItem("tarefas")).filter(
      (item) => item.id !== id
    );
    localStorage.setItem("tarefas", JSON.stringify(data));

    setToDo(toDo.filter((user) => user.id !== id));
  };

  const editarLinha = (tarefa) => {
    setEdicao(true);

    setTarefaAtual({
      id: tarefa.id,
      tarefa: tarefa.tarefa,
      descricao: tarefa.descricao,
    });
  };

  const atualizarTarefa = (id, atualizarTarefa) => {
    setEdicao(false);

    const data = toDo.map((tarefa) =>
      tarefa.id === id ? atualizarTarefa : tarefa
    );

    console.log(data);
    localStorage.setItem("tarefas", JSON.stringify(data));

    setToDo(
      toDo.map((tarefa) => (tarefa.id === id ? atualizarTarefa : tarefa))
    );
  };

  return (
    <div className="container">
      <div className="titulo">
        <FontAwesomeIcon icon={faListUl} className="icon " size="2x" />
        <h1>ToDo List</h1>
      </div>
      <div className="lista">
        {edicao ? (
          <div>
            <h2>Edite uma tarefa</h2>
            <EditarTarefa
              setEdicao={setEdicao}
              tarefaAtual={tarefaAtual}
              atualizarTarefa={atualizarTarefa}
            />
          </div>
        ) : (
          <div>
            <h2>Adicione uma tarefa</h2>
            <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
          </div>
        )}
      </div>
      <div className="lista">
        <Tarefas
          toDo={toDo}
          deletarTarefa={deletarTarefa}
          editarLinha={editarLinha}
        />
      </div>
    </div>
  );
};

export default ToDo;
