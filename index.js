import express from 'express';
import db from './config/Database.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001


try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.log(error);
}
app.use(cors({credentials : true, origin : 'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log('Server Berhasil dibuat'));