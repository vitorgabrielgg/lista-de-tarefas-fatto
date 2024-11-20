import { Dispatch, SetStateAction } from "react";
import { InputField } from "../InputField";
import { useFormModel } from "./form.model";
import { SchemaTarefaType } from "./form.type";
import { useListaTarefas } from "@/hooks/useListaTarefas";

type FormViewProps = ReturnType<typeof useFormModel> & {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  id: string;
};

export const FormEditarTarefaView = ({
  errors,
  id,
  handleSubmit,
  register,
  reset,
  setOpenDialog,
}: FormViewProps) => {
  const { tarefas, editTarefa } = useListaTarefas();

  const tarefa = tarefas.filter((tarefa) => tarefa.id === id)[0];

  const handleUpdateTarefa = (data: SchemaTarefaType) => {
    const dataTarefa = {
      nome: data.nomeTarefa,
      custo: Number(data.custoTarefa),
      dataLimite: new Date(data.dataLimiteTarefa),
    };

    if (
      tarefa.nome !== dataTarefa.nome ||
      tarefa.custo !== dataTarefa.custo ||
      new Date(tarefa.dataLimite).toISOString() !==
        new Date(dataTarefa.dataLimite).toISOString()
    ) {
      editTarefa(id, dataTarefa);
    }

    setOpenDialog(false);
    reset();
  };

  return (
    <form
      action=""
      id="formEditarTarefa"
      onSubmit={handleSubmit(handleUpdateTarefa)}
      className="flex flex-col gap-4"
    >
      <InputField
        label="Nome da tarefa:"
        name="nomeTarefa"
        placeholder="Digite o nome da tarefa"
        type="text"
        register={register}
        error={errors.nomeTarefa}
        value={tarefa.nome}
      />
      <InputField
        label="Custo da tarefa:"
        name="custoTarefa"
        placeholder="Digite o custo da tarefa"
        type="number"
        register={register}
        error={errors.custoTarefa}
        value={tarefa.custo}
      />

      <InputField
        label="Data limite da tarefa:"
        name="dataLimiteTarefa"
        type="date"
        register={register}
        error={errors.dataLimiteTarefa}
        value={tarefa.dataLimite.toString().split("T")[0]}
      />
    </form>
  );
};
