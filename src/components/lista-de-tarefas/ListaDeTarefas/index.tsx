"use client";

import { useListaTarefas } from "@/hooks/useListaTarefas";
import { useEffect, useState } from "react";
import { TarefaItem } from "../TarefaItem";

export const ListaDeTarefas = () => {
  const { tarefas, listTarefas } = useListaTarefas();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listTarefas();
    setLoading(false);
  }, [listTarefas]);

  const tarefasOrdenadas = tarefas.sort(
    (a, b) => a.ordemApresentacao - b.ordemApresentacao
  );

  return (
    <section className="flex flex-col gap-4 px-5">
      {loading ? (
        "Loading"
      ) : (
        <>
          {tarefasOrdenadas.map((tarefa) => (
            <TarefaItem key={tarefa.id} {...tarefa} />
          ))}
        </>
      )}
    </section>
  );
};
