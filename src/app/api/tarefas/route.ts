import { NextRequest } from "next/server";
import { TarefasController } from "./controller";

const tarefasController = new TarefasController();

export async function POST(req: NextRequest) {
  return tarefasController.create(req);
}
