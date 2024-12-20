import { InputField } from "../InputField";
import { Button } from "@/components/ui/button";
import { useFormModel } from "./form.model";

type FormViewProps = ReturnType<typeof useFormModel>;

export const FormIncluirTarefaView = ({
  errors,
  handleSubmit,
  handleCreateTarefa,
  register,
}: FormViewProps) => {
  return (
    <section className="pb-6 px-5 border-b border-raw_umber">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleCreateTarefa)}
      >
        <InputField
          label="Nome da tarefa:"
          name="nomeTarefa"
          placeholder="Digite o nome da tarefa"
          type="text"
          register={register}
          error={errors.nomeTarefa}
        />
        <InputField
          label="Custo da tarefa:"
          name="custoTarefa"
          placeholder="Digite o custo da tarefa"
          type="number"
          register={register}
          error={errors.custoTarefa}
        />

        <InputField
          label="Data limite da tarefa:"
          name="dataLimiteTarefa"
          type="date"
          register={register}
          error={errors.dataLimiteTarefa}
        />

        <Button className="bg-silver text-jet font-regular min-[500px]:w-5/12 hover:bg-jet hover:text-silver transition-colors">
          Incluir tarefa
        </Button>
      </form>
    </section>
  );
};
