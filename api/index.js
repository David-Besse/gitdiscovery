import dotenv from "dotenv";
import express from "express";

import { getByName } from "./utils/getByName.js";
import { getByNumber } from "./utils/getByNumber.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT;

app.get("/pokemon/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  try {
    res.json(await getByName(name));
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a number of pokemons
app.get("/pokemons/:number", async (req, res) => {
  const { number } = req.params;
  try {
    res.json(await getByNumber(number));
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
