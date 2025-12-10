import { countAdjacentRollerPaper } from "./main";

describe("Day 4", () => {
  it("check if suite is increasing", () => {
    const map = [
      [".", ".", "."],
      [".", "@", "."],
      [".", ".", "."],
    ];
    const cell = { y: 1, x: 1 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(0);
  });
  it("check if suite is increasing", () => {
    const map = [
      ["@", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
    const cell = { y: 0, x: 0 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(0);
  });
  it("check if suite is increasing", () => {
    const map = [
      [".", ".", "@"],
      [".", ".", "."],
      [".", ".", "."],
    ];
    const cell = { y: 0, x: 2 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(0);
  });
  it("check if suite is increasing", () => {
    const map = [
      [".", ".", "@"],
      [".", ".", "."],
      [".", ".", "@"],
    ];
    const cell = { y: 2, x: 2 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(0);
  });
  it("check if suite is increasing", () => {
    const map = [
      [".", ".", "@"],
      [".", ".", "."],
      ["@", ".", "@"],
    ];
    const cell = { y: 2, x: 0 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(0);
  });
  it("check if suite is increasing", () => {
    const map = [
      [".", ".", "@"],
      [".", ".", "."],
      ["@", "@", "@"],
    ];
    const cell = { y: 2, x: 1 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(2);
  });
  it("check if suite is increasing", () => {
    const map = [
      ["@", ".", "@"],
      ["@", ".", "."],
      ["@", "@", "@"],
    ];
    const cell = { y: 1, x: 0 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(3);
  });
  it("check if suite is increasing", () => {
    const map = [
      ["@", ".", "@"],
      ["@", ".", "."],
      ["@", "@", "@"],
    ];
    const cell = { y: 1, x: 1 };
    expect(countAdjacentRollerPaper(map, cell)).toBe(42);
  });
});
