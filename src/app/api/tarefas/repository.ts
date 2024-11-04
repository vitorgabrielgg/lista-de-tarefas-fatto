import { ITarefa } from "@/@types";
import prisma from "../../../../db";

class TarefasRepository {
  async create(data: ITarefa) {
    const tarefa = prisma.tarefa.create({
      data,
    });

    return tarefa;
  }

  async getAll() {
    const tarefas = prisma.tarefa.findMany()

    return tarefas
  }
}

export { TarefasRepository };
