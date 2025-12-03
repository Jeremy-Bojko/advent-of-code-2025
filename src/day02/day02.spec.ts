import { isInvalidId } from "./main";

describe("Day 2", () => {
  it("checks if id is a replica number", () => {
    const invalidId = [11, 123123, 99, 1010, 1188511885, 38593859];
    for (const id of invalidId) {
      expect(isInvalidId(id)).toBe(true);
    }
  });
  it("checks if id is a not a replica number", () => {
    const validId = [12, 101, 123];
    for (const id of validId) {
      expect(isInvalidId(id)).toBe(false);
    }
  });
});
