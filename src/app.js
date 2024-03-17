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

import loginRouter from  '../src/routes/login.route.js'
import signUpRouter from '../src/routes/signUp.route.js'
import updateProfileRouter from  '../src/routes/updateProfile.route.js'
import resetPwdRouter from  "../src/routes/resetPwd.route.js"
try {
    app.use("/api/login" , loginRouter)
app.use("/api/signUp", signUpRouter)
app.use("/api/profile" , updateProfileRouter)
app.use("/api/resetPwd", resetPwdRouter)
} catch (error) {
    throw new ApiError(405, error?.message)
}


export {app}