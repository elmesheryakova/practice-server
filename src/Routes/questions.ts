import express, { Response } from "express";
import { RequestWithQuery } from "../types";
import { ThemeType, QuestionType, db } from "../db/db";

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
      res.json(db.senior.flatMap((theme) => theme.questions || []));
    }
  });

  return router;
};
