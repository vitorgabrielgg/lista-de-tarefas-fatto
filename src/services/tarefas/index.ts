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

  static async deleteTarefa(id: number) {
    await fetch(`api/tarefas/${id}`, {
      method: "DELETE",
    });
  }

  static async updateTarefa(id: number, params: ITarefa) {
    await fetch(`api/tarefas/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
  }
}
