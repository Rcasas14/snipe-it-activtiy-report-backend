import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

import routes from './routes'
import { notfoundMiddleware } from './middleware';

const PORT = process.env.PORT || 3002;
const server = express()

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended:true }));

server.use('/api/v1', routes)
server.use(notfoundMiddleware)

server.listen(PORT, ()=>{
    console.log(`RUNNING ON PORT: ${PORT}`);
});

export default server;