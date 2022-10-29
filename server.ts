import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

import "./config/openAI";
import { openAI } from "./routes/index";

const app: Express = express();
const port = process.env.PORT;

app.use("/ai", openAI);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
