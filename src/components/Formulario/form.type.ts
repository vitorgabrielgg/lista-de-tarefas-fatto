import { z } from "zod";
import { SchemaTarefa } from "./form.schema";

export type SchemaTarefaType = z.infer<typeof SchemaTarefa>;
