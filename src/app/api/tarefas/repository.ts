import { ITarefa } from "@/@types";
import prisma from "../../../../db";

class TarefasRepository {
  async create(data: ITarefa) {
    const tarefa = await prisma.tarefa.create({
      data: {
        ...data,
        ordemApresentacao: data.ordemApresentacao!,
      },
    });

    return tarefa;
  }

  async getAll() {
    const tarefas = await prisma.tarefa.findMany();

    return tarefas;
  }

  async deleteTarefa(id: string) {
    await prisma.tarefa.delete({
      where: {
        id,
      },
    });
  }

  async updateTarefa(id: string, data: ITarefa) {
    await prisma.tarefa.update({
      where: {
        id,
      },
      data,
    });
  }

  async changeOrdemApresentacaoTarefa(id: string, ordemApresentacao: number) {
    await prisma.tarefa.update({
      where: {
        id,
      },
      data: {
        ordemApresentacao,
      },
    });
  }
}

export { TarefasRepository };
