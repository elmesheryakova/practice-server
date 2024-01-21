import express from "express";
import { db } from "./db/db";
import { getUsersRouter } from "./Routes/users";
import cors from "cors"; // Добавьте эту строку

export const app = express();
export const jsonBodyMiddleware = express.json();

app.use(jsonBodyMiddleware);
app.use(cors()); // Добавьте эту строку

app.use('/users', getUsersRouter(db));
