"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonBodyMiddleware = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db");
const users_1 = require("./Routes/users");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.jsonBodyMiddleware = express_1.default.json();
exports.app.use(exports.jsonBodyMiddleware);
const corsOptions = {
    origin: ["http://localhost", "http://practice-m.ru"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use('/users', (0, users_1.getUsersRouter)(db_1.db));
