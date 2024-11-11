import { ITarefa } from "@/@types";
import prisma from "../../../../db";

class TarefasRepository {
  async create(data: ITarefa) {
    const tarefa = await prisma.tarefa.create({
      data,
    });

    return tarefa;
  }

  async getAll() {
    const tarefas = await prisma.tarefa.findMany();

    return tarefas;
  }

  async deleteTarefa(id: number) {
    await prisma.tarefa.delete({
      where: {
        id,
      },
    });
  }
}

export { TarefasRepository };
