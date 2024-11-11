import { NextRequest, NextResponse } from "next/server";
import { TarefasService } from "./service";
import { IParams } from "@/@types";

const tarefasService = new TarefasService();

class TarefasController {
  async create(req: NextRequest) {
    const data = await req.json();
    const response = await tarefasService.create(data);
    return NextResponse.json(response);
  }

  async getAll() {
    const response = await tarefasService.getAll();

    return NextResponse.json(response);
  }

  async deleteTarefa(req: NextRequest, { params }: IParams) {
    const { id } = await params;

    await tarefasService.deleteTask(Number(id));

    return NextResponse.json("");
  }
}

export { TarefasController };
