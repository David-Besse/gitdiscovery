const axios = require("axios");

async function getByNumber(number) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${number}`
    );
    return response.data;
  } catch (e) {
    throw "error";
  }
}

module.exports = { getByNumber };
