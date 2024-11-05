import { z } from "zod";

export const SchemaTarefa = z.object({
  nomeTarefa: z.string().min(1, "Por favor, informe o nome da sua tarefa"),
  custoTarefa: z.string().min(1, "Por favor, informe o custo da sua tarefa"),
  dataLimiteTarefa: z
    .string()
    .min(1, "Por favor, informe a data limite da sua tarefa")
    .date("Data inválida")
    .refine((val) => new Date(val) > new Date(Date.now()), {
      message: "Insira uma data posterior à data atual",
    }),
});
