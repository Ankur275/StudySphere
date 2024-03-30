import  express  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./db/index.js";

const app = express()

dotenv.config({
    path:'./.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT ||8000, ()=>{
        console.log(` Server is running at port :  ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGO db connection failed !!!",error)
})

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
import groupMessageRouter from "../src/routes/groupMessage.route.js"
try {
    app.use("/api/login" , loginRouter)
    app.use("/api/signUp", signUpRouter)
    app.use("/api/profile" , updateProfileRouter)
    app.use("/api/resetPwd", resetPwdRouter)
    app.use("/api/GrpMessage", groupMessageRouter)
} catch (error) {
    throw new ApiError(405, error?.message)
}


export {app}