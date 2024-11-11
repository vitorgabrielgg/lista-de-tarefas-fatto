import { ITarefaItem } from "@/@types";
import { create } from "zustand";

type TarefasStore = {
  tarefas: ITarefaItem[];
  setTarefas: (tarefas: ITarefaItem[]) => void;
  addTarefas: (tarefa: ITarefaItem) => void;
  deleteTarefa: (id: number) => void;
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
}));
