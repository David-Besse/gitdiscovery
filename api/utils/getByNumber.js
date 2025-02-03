import axios from "axios";

export async function getByNumber(number) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${number}`
    );
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}
