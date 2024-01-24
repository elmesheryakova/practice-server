import express, { Response } from "express";
import { RequestWithQuery } from "../types";
import { ThemeType } from "../db/db";

export const getQuestionsRouter = (db: { senior: ThemeType[] }) => {
  const router = express.Router();

  // GET-маршрут для получения всех вопросов
  router.get("/", (req: RequestWithQuery<{ themeId?: string }>, res: Response) => {
    const { themeId } = req.query;

    if (themeId) {
      const theme = db.senior.find((t) => t.id === Number(themeId));
      if (theme) {
        res.json(theme.questions);
      } else {
        res.status(404).json({ error: "Тема не найдена" });
      }
    } else {
      const allQuestions = db.senior.map((theme) => theme.questions).flat();
      res.json(allQuestions);
    }
  });

  return router;
};
