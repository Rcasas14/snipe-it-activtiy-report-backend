import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

import routes from './routes'

const PORT = process.env.PORT || 3002;
const server = express()

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended:true }));

server.use('/', routes)


server.listen(PORT, ()=>{
    console.log(`RUNNING ON PORT: ${PORT}`);
});

export default server;