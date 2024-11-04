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

    const tarefasData: ITarefa = {
      ...data,
      dataLimite: new Date(data.dataLimite),
    };

    return tarefasRepository.create(tarefasData);
  }

  async getAll() {
    return tarefasRepository.getAll();
  }
}

export { TarefasService };
