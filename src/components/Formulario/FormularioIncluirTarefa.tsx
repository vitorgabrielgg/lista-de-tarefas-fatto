"use client";

import { useFormModel } from "./form.model";
import { FormIncluirTarefaView } from "./formIncluirTarefa.view";

export const FormularioIncluirTarefa = () => {
  const formModel = useFormModel();

  return <FormIncluirTarefaView {...formModel} />;
};
