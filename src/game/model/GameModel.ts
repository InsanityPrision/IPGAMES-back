import mongoose, { Schema } from "mongoose";
import { type GendersTypes, type Game } from "../types";

export const gameSchema = new Schema<Omit<Game, "id">>({
  name: String,
  price: String,
  isFree: Boolean,
  rate: String,
  description: String,
  developer: String,
  date: String,
  genders: Array<GendersTypes>,
});

const GameModel = mongoose.model("Game", gameSchema, "games");

export default GameModel;
