import { ITarefaItem } from "@/@types";
import { DeleteTarefaDialog } from "../Dialogs/DeleteTarefaDialog";
import { EditarTarefaDialog } from "../Dialogs/EditarTarefaDialog";

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

      <div className="flex items-center gap-2">
        <DeleteTarefaDialog id={id} />
        <EditarTarefaDialog id={id} />
      </div>
    </div>
  );
};
