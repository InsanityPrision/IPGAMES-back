import chalk from "chalk";
import mongoose from "mongoose";

const connectDataBase = async () => {
  const dataBaseConnectionString = process.env.DATA_BASE;

  if (!dataBaseConnectionString) {
    throw new Error("Missing connection string");
  }

  await mongoose.connect(dataBaseConnectionString);

  console.log(chalk.blue("Connected with data base"));
};

export default connectDataBase;
