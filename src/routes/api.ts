import { Router } from "express";

import * as ApiController from '../controllers/apiController'; 

const router = Router();

//rotas de teste
router.get('/ping',ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/frases', ApiController.createPhrase)
router.get('/frases',ApiController.listPhrases);
router.get('/frase/aleatoria',ApiController.randomPharse);

router.get('/frase/:id',ApiController.getPhraseById);
router.put('/frase/:id',ApiController.UpdatePhraseById);
router.delete('/frase/:id',ApiController.DeletePhraseById);


export default router;
