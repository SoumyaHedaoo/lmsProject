import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dbConnection from './configs/mongo.js';

const app = express();

//Middlrwares

app.use(cors());

//connect to db
await dbConnection();

//Routes

app.get('/' , (req , res)=> res.send('Hello'));


//port
const PORT = process.env.PORT || 5000

app.listen(PORT , ()=> console.log('SERVER started at port'));