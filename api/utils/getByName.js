const axios = require("axios");

async function getByName(name) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    console.log(response);
    return response.data;
  } catch (e) {
    throw "error";
  }
}

module.exports = { getByName };
