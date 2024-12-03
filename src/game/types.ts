export type GenderType =
  | "Action"
  | "Shooter"
  | "RPG"
  | "Adventure"
  | "Simulation"
  | "Horror"
  | "Sports"
  | "Puzzle";

type RateGrade = 0 | 1 | 2 | 3 | 4 | 5;

export interface Game {
  _id: string;
  name: string;
  price: number;
  isFree: boolean;
  rate: RateGrade;
  description: string;
  developer: string;
  date: Date;
  genders: GenderType[];
}
