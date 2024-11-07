import { TarefasRequestService } from "@/services/tarefas";
import { useTarefasStore } from "@/store/useTarefasStore";
import { useCallback } from "react";

export const useListaTarefas = () => {
  const { tarefas, setTarefas } = useTarefasStore();

  const listTarefas = useCallback(async () => {
    const res = await TarefasRequestService.getTarefas();
    setTarefas(res);
  }, [setTarefas]);

  return {
    tarefas,
    listTarefas,
  };
};
