import * as utilities from "../utilities";

const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

const param = {
  isTest: false,
  part: 2,
};
const data = param.isTest ? testData : inputData;

/**
 * Part 1
 */
if (param.part === 1) {
  utilities.fetchAndTest(data).then((data: string) => {
    const listRangeId = utilities.parseListToTab(data).flatMap((x) => x.split(",").map((x) => x.split("-").map((x) => +x)));
    const invalidId = [];
    for (const rangeId of listRangeId) {
      for (let i = rangeId[0]; i <= rangeId[1]; i++) {
        isInvalidId(i) && invalidId.push(i);
      }
    }
    console.log(
      invalidId.reduce((a, b) => a + b),
      0
    );
  });
}

export const isInvalidId = (id: number) => {
  const splittedId = String(id).split("");
  if (splittedId.length % 2 !== 0) return false;
  const lengthNumber = splittedId.length / 2;
  return +splittedId.slice(0, lengthNumber).join("") * (Math.pow(10, lengthNumber) + 1) === id;
};

/**
 * Part 2
 */
if (param.part == 2) {
  utilities.fetchAndTest(data).then((data: string) => {
    const listRangeId = utilities.parseListToTab(data).flatMap((x) => x.split(",").map((x) => x.split("-").map((x) => +x)));
    const invalidId = [];
    for (const rangeId of listRangeId) {
      for (let i = rangeId[0]; i <= rangeId[1]; i++) {
        (isInvalidId(i) || isComplexInvalidId(i)) && invalidId.push(i);
      }
    }
    console.log(invalidId);
    console.log(invalidId.reduce((a, b) => a + b));
  });
}

export const isComplexInvalidId = (id: number) => {
  const stringedId = String(id);
  const splittedId = stringedId.split("");
  // All the digit are the same
  if (splittedId.length > 1 && new Set(splittedId).size == 1) return true;
  const fractionnedId = stringedId.split(splittedId[0]);
  fractionnedId.shift();
  return fractionnedId.length > 1 && new Set(fractionnedId).size === 1;
};
