import { MongoMemoryServer } from "mongodb-memory-server";
import connectDataBase from "../database";
import mongoose from "mongoose";

const connectDataBaseTests = () => {
  let server: MongoMemoryServer;

  beforeAll(async () => {
    server = await MongoMemoryServer.create();
    const connectionString = server.getUri();

    await connectDataBase(connectionString);
  });

  afterAll(async () => {
    await server.stop();

    await mongoose.disconnect();
  });
};

export default connectDataBaseTests;
