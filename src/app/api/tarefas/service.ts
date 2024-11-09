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
}

export { TarefasService };
