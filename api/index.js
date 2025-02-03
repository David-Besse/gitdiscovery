import dotenv from 'dotenv';
import express from 'express';
import pokemonRoutes from './routes/index.js';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT;

app.use('', pokemonRoutes);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});