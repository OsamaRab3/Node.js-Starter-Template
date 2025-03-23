
// import  express from "express";
import express from 'express';
const app = express();
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';


import ErrorHandl   from './config/init'




app.use(express.json())
app.use(helmet());
app.use(cors());   
app.use(morgan('dev')); 



app.use (ErrorHandl.NotFound);
app.use(ErrorHandl.globalError);



export default app;
