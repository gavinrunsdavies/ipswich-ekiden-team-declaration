import { Runner } from './runner';

export class Team {
  id: number;
  name: string;
  category: string;
  captainId: number;
  clubId: number;
  clubName: string;
  complete: boolean;
  runners: Runner[];
  isShown: boolean; // internal only.
}
