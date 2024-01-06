import { Sum } from "../Sum";

test("Sum func should be calculate the sum of two numbers  ", () => {
  const result = Sum(4, 3);
  expect(result).toBe(7);
});
