"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsRouter = void 0;
const express_1 = __importDefault(require("express"));
const getQuestionsRouter = (db) => {
    const router = express_1.default.Router();
    // GET-маршрут для получения всех вопросов
    router.get("/", (req, res) => {
        const { themeId } = req.query;
        if (themeId) {
            const theme = db.senior.find((t) => t.id === String(themeId));
            if (theme) {
                res.json(theme);
            }
            else {
                res.status(404).json({ error: "Тема не найдена" });
            }
        }
        else {
            res.json({ senior: db.senior });
        }
    });
    return router;
};
exports.getQuestionsRouter = getQuestionsRouter;
