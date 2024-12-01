import mongoose, { Schema } from "mongoose";
import { type Game } from "../types";

const gameSchema = new Schema<Partial<Game>>({
  name: String,
  price: String,
  isFree: Boolean,
  rate: String,
  description: String,
  developer: String,
  date: String,
  genders: Array,
});

const GameModel = mongoose.model("Game", gameSchema, "games");

export default GameModel;
