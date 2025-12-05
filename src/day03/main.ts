import * as utilities from "../utilities";

const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

const param = {
  isTest: false,
  part: 1,
};
const data = param.isTest ? testData : inputData;

/**
 * Part 1
 */
if (param.part === 1) {
  utilities.fetchAndTest(data).then((data: string) => {
    const batteriesRack = utilities.parseListToTab(data).map((x) => findTwoHighestNumbers(x));
    console.log(batteriesRack.reduce((a, b) => a + b, 0));
  });
}

export const findTwoHighestNumbers = (batteriesRack: string): number => {
  const structuredRackRaw = batteriesRack.split("").map((x) => +x);
  const structuredRack = [...structuredRackRaw];
  const highestNumber = structuredRack.sort((a, b) => b - a)[0];
  const indexHighestNumber = structuredRackRaw.indexOf(highestNumber);
  const foundHighestNumber = [highestNumber];
  if (indexHighestNumber != structuredRackRaw.length - 1) {
    const secondHighestNumber = structuredRackRaw.slice(indexHighestNumber + 1).sort((a, b) => b - a)[0];
    foundHighestNumber.push(secondHighestNumber);
  } else {
    const firstHighestNumber = structuredRackRaw.slice(0, indexHighestNumber).sort((a, b) => b - a)[0];
    foundHighestNumber.unshift(firstHighestNumber);
  }

  return +foundHighestNumber.join("");
};

/**
 * Part 2
 */
if (param.part == 2) {
  utilities.fetchAndTest(data).then((data: string) => {
    const solution = utilities.parseListToTab(data).map((x) => x);

    console.log(solution);
  });
}
