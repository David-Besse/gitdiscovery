// import { getByName } from "../utils/getByName.js";
const { getByName } = require("../utils/getByName");

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await getByName("Bloublou");
  } catch (error) {
    expect(error).toMatch("error");
  }
});

// test("la récupération échoue avec une erreur si pokemon name existe pas", async () => {
//   await expect(getByName("LOULOU")).rejects.toMatch("error");
// });
