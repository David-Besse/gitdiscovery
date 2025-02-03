import { getByNumber } from "../utils/getByNumber.js";

test("the fetch fails with an error if number is not match pokemon", async () => {
  expect.assertions(1);
  try {
    await getByNumber(18938839);
  } catch (error) {
    expect(error).toMatch("error");
  }
});
