import { type Express } from "express";
import chalk from "chalk";

const startServer = (port: number, app: Express) => {
  app.listen(port, () => {
    console.log(chalk.green(`Listening in port: ${port}`));
  });
};

export default startServer;
