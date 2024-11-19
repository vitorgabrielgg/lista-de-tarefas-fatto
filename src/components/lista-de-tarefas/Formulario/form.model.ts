"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaTarefa } from "./form.schema";
import { SchemaTarefaType } from "./form.type";
import { useForm } from "react-hook-form";
import { useListaTarefas } from "@/hooks/useListaTarefas";
import { ITarefa } from "@/@types";

export const useFormModel = () => {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForm<SchemaTarefaType>({
    resolver: zodResolver(SchemaTarefa),
  });

  const { tarefas, createTarefa } = useListaTarefas();

  const handleCreateTarefa = (data: SchemaTarefaType) => {
    const dataTarefa: ITarefa = {
      nome: data.nomeTarefa,
      custo: Number(data.custoTarefa),
      dataLimite: new Date(data.dataLimiteTarefa),
      ordemApresentacao: !tarefas.length
        ? 1
        : tarefas[tarefas.length - 1].ordemApresentacao + 1,
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
