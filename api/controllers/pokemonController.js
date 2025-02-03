import axios from 'axios';

export const getPokemonByName = async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
};

//get a number of pokemons
export const getPokemonsByNumber = async (req, res) => {
    const { number } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
};

//get a region
export const getRegionByNumber = async (req, res) => {
    const { number } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/region/${number}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
};

//get pokemon's forms

export const getPokemonFormsByName = async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}