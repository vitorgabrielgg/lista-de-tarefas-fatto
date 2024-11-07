export class TarefasRequestService {
  static async getTarefas() {
    const res = await fetch("api/tarefas");
    const data = await res.json();

    return data;
  }
}
