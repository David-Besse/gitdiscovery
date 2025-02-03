import dotenv from 'dotenv';
import express from 'express';
import pokemonRoutes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "../front")));
app.use('', pokemonRoutes);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});