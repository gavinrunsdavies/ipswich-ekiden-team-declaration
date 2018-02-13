export class Runner {
  id: number;
  name: string;
  ageCategoryCode: AgeCategoryCode;
  sex: Sex;
  leg: number;
}

export enum AgeCategoryCode {Open = 1, V40 = 2, V50 = 3, V60 = 4, V70 = 5, V35 = 6}

export enum Sex {Male = 1, Female = 2}