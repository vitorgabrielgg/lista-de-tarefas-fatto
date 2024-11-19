import { ITarefa } from "@/@types";

export class TarefasRequestService {
  static async getTarefas() {
    const res = await fetch("api/tarefas");
    const data = await res.json();

    return data;
  }

  static async postTarefa(params: ITarefa) {
    const res = await fetch("api/tarefas", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await res.json();

    return data;
  }

  static async deleteTarefa(id: string) {
    await fetch(`api/tarefas/${id}`, {
      method: "DELETE",
    });
  }

  static async updateTarefa(id: string, params: ITarefa) {
    await fetch(`api/tarefas/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
  }

  static async changeOrdemApresentacaoTarefa(
    id: string,
    ordemApresentacao: number
  ) {
    const res = await fetch(`api/tarefas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ordemApresentacao }),
    });

    const data = await res.json();

    return data;
  }
}
