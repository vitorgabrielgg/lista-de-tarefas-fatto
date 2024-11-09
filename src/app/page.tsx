import { Formulario, ListaDeTarefas } from "@/components";

export default function Home() {
  return (
    <main className="bg-lion mx-5 my-10 rounded-md max-w-lg min-[552px]:mx-auto">
      <div className="border-b border-raw_umber py-2">
        <h1 className="text-jet font-bold text-center text-3xl border-b-orange-50">
          Lista de tarefas
        </h1>
      </div>
      <div className="py-6 space-y-6">
        <Formulario />
        <ListaDeTarefas />
      </div>
    </main>
  );
}
