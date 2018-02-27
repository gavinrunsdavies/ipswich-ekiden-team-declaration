import { Runner } from './runner';

export class Team {
  id: number;
  name: string;
  category: string; //TeamCategory;
  captainId: number;
  clubId: number;
  clubName: string;
  complete: boolean;
  runners: Runner[];
}

export enum TeamCategory {MensOpen = 1, LadiesOpen = 2, MensVet = 3, LadiesVet = 4, MensSuperVet = 5, LadiesSuperVet = 6, Mixed = 7, Over60 = 8, Over70 = 9, Unaffiliated = 0}