import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import config from "config";
import helmet from "helmet";

import logger from "./utils/logger";
import routes from "./routes";
import swaggerDocs from "./utils/swagger";
import limiter from "./utils/rateLimiter";

const port = config.get<number>("port") || 3000;

export const app = express();

app.use(express.json());
app.use(helmet());
app.use(limiter);

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);

  routes(app);

  swaggerDocs(app, port);
});
