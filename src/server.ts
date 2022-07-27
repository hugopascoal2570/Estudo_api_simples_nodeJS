import express, { Request, Response } from 'express';
import path from 'path';

import dotenv from 'dotenv';
import mainRoutes from './routes/api';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);