"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaTarefa } from "./form.schema";
import { SchemaTarefaType } from "./form.type";
import { useForm } from "react-hook-form";

export const useFormModel = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SchemaTarefaType>({
    resolver: zodResolver(SchemaTarefa),
  });

  const onSubmit = (data: SchemaTarefaType) => {
    console.log(data);
  };

  return {
    errors,
    handleSubmit,
    onSubmit,
    register,
  };
};
