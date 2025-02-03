import { getByName } from "../utils/getByName.js";

test("the fetch fails with an error if name does'nt exist", async () => {
  expect.assertions(1);
  try {
    await getByName("Bloublou");
  } catch (error) {
    expect(error).toMatch("error");
  }
});
