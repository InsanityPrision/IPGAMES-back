import mongoose, { Schema } from "mongoose";
import { type Game } from "../types";

export const gameSchema = new Schema<Omit<Game, "_id">>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isFree: {
    type: Boolean,
    required: true,
  },
  rate: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  genders: {
    type: [String],
    enum: [
      "Action",
      "Shooter",
      "RPG",
      "Adventure",
      "Simulation",
      "Horror",
      "Sports",
      "Puzzle",
    ],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
});

const GameModel = mongoose.model("Game", gameSchema, "games");

export default GameModel;
