-- CreateTable
CREATE TABLE "Tarefa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "custo" DOUBLE PRECISION NOT NULL,
    "dataLimite" TIMESTAMP(3) NOT NULL,
    "ordemApresentacao" SERIAL NOT NULL,

    CONSTRAINT "Tarefa_pkey" PRIMARY KEY ("id")
);
