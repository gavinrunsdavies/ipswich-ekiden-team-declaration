export class Runner {
  id: number;
  name: string;
  ageCategory: AgeCategoryCode;
  gender: Gender;
  leg: number;
}

export enum AgeCategoryCode {Open = 'Open', V35 = 'V35', V40 = 'V40', V45 = 'V45', V50 = 'V50', V60 = 'V60', V70 = 'V70' }

export enum Gender {Male = 'Male', Female = 'Female'}
