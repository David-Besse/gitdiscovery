import express from 'express';
import { getPokemonByName, getPokemonsByNumber, getRegionByNumber } from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/pokemon/:name', getPokemonByName);
router.get('/pokemons/:number', getPokemonsByNumber);
router.get('/region/:number', getRegionByNumber);


export default router;