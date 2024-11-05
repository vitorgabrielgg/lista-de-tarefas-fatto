"use client";

import { useFormModel } from "./form.model";
import { FormView } from "./form.view";

export const Formulario = () => {
  const formModel = useFormModel();

  return <FormView {...formModel} />;
};
