import express, { Response } from "express";
import { RequestWithQuery } from "../types";
import { ThemeType } from "../db/db";

export const getQuestionsRouter = (db: { senior: ThemeType[] }) => {
  const router = express.Router();

  // GET-маршрут для получения всех вопросов
  router.get("/", (req: RequestWithQuery<{ themeId?: string }>, res: Response) => {
    const { themeId } = req.query;

    if (themeId) {
      const theme = db.senior.find((t) => t.id === String(themeId));
      if (theme) {
        res.json(theme);
      } else {
        res.status(404).json({ error: "Тема не найдена" });
      }
    } else {
      res.json({ senior: db.senior });
    }
  });

  return router;
};
