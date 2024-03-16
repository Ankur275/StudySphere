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

import loginRoute from  './routes/login.route.js'
import signUpRoute from './routes/signUp.route.js'
import updateProfileRoute from  './routes/updateProfile.route.js'

app.use("/api/login" , loginRoute)
app.use("/api/signUp", signUpRoute)
app.use("/api/profile" , updateProfileRoute)

export {app}