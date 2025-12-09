import { findTwoHighestNumbers, findHighestDigitsNumbers } from "./main";

describe.skip("Day 3 - part 1", () => {
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("987654321111111")).toBe(98);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("811111111111119")).toBe(89);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("234234234234278")).toBe(78);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("818181911112111")).toBe(92);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("73764877623473")).toBe(87);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("7376487762349")).toBe(89);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("2221222621311222213132242151213242132162234231144212112222231222222222122221122241223232322424322112")).toBe(66);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("222122262131129222131322421512132421321622342311442121122222312222222221222211222412232323224243229112")).toBe(99);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("5345684245134333468526354245225256242345473442145552453434544444673223545423733223353554433533224743")).toBe(88);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("6616343535656426221614126114424442323356341612336322453146126133261122554555115256252511166526161789")).toBe(89);
  });
  it("finds the 2 highest numbers", () => {
    expect(findTwoHighestNumbers("3156789")).toBe(89);
  });
});
describe("Day 3 - part 2", () => {
  it("finds the 12 digits to form highest number", () => {
    expect(findHighestDigitsNumbers("987654321111111")).toBe(987654321111);
  });
  it("finds the 12 digits to form highest number", () => {
    expect(findHighestDigitsNumbers("818181911112111")).toBe(888911112111);
  });
  it("finds the 12 digits to form highest number", () => {
    expect(findHighestDigitsNumbers("234234234234278")).toBe(434234234278);
  });
  it("finds the 12 digits to form highest number", () => {
    expect(findHighestDigitsNumbers("811111111111119")).toBe(811111111119);
  });
  it("finds the 12 digits to form highest number", () => {
    expect(findHighestDigitsNumbers("2221222621311222213132242151213242132162234231144212112222231222222222122221122241223232322424322112")).toBe(664444443222);
  });
});
