import { NextRequest, NextResponse } from "next/server";
import { TarefasService } from "./service";

const tarefasService = new TarefasService();

class TarefasController {
  async create(req: NextRequest) {
    const data = await req.json();
    const response = await tarefasService.create(data);
    return NextResponse.json(response);
  }
}

export { TarefasController };
