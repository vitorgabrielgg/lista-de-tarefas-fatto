import { z } from "zod";

export const SchemaTarefa = z.object({
  nomeTarefa: z.string().min(1, "Por favor, informe o nome da tarefa"),
  custoTarefa: z.string().min(1, "Por favor, informe o custo da tarefa"),
  dataLimiteTarefa: z
    .string()
    .min(1, "Por favor, informe a data limite da tarefa")
    .date("Data inválida, informe outra data")
    .refine((val) => new Date(val) > new Date(Date.now()), {
      message: "Insira uma data posterior à data atual",
    }),
});
