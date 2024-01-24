"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonBodyMiddleware = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db");
const questions_1 = require("./Routes/questions");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.jsonBodyMiddleware = express_1.default.json();
exports.app.use(exports.jsonBodyMiddleware);
exports.app.use(body_parser_1.default.json());
exports.app.use((0, cors_1.default)());
// Используем фабрику для создания маршрута с передачей базы данных
const questionsRouter = (0, questions_1.getQuestionsRouter)(db_1.db);
// Регистрируем маршрут
exports.app.use('/questions', questionsRouter);
