import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from "cookie-parser"
import cors from "cors"
import router from './router/index.js'
import errorMiddleware from "./middlewares/error.middleware.js";

dotenv.config()
const app = express()

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`SERVER WORK! PORT: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()