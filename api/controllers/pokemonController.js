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
        // 1. Récupérer la liste des Pokémon avec leur URL détaillée
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`);
        const pokemons = response.data.results;

        // 2. Pour chaque Pokémon, récupérer ses détails, y compris l'image
        const pokemonsWithImages = await Promise.all(pokemons.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);  // Faire une requête pour récupérer les détails
            const details = detailsResponse.data;

            // Extraire l'image et d'autres détails
            const pokemonData = {
                name: pokemon.name,
                image: details.sprites.front_default,  // Image du Pokémon
                types: details.types.map(typeInfo => typeInfo.type.name),
            };

            return pokemonData;
        }));

        // 3. Renvoi des Pokémon avec leurs images
        res.json(pokemonsWithImages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
};