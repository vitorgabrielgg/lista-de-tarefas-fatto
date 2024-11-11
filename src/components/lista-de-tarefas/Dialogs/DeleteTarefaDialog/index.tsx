import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ActionButton } from "../../ActionButton";
import { TrashIcon } from "@radix-ui/react-icons";
import { useListaTarefas } from "@/hooks/useListaTarefas";

interface DeleteTarefaDialogProps {
  id: number;
}

export const DeleteTarefaDialog = ({ id }: DeleteTarefaDialogProps) => {
  const { removeTarefa } = useListaTarefas();

  return (
    <AlertDialog>
      <AlertDialogTrigger className="h-6 min-[450px]:h-7">
        <ActionButton
          Icon={TrashIcon}
          className="w-6 h-6 min-[450px]:w-7 min-[450px]:h-7"
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-lion border-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-jet font-bold">
            Deletar tarefa
          </AlertDialogTitle>
          <AlertDialogDescription className="text-jet">
            Tem certeza de que deseja deletar esta tarefa? Esta ação não poderá
            ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-silver text-jet border-none">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-jet text-silver"
            onClick={() => removeTarefa(id)}
          >
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
