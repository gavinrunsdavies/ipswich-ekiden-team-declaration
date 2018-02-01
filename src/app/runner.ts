export class Runner {
  id: number;
  name: string;
  ageCategoryCode: AgeCategoryCode;
  sex: Sex
}

export enum AgeCategoryCode {Open, V40, V50, V60, V70, V35}

export enum Sex {Male, Female}