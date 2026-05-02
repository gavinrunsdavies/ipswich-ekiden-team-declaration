export class Runner {
  id!: number;
  name!: string;
  ageCategory!: AgeCategoryCode;
  gender!: Gender;
  leg!: number;
  medicalInfo?: string;
  dateOfBirth?: string;
}

export enum AgeCategoryCode {Open = 'Open', V35 = 'V35', V40 = 'V40', V45 = 'V45', V50 = 'V50', V60 = 'V60', V70 = 'V70' }

export enum JuniorAgeCategoryCode { U12 = 'U12', U14 = 'U14', U16 = 'U16' }

export enum Gender {Male = 'Male', Female = 'Female'}
