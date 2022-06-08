import { AddPet, Verpet } from '../repository/petRepository.js';

import { Router } from 'express';
const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const a = req.body;
        
        if (!a.nome) throw new Error('nome é obrigatório');
       
      
        const petInserido = await AddPet(a);
        resp.send(petInserido);
    } catch (err) {
        resp.status(400).send({
            Error: err.message
        });
    }
});

server.get('/verPet', async (req, resp) => {
    try {
        const a = await Verpet();
        resp.send(a);
    } catch(err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});


export default server;