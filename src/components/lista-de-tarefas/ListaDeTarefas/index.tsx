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

  return (
    <section className="flex flex-col gap-4 px-5">
      {loading ? (
        "Loading"
      ) : (
        <>
          {tarefas.map((tarefa) => (
            <TarefaItem key={tarefa.id} {...tarefa} />
          ))}
        </>
      )}
    </section>
  );
};
