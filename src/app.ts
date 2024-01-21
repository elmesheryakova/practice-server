import express from "express";
import { db } from "./db/db";
import { getUsersRouter } from "./Routes/users";
import cors from "cors";

export const app = express();
export const jsonBodyMiddleware = express.json();

app.use(jsonBodyMiddleware);

const corsOptions = {
    origin: ["http://localhost", "http://practice-m.ru"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));


app.use('/users', getUsersRouter(db));
