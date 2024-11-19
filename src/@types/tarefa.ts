export interface ITarefa {
  nome: string;
  custo: number;
  dataLimite: Date;
  ordemApresentacao?: number;
}

export interface ITarefaItem {
  id: string;
  nome: string;
  custo: number;
  dataLimite: Date;
  ordemApresentacao: number;
}
