import { IParams } from "@/@types";
import { TarefasController } from "../controller";
import { NextRequest } from "next/server";

const tarefasController = new TarefasController();

export async function DELETE(req: NextRequest, { params }: IParams) {
  return tarefasController.deleteTarefa(req, { params });
}

export async function PUT(req: NextRequest, { params }: IParams) {
  return tarefasController.updateTarefa(req, { params });
}

export async function PATCH(req: NextRequest, { params }: IParams) {
  return tarefasController.changeOrdemApresentacaoTarefa(req, { params });
}
