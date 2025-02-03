// import { getByNumber } from "../utils/getByNumber.js";
const { getByNumber } = require("../utils/getByNumber");

test("the fetch fails with an error if number is not match pokemon", async () => {
  expect.assertions(1);
  try {
    await getByNumber(18938839);
  } catch (error) {
    expect(error).toMatch("error");
  }
});

// test("la récupération échoue avec une erreur si pokemon id existe pas", async () => {
//   await expect(getByNumber(27002020202)).rejects.toMatch("error");
// });
