import {UserViewModel} from "../models/UserViewModel";
import {DBType, UsersType} from "../db/db";
import express, {Response} from "express";
import {RequestWithBody, RequestWithParams, RequestWithParamsAndBody, RequestWithQuery} from "../types";
import {QueryUserModel} from "../models/QueryUserModel";
import {URIParamsUserIDModel} from "../models/URIParamsUserIDModel";
import {CreateUserModel} from "../models/CreateUserModel";
import {UpdateUserModel} from "../models/UpdateUserModel";
import {HTTP_STATUSES} from "../utils";


export const getUserViewModel = (dbUser: UsersType): UserViewModel => {
  return {
    id: dbUser.id,
    name: dbUser.name
  }
}
export const getUsersRouter = (db: DBType) => {
  const router = express.Router()
  
  router.get('/', (req: RequestWithQuery<QueryUserModel>, res: Response<UserViewModel[]>) => {
    let foundUsers = db.users;
    
    if (req.query.name) {
      foundUsers = foundUsers.filter(u => u.name.indexOf(req.query.name) > -1)
    }
    res.json(foundUsers.map(getUserViewModel))
  })
  router.get('/:id', (req: RequestWithParams<URIParamsUserIDModel>, res: Response<UserViewModel>) => {
    const foundUser = db.users.find(u => u.id === +req.params.id);
    
    if (!foundUser) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND)
      return
    }
    res.json(getUserViewModel(foundUser))
  })
  router.post('/', (req: RequestWithBody<CreateUserModel>, res: Response<UserViewModel>) => {
    if (!req.body.name) {
      res.sendStatus(HTTP_STATUSES.BED_REQUEST)
      return
    }
    const items: UsersType = {
      id: +(new Date()),
      name: req.body.name
    };
    db.users.push(items)
    res.json(getUserViewModel(items))
  })
  router.delete('/:id', (req: RequestWithParams<URIParamsUserIDModel>, res) => {
    db.users = db.users.filter(u => u.id !== +req.params.id);
    res.sendStatus(HTTP_STATUSES.NO_CONTENT)
  })
  router.put('/:id', (req: RequestWithParamsAndBody<URIParamsUserIDModel, UpdateUserModel>, res) => {
    if (!req.body.name) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND)
      return
    }
    
    const foundUser = db.users.find(u => u.id === +req.params.id);
    if (!foundUser) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND)
      return
    }
    foundUser.name = req.body.name
    res.json(foundUser)
  })
  
  return router
}
