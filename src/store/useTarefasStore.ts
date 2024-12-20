import { ITarefa, ITarefaItem } from "@/@types";
import { create } from "zustand";

type TarefasStore = {
  tarefas: ITarefaItem[];
  setTarefas: (tarefas: ITarefaItem[]) => void;
  addTarefas: (tarefa: ITarefaItem) => void;
  deleteTarefa: (id: string) => void;
  updateTarefa: (id: string, tarefa: ITarefa) => void;
  changeOrdemApresentacaoTarefa: (
    id: string,
    ordemApresentacao: number
  ) => void;
};

export const useTarefasStore = create<TarefasStore>((set) => ({
  tarefas: [],
  setTarefas: (tarefas) => set(() => ({ tarefas })),
  addTarefas: (tarefa) =>
    set((state) => ({ tarefas: [...state.tarefas, tarefa] })),
  deleteTarefa: (id) =>
    set((state) => ({
      tarefas: state.tarefas.filter((tarefa) => tarefa.id != id),
    })),
  updateTarefa: (id, tarefa) =>
    set((state) => ({
      tarefas: state.tarefas.map((tarefaState) => {
        if (tarefaState.id === id) {
          return {
            ...tarefaState,
            ...tarefa,
          };
        } else {
          return {
            ...tarefaState,
          };
        }
      }),
    })),
  changeOrdemApresentacaoTarefa: (id, ordemApresentacao) =>
    set((state) => ({
      tarefas: state.tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return {
            ...tarefa,
            ordemApresentacao,
          };
        } else {
          return tarefa;
        }
      }),
    })),
}));
