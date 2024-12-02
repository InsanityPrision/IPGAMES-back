import chalk from "chalk";
import mongoose from "mongoose";

const connectDataBase = async (connectingString: string): Promise<void> => {
  await mongoose.connect(connectingString);

  console.log(chalk.blue("Connected with data base"));
};

export default connectDataBase;
