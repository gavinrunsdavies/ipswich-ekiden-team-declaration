import { Runner } from './runner';

export class Team {
  id: number;
  name: string;
  category: TeamCategory;
  captainId: number;
  clubId: number;
  clubName: string;
  complete: boolean;
  members: Runner[];
}

export enum TeamCategory {MensOpen = 1, LadiesOpen = 2, MaleVet = 3, LadiesVet = 4, SuperVet = 5, Mixed = 6, Over60 = 7, Over70 = 8, Unaffiliated = 0}