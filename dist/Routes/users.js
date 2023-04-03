"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersRouter = exports.getUserViewModel = void 0;
const express_1 = __importDefault(require("express"));
const utils_1 = require("../utils");
const getUserViewModel = (dbUser) => {
    return {
        id: dbUser.id,
        name: dbUser.name
    };
};
exports.getUserViewModel = getUserViewModel;
const getUsersRouter = (db) => {
    const router = express_1.default.Router();
    router.get('/', (req, res) => {
        let foundUsers = db.users;
        if (req.query.name) {
            foundUsers = foundUsers.filter(u => u.name.indexOf(req.query.name) > -1);
        }
        res.json(foundUsers.map(exports.getUserViewModel));
    });
    router.get('/:id', (req, res) => {
        const foundUser = db.users.find(u => u.id === +req.params.id);
        if (!foundUser) {
            res.sendStatus(utils_1.HTTP_STATUSES.NOT_FOUND);
            return;
        }
        res.json((0, exports.getUserViewModel)(foundUser));
    });
    router.post('/', (req, res) => {
        if (!req.body.name) {
            res.sendStatus(utils_1.HTTP_STATUSES.BED_REQUEST);
            return;
        }
        const items = {
            id: +(new Date()),
            name: req.body.name
        };
        db.users.push(items);
        res.json((0, exports.getUserViewModel)(items));
    });
    router.delete('/:id', (req, res) => {
        db.users = db.users.filter(u => u.id !== +req.params.id);
        res.sendStatus(utils_1.HTTP_STATUSES.NO_CONTENT);
    });
    router.put('/:id', (req, res) => {
        if (!req.body.name) {
            res.sendStatus(utils_1.HTTP_STATUSES.NOT_FOUND);
            return;
        }
        const foundUser = db.users.find(u => u.id === +req.params.id);
        if (!foundUser) {
            res.sendStatus(utils_1.HTTP_STATUSES.NOT_FOUND);
            return;
        }
        foundUser.name = req.body.name;
        res.json(foundUser);
    });
    return router;
};
exports.getUsersRouter = getUsersRouter;
