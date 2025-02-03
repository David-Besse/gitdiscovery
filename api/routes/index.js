import express from 'express';
import { getPokemonByName, getPokemonsByNumber } from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/pokemon/:name', getPokemonByName);
router.get('/pokemons/:number', getPokemonsByNumber);


export default router;