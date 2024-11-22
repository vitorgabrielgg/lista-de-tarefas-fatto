"use client";

import { useListaTarefas } from "@/hooks/useListaTarefas";
import { useEffect, useState } from "react";
import { TarefaItem } from "../TarefaItem";
import { Loading } from "../Loading";

export const ListaDeTarefas = () => {
  const { tarefas, listTarefas } = useListaTarefas();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTarefas() {
      await listTarefas();
      setLoading(false);
    }

    fetchTarefas();
  }, [listTarefas]);

  const tarefasOrdenadas = tarefas.sort(
    (a, b) => a.ordemApresentacao - b.ordemApresentacao
  );

  return (
    <section className="px-5">
      {loading ? (
        <Loading />
      ) : (
        <>
          {!tarefasOrdenadas.length ? (
            <p className="text-center text-jet font-medium">
              A lista de tarefas está vazia.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {tarefasOrdenadas.map((tarefa, index) => (
                <TarefaItem key={tarefa.id} {...tarefa} index={index} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};
