import { IParams } from "@/@types";
import { TarefasController } from "../controller";
import { NextRequest } from "next/server";

const tarefasController = new TarefasController();

export async function DELETE(req: NextRequest, { params }: IParams) {
  return tarefasController.deleteTarefa(req, { params });
}
