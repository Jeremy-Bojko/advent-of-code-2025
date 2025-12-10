import { isIngredientInRange } from "./main";

describe("Day 5", () => {
  it("check if suite is increasing", () => {
    const range = [[1, 3]];
    expect(isIngredientInRange(range, 4)).toBe(false);
  });
  it("check if suite is increasing", () => {
    const range = [[1, 3]];
    expect(isIngredientInRange(range, 1)).toBe(true);
  });
  it("check if suite is increasing", () => {
    const range = [[1, 3]];
    expect(isIngredientInRange(range, 2)).toBe(true);
  });
  it("check if suite is increasing", () => {
    const range = [
      [1, 3],
      [15, 42],
    ];
    expect(isIngredientInRange(range, 8)).toBe(false);
  });
  it("check if suite is increasing", () => {
    const range = [
      [1, 3],
      [15, 42],
    ];
    expect(isIngredientInRange(range, 24)).toBe(true);
  });
});
