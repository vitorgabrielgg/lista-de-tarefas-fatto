"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaTarefa } from "./form.schema";
import { SchemaTarefaType } from "./form.type";
import { useForm } from "react-hook-form";
import { useListaTarefas } from "@/hooks/useListaTarefas";

export const useFormModel = () => {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForm<SchemaTarefaType>({
    resolver: zodResolver(SchemaTarefa),
  });

  const { createTarefa } = useListaTarefas();

  const handleCreateTarefa = (data: SchemaTarefaType) => {
    const dataTarefa = {
      nome: data.nomeTarefa,
      custo: Number(data.custoTarefa),
      dataLimite: new Date(data.dataLimiteTarefa),
    };

    createTarefa(dataTarefa);
    reset();
  };

  return {
    errors,
    isSubmitting,
    handleSubmit,
    handleCreateTarefa,
    register,
    reset,
  };
};
