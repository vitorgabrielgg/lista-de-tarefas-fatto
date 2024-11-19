import { ITarefa } from "@/@types";
import { TarefasRepository } from "./repository";
import prisma from "../../../../db";

const tarefasRepository = new TarefasRepository();

class TarefasService {
  async create(data: ITarefa) {
    const tarefaExistente = await prisma.tarefa.findMany({
      where: {
        nome: data.nome,
      },
    });

    if (tarefaExistente.length > 0) {
      throw new Error("Você não pode criar duas tarefas com o mesmo nome");
    }

    return tarefasRepository.create(data);
  }

  async getAll() {
    return tarefasRepository.getAll();
  }

  async deleteTask(id: string) {
    return tarefasRepository.deleteTarefa(id);
  }

  async updateTarefa(id: string, data: ITarefa) {
    const tarefaExistente = await prisma.tarefa.findFirst({
      where: {
        nome: data.nome,
      },
    });

    if (tarefaExistente?.id !== id && tarefaExistente?.nome === data.nome) {
      throw new Error("Esse nome já está sendo usado em outra tarefa");
    }

    return tarefasRepository.updateTarefa(id, data);
  }

  async changeOrdemApresentacaoTarefa(id: string, ordemApresentacao: number) {
    return tarefasRepository.changeOrdemApresentacaoTarefa(
      id,
      ordemApresentacao
    );
  }
}

export { TarefasService };
