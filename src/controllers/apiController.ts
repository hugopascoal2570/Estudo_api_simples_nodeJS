import { Request, Response } from "express";
import { Phrase } from '../models/Phrase';

import sequelize, { Sequelize } from "sequelize";

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({ number: nRand });
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({ nome });
}

export const createPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;

    let newPharse = await Phrase.create({ author, txt });

    res.status(201);
    res.json({ id: newPharse.id, author, txt });
}

export const listPhrases = async (req: Request, res: Response) => {

    let list = await Phrase.findAll();

    res.json({ list });
}
export const getPhraseById = async (req: Request, res: Response) => {

    let { id } = req.params;

    let phrase = await Phrase.findByPk(id);

    if (phrase) {
        res.json({ phrase });
    } else {
        res.status(404);
        res.json({ error: 'nenhuma frase encontrada' });
    }
}

export const UpdatePhraseById = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);

    if (phrase) {
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();

        res.json({ phrase });
    } else {
        res.status(404);
        res.json({ error: 'nenhuma frase encontrada' });
    }
}

export const DeletePhraseById = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Phrase.destroy({ where: { id } });
    res.json({});
}

export const randomPharse = async (req: Request, res: Response) => {

    let phrase = await Phrase.findOne({
        order:[
            Sequelize.fn('RAND')
        ]
    });
    
   if(phrase){
    res.json({phrase})
   }else{
    res.json({error:'não existem frases cadastradas'});
   }

    
}