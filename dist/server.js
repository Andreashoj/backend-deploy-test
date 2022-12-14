"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("cors");
dotenv_1.default.config();
require("./config/openAI");
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(cors());
app.use("/ai", index_1.openAI);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
