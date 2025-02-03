const getPokemons = async () => {
    try {
        const response = await fetch('http://localhost:3000/pokemons/200');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

(async () => {
    const pokemons = await getPokemons();

    const pokemonsElement = document.getElementById('pokemons');

    console.log(pokemons)
    if (pokemons) {
        pokemons.forEach(pokemon => {
            const pokemonElement = document.createElement('div');
            pokemonElement.classList.add('pokemon');
            pokemonElement.innerHTML = `
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <p>${pokemon.name}</p>
            `;
            pokemonsElement.appendChild(pokemonElement);
        });
    }
})();
