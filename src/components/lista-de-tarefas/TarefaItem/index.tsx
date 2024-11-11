import { ITarefaItem } from "@/@types";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { ActionButton } from "../ActionButton";
import { DeleteTarefaDialog } from "../Dialogs/DeleteTarefaDialog";

export const TarefaItem = ({
  custo,
  dataLimite,
  id,
  nome,
  ordemApresentacao,
}: ITarefaItem) => {
  return (
    <div
      className={` ${
        custo >= 1000 ? "bg-silver text-jet" : "bg-jet text-silver"
      } rounded px-5 py-3 text-sm min-[450px]:text-base flex justify-between items-center`}
    >
      <div className="flex flex-col gap-1">
        <p>
          <strong>Tarefa: </strong>
          {nome}
        </p>
        <p>
          <strong>Custo: </strong>
          {custo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          <strong>Data limite: </strong>
          {new Date(dataLimite).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })}
        </p>
      </div>

      <div className="flex gap-2">
        <DeleteTarefaDialog id={id} />
        <ActionButton
          Icon={Pencil2Icon}
          className="w-5 h-5 min-[450px]:w-6 min-[450px]:h-6"
        />
      </div>
    </div>
  );
};
