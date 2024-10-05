import express from 'express';
import dotenv from'dotenv';
import cookieParser from 'cookie-parser'
import connectDB from './config/dbconfig.js';
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import { errorHandler } from './middlewares/errorHandlerMiddleware.js';


dotenv.config();
const app = express();
const port = process.env.PORT||3500;

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


const corsOptions = {
    origin: process.env.CORS_ORIGIN, 
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/api/users',userRouter);

app.use(errorHandler);

connectDB().then(() =>{
    app.listen(port, () => {
        console.log(`listening on server http://localhost:${port}`);
})
});