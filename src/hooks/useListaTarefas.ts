import { ITarefa } from "@/@types";
import { TarefasRequestService } from "@/services/tarefas";
import { useTarefasStore } from "@/store/useTarefasStore";
import { useCallback } from "react";

export const useListaTarefas = () => {
  const { tarefas, addTarefas, setTarefas } = useTarefasStore();

  const listTarefas = useCallback(async () => {
    const res = await TarefasRequestService.getTarefas();
    setTarefas(res);
  }, [setTarefas]);

  const createTarefa = async (data: ITarefa) => {
    const res = await TarefasRequestService.postTarefa(data);
    addTarefas(res);
  };

  return {
    tarefas,
    createTarefa,
    listTarefas,
  };
};
