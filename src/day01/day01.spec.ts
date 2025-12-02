import { findNewPosition } from "./main";

describe("Day 1", () => {
  it("rotate from 1 position to 0", () => {
    expect(findNewPosition({ initial: 1, rotationDirection: -1, rotationStep: 1 })).toBe(0);
  });
  it("rotate from 1 position to 2", () => {
    expect(findNewPosition({ initial: 1, rotationDirection: 1, rotationStep: 1 })).toBe(2);
  });
  it("rotate from 50 position to 82", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: -1, rotationStep: 68 })).toBe(82);
  });
  it("rotate from 50 position to 50", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: -1, rotationStep: 100 })).toBe(50);
  });
  it("rotate from 50 position to 50", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: 1, rotationStep: 100 })).toBe(50);
  });
  it("rotate from 50 position to 0", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: 1, rotationStep: 50 })).toBe(0);
  });
});
