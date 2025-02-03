import express from 'express';
import { getPokemonByName, getPokemonsByNumber } from '../controllers/pokemonController.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/pokemon/:name', getPokemonByName);
router.get('/pokemons/:number', getPokemonsByNumber);
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../front", "index.html"));
});


export default router;