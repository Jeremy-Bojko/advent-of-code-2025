import { findNewPosition, countPassingByZero } from "./main";

describe("Day 1", () => {
  it("rotates from 1 position to 0", () => {
    expect(findNewPosition({ initial: 1, rotationDirection: -1, rotationStep: 1 })).toBe(0);
  });
  it("rotates from 1 position to 2", () => {
    expect(findNewPosition({ initial: 1, rotationDirection: 1, rotationStep: 1 })).toBe(2);
  });
  it("rotates from 50 position to 82", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: -1, rotationStep: 68 })).toBe(82);
  });
  it("rotates from 50 position to 50", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: -1, rotationStep: 100 })).toBe(50);
  });
  it("rotates from 50 position to 50", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: 1, rotationStep: 100 })).toBe(50);
  });
  it("rotates from 50 position to 0", () => {
    expect(findNewPosition({ initial: 50, rotationDirection: 1, rotationStep: 50 })).toBe(0);
  });
  it("finds that we passed through zero", () => {
    const initial = 1,
      rotationDirection = -1,
      rotationStep = 1,
      expected = 0;
    expect(countPassingByZero({ initial, rotationDirection, rotationStep, newPosition: findNewPosition({ initial, rotationDirection, rotationStep }) })).toBe(expected);
  });
  it("finds that we passed through zero", () => {
    const initial = 1,
      rotationDirection = -1,
      rotationStep = 2,
      expected = 1;
    expect(countPassingByZero({ initial, rotationDirection, rotationStep, newPosition: findNewPosition({ initial, rotationDirection, rotationStep }) })).toBe(expected);
  });
  it("finds that we passed through zero clockwise", () => {
    const initial = 99,
      rotationDirection = 1,
      rotationStep = 2,
      expected = 1;
    expect(countPassingByZero({ initial, rotationDirection, rotationStep, newPosition: findNewPosition({ initial, rotationDirection, rotationStep }) })).toBe(expected);
  });
  it("finds that we passed multiple time through zero", () => {
    const initial = 1,
      rotationDirection = -1,
      rotationStep = 200,
      expected = 2;
    expect(countPassingByZero({ initial, rotationDirection, rotationStep, newPosition: findNewPosition({ initial, rotationDirection, rotationStep }) })).toBe(expected);
  });
  it("finds that we passed multiple time through zero", () => {
    const initial = 0,
      rotationDirection = -1,
      rotationStep = 201,
      expected = 2;
    expect(countPassingByZero({ initial, rotationDirection, rotationStep, newPosition: findNewPosition({ initial, rotationDirection, rotationStep }) })).toBe(expected);
  });
  it("finds not passing through zero", () => {
    const initial = 0,
      rotationDirection = -1,
      rotationStep = 1,
      expected = 0;
    expect(countPassingByZero({ initial, rotationDirection, rotationStep, newPosition: findNewPosition({ initial, rotationDirection, rotationStep }) })).toBe(expected);
  });
});
