import { ITarefaItem } from "@/@types";
import { DeleteTarefaDialog } from "../Dialogs/DeleteTarefaDialog";
import { EditarTarefaDialog } from "../Dialogs/EditarTarefaDialog";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { ActionButton } from "../ActionButton";
import { useListaTarefas } from "@/hooks/useListaTarefas";

type TarefaItemProps = ITarefaItem & {
  index: number;
};

export const TarefaItem = ({
  custo,
  dataLimite,
  id,
  nome,
  ordemApresentacao,
  index,
}: TarefaItemProps) => {
  const { tarefas, alterOrdemApresentacaoTarefa } = useListaTarefas();

  const moveDownTarefa = async () => {
    const proximaTarefa = tarefas[index + 1];

    // Trocando ordem de apresentação da tarefa requerida
    await alterOrdemApresentacaoTarefa(id, proximaTarefa.ordemApresentacao);

    // Trocando ordem de apresentação da próxima tarefa
    await alterOrdemApresentacaoTarefa(proximaTarefa.id, ordemApresentacao);
  };

  const moveUpTarefa = async () => {
    const tarefaAnterior = tarefas[index - 1];

    // Trocando ordem de apresentação da tarefa anterior
    await alterOrdemApresentacaoTarefa(tarefaAnterior.id, ordemApresentacao);

    // Trocando ordem de apresentação da tarefa requerida
    await alterOrdemApresentacaoTarefa(id, tarefaAnterior.ordemApresentacao);
  };

  return (
    <div
      className={` ${
        custo >= 1000 ? "bg-silver text-jet" : "bg-jet text-silver"
      } rounded px-5 py-3 text-sm min-[450px]:text-base flex justify-between items-center`}
    >
      <div className="flex items-center gap-3 min-[450px]:gap-5">
        <div className="flex flex-col gap-4 min-[450px]:gap-5 w-4 min-[450px]:w-5">
          {index !== 0 && (
            <ActionButton
              onClick={() => moveUpTarefa()}
              Icon={ArrowUpIcon}
              className="w-4 h-4 min-[450px]:w-5 min-[450px]:h-5"
            />
          )}

          {index !== tarefas.length - 1 && (
            <ActionButton
              onClick={() => moveDownTarefa()}
              Icon={ArrowDownIcon}
              className="w-4 h-4 min-[450px]:w-5 min-[450px]:h-5"
            />
          )}
        </div>

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
      </div>

      <div className="flex items-center gap-2">
        <DeleteTarefaDialog id={id} />
        <EditarTarefaDialog id={id} />
      </div>
    </div>
  );
};
