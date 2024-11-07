export interface ITarefa {
  nome: string;
  custo: number;
  dataLimite: Date;
}

export interface ITarefaItem {
  id: number;
  nome: string;
  custo: number;
  dataLimite: Date;
  ordemApresentacao: number;
}
