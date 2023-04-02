"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('test!!!');
});
app.get('/users', (req, res) => {
    res.send('users');
});
app.post('/users', (req, res) => {
    res.send('created users');
});
app.listen(port, () => {
    console.log(`port ${port}`);
});
