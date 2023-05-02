import express from 'express'
import 'dotenv/config'
import indexRouter from './routes/index.js'
import logger from 'morgan'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler.js'
import { notFoundHandler } from './middlewares/notFoundHandler.js'

const app = express()

//middlwares

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes

app.use('/api', indexRouter)

//error handlers
app.use(notFoundHandler)
app.use(errorHandler)

//server listener

let port = process.env.PORT || 3000
app.listen(port)
console.log('Server on port', port)