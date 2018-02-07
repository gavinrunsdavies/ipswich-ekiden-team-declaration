import { Runner } from './runner';

export class Team {
  id: number;
  name: string;
  category: TeamCategory;
  captainId: number;
  clubId: number;
  complete: boolean;
  members: Runner[];
}

enum TeamCategory {MensOpen, LadiesOpen, MaleVet, LadiesVet, SuperVet, Mixed, Over60, Over70, Unaffiliated}