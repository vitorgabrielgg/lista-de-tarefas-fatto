import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ActionButton } from "../../ActionButton";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { FormEditarTarefaView } from "../../Formulario/formEditarTarefa.view";
import { useFormModel } from "../../Formulario/form.model";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EditarTarefaDialogProps {
  id: string;
}

export const EditarTarefaDialog = ({ id }: EditarTarefaDialogProps) => {
  const formModel = useFormModel();

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger className="h-5 min-[450px]:h-6">
        <ActionButton
          Icon={Pencil2Icon}
          className="w-5 h-5 min-[450px]:w-6 min-[450px]:h-6"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-lion border-none">
        <DialogHeader>
          <DialogTitle className="text-jet font-bold">
            Editar tarefa
          </DialogTitle>
        </DialogHeader>
        <FormEditarTarefaView
          {...formModel}
          setOpenDialog={setOpenDialog}
          id={id}
        />
        <DialogFooter className="gap-4 min-[640px]:gap-2">
          <DialogClose className="bg-silver text-jet rounded min-[640px]:px-4 py-2 text-sm font-medium hover:bg-white transition-colors">
            Cancelar
          </DialogClose>
          <Button
            type="submit"
            form="formEditarTarefa"
            className="bg-jet text-silver"
          >
            {formModel.isSubmitting ? "Loading..." : "Salvar Mudanças"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
