import express from "express";
import { db } from "./db/db";
import { getQuestionsRouter } from "./Routes/questions";
import bodyParser from "body-parser";
import cors from 'cors';

export const app = express();
export const jsonBodyMiddleware = express.json();

app.use(jsonBodyMiddleware);
app.use(bodyParser.json());
app.use(cors());

// Используем фабрику для создания маршрута с передачей базы данных
const questionsRouter = getQuestionsRouter(db);

// Регистрируем маршрут
app.use('/questions', questionsRouter);
