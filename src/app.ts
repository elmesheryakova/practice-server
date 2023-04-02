import express from "express";
import {db} from "./db/db";
import {getUsersRouter} from "./Routes/users";
import bodyParser from "body-parser";
import cors from 'cors'
import jwt from 'jsonwebtoken'
export const app = express()
export const jsonBodyMiddleware = express.json()

app.use(jsonBodyMiddleware)

app.use('/users', getUsersRouter(db))
app.use(bodyParser.json(), cors())

app.post('/login', (req, res) => {
  const token = jwt.sign({user: 'user name', admin: true}, 'PRACTICE_KEY', {expiresIn: '5d'})
  try {
    if(!(req.body.email === 'test@gmail.com' && req.body.password === '123456')) {
      console.log('this user not found')
    }
    res.status(200).send({accessToken: token})
  } catch (e) {
    res.status(400).send('User not found')
    console.log(e)
  }
})

