import { createServer } from "http";
import app from "./app";
import config from "@utils/config";

const server = createServer(app);

const startServer = async () => {
  try {
    await server.listen(config.server.port);
    console.log(`Server is beating on port ${config.server.port}`);
  } catch (error) {
    console.log({ serverError: error });
  }
};
startServer();
