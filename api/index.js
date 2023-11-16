import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRouter from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to mongodb!');
}).catch((error) => {
    console.log(error);
})

const app = express()

app.listen(3000, () => {
    console.log('Server is Running on port 3000!');
})

app.use('/api/user', userRouter)