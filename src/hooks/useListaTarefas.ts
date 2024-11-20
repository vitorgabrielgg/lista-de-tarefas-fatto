import { ITarefa } from "@/@types";
import { TarefasRequestService } from "@/services/tarefas";
import { useTarefasStore } from "@/store/useTarefasStore";
import { useCallback } from "react";
import { useToast } from "./use-toast";

export const useListaTarefas = () => {
  const {
    tarefas,
    addTarefas,
    changeOrdemApresentacaoTarefa,
    deleteTarefa,
    setTarefas,
    updateTarefa,
  } = useTarefasStore();

  const { handleToast } = useToast();

  const listTarefas = useCallback(async () => {
    const res = await TarefasRequestService.getTarefas();
    setTarefas(res);
  }, [setTarefas]);

  const createTarefa = async (data: ITarefa) => {
    const res = await TarefasRequestService.postTarefa(data);

    if (res.error) {
      handleToast("error", res.error);
    } else {
      addTarefas(res);
    }
  };

  const removeTarefa = async (id: string) => {
    await TarefasRequestService.deleteTarefa(id);
    deleteTarefa(id);
  };

  const editTarefa = async (id: string, data: ITarefa) => {
    await TarefasRequestService.updateTarefa(id, data);

    if (!tarefas.filter((tarefa) => tarefa.nome === data.nome).length) {
      updateTarefa(id, data);
    }
  };

  const alterOrdemApresentacaoTarefa = async (
    id: string,
    ordemApresentacao: number
  ) => {
    changeOrdemApresentacaoTarefa(id, ordemApresentacao);

    await TarefasRequestService.changeOrdemApresentacaoTarefa(
      id,
      ordemApresentacao
    );
  };

  return {
    tarefas,
    alterOrdemApresentacaoTarefa,
    createTarefa,
    editTarefa,
    listTarefas,
    removeTarefa,
  };
};
