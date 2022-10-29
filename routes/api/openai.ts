import express, { Request, Response } from "express";
import openai from "../../config/openAI";

const router = express.Router();

router.get("/test", async (req: Request, res: Response) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "How are you doing?",
    max_tokens: 150,
  });

  res.send(completion.data.choices[0].text);
});

export { router as openAI };
