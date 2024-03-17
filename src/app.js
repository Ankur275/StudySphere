import  express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import loginRouter from  './routes/login.route.js'
import signUpRouter from './routes/signUp.route.js'
import updateProfileRouter from  './routes/updateProfile.route.js'

app.use("/api/login" , loginRouter)
app.use("/api/signUp", signUpRouter)
app.use("/api/profile" , updateProfileRouter)

export {app}