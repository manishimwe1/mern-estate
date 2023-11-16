import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to mongodb!');
}).catch((error) => {
    console.log(error);
})

const app = express()
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is Running on port 3000!');
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})
