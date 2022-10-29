"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
exports.default = openai;
