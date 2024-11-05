import React from "react";
import { InputField } from "../InputField";
import { Button } from "@/components/ui/button";

export const Formulario = () => {
  return (
    <form className="flex flex-col gap-4">
      <InputField
        label="Nome da tarefa:"
        name="nomeTarefa"
        placeholder="Digite o nome da tarefa"
        type="text"
      />
      <InputField
        label="Custo da tarefa:"
        name="custoTarefa"
        placeholder="Digite o custo da tarefa"
        type="number"
      />

      <div className="flex flex-col gap-4 min-[500px]:flex-row min-[500px]:justify-between min-[500px]:items-end">
        <InputField
          label="Data limite da tarefa:"
          name="dataLimiteTarefa"
          type="date"
        />

        <Button className="bg-silver text-jet font-regular min-[500px]:w-5/12 hover:bg-jet hover:text-silver transition-colors">
          Criar tarefa
        </Button>
      </div>
    </form>
  );
};
