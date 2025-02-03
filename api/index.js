import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';

dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT;

app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

//get all pokemons
app.get('/pokemons', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});