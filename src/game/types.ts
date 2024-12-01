export type GendersTypes =
  | "Action"
  | "Shooter"
  | "RPG"
  | "Adventure"
  | "Simulation"
  | "Horror"
  | "Sports"
  | "Puzzle";

export interface Game {
  id: string;
  name: string;
  price: number;
  isFree: boolean;
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  description: string;
  developer: string;
  date: Date;
  genders: GendersTypes[];
}
