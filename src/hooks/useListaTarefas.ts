import { ITarefa } from "@/@types";
import { TarefasRequestService } from "@/services/tarefas";
import { useTarefasStore } from "@/store/useTarefasStore";
import { useCallback } from "react";

export const useListaTarefas = () => {
  const { tarefas, addTarefas, deleteTarefa, setTarefas, updateTarefa } =
    useTarefasStore();

  const listTarefas = useCallback(async () => {
    const res = await TarefasRequestService.getTarefas();
    setTarefas(res);
  }, [setTarefas]);

  const createTarefa = async (data: ITarefa) => {
    const res = await TarefasRequestService.postTarefa(data);
    addTarefas(res);
  };

  const removeTarefa = async (id: number) => {
    await TarefasRequestService.deleteTarefa(id);
    deleteTarefa(id);
  };

  const editTarefa = async (id: number, data: ITarefa) => {
    await TarefasRequestService.updateTarefa(id, data);

    if (!tarefas.filter((tarefa) => tarefa.nome === data.nome).length) {
      updateTarefa(id, data);
    }
  };

  return {
    tarefas,
    createTarefa,
    editTarefa,
    listTarefas,
    removeTarefa,
  };
};
