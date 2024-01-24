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

const questionsRouter = getQuestionsRouter(db);

app.use('/questions', questionsRouter);
