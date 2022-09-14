import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";

import routes from "../routes";
import limiter from "./rateLimiter";

function mockServer() {
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(limiter);

  routes(app);
  return app;
}

export default mockServer;
