import { ITarefa } from "@/@types";
import prisma from "../../../../db";

class TarefasRepository {
  async create(data: ITarefa) {
    const tarefa = prisma.tarefa.create({
      data,
    });

    return tarefa;
  }
}

export { TarefasRepository };
