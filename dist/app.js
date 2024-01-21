"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonBodyMiddleware = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db/db");
const users_1 = require("./Routes/users");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// import jwt from 'jsonwebtoken'
exports.app = (0, express_1.default)();
exports.jsonBodyMiddleware = express_1.default.json();
exports.app.use(exports.jsonBodyMiddleware);
exports.app.use('/users', (0, users_1.getUsersRouter)(db_1.db));
exports.app.use(body_parser_1.default.json(), (0, cors_1.default)());
//
// app.post('/login', (req, res) => {
//   const token = jwt.sign({user: 'user name', admin: true}, 'PRACTICE_KEY', {expiresIn: '5d'})
//   try {
//     if(!(req.body.email === 'test@gmail.com' && req.body.password === '123456')) {
//       console.log('this user not found')
//     }
//     res.status(200).send({accessToken: token})
//   } catch (e) {
//     res.status(400).send('User not found')
//     console.log(e)
//   }
// })
