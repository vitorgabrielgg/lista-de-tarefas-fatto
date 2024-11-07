import { ITarefaItem } from "@/@types";
import { create } from "zustand";

type TarefasStore = {
  tarefas: ITarefaItem[];
  setTarefas: (tarefas: ITarefaItem[]) => void;
};

export const useTarefasStore = create<TarefasStore>((set) => ({
  tarefas: [],
  setTarefas: (tarefas) => set(() => ({ tarefas })),
}));
