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
    <section className="px-5">
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex flex-col gap-4">
          {tarefasOrdenadas.map((tarefa, index) => (
            <TarefaItem key={tarefa.id} {...tarefa} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};
