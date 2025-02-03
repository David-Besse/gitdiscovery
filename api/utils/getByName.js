import axios from "axios";

export async function getByName(name) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    console.log(response);
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}
