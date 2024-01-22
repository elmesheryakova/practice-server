import express from "express";
import { db } from "./db/db";
import { getUsersRouter } from "./Routes/users";
import cors from "cors";

export const app = express();
export const jsonBodyMiddleware = express.json();

app.use(jsonBodyMiddleware);

app.use(cors({
    origin: ['http://localhost:*', 'http://practice-m.ru']
}))


app.use('/users', getUsersRouter(db));
