import express from "express";
import { db } from "./db/db";
import { getUsersRouter } from "./Routes/users";
import cors from "cors"; // Добавьте эту строку

export const app = express();
export const jsonBodyMiddleware = express.json();

app.use(jsonBodyMiddleware);
app.use(cors()); // Добавьте эту строку
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Здесь можно указать конкретный домен фронтенда вместо '*'
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/users', getUsersRouter(db));
