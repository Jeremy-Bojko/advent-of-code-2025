import * as utilities from "../utilities";
import Big from "big.js";

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

/**
 * Part 2
 */
if (param.part == 2) {
  utilities.fetchAndTest(data).then((data: string) => {
    const batteriesRack = utilities.parseListToTab(data).map((x) => findHighestDigitsNumbers(x));

    let result = new Big("0");
    batteriesRack.forEach((x) => {
      result = result.add(new Big(x));
    });
    // console.log(batteriesRack.reduce((a, b) => a + BigInt(b), BigInt(0)).toString());
    console.log(result.toString());
  });
}

export const findHighestDigitsNumbers = (batteriesRack: string): number => {
  const structuredRackRaw = batteriesRack.split("").map((x) => +x);
  const structuredRack = [...structuredRackRaw.slice(0, structuredRackRaw.length - 12 + 1)];
  const highestNumber = structuredRack.sort((a, b) => b - a)[0];
  const indexHighestNumber = structuredRackRaw.indexOf(highestNumber);
  const highestDigit = [highestNumber, structuredRackRaw[indexHighestNumber + 1]];
  for (let i = indexHighestNumber + 2; i < structuredRackRaw.length; i++) {
    const digit = structuredRackRaw[i];
    if (i < structuredRackRaw.length - 12 + highestDigit.length) {
      if (digit >= highestDigit[highestDigit.length - 1]) {
        highestDigit[highestDigit.length - 1] = digit;
      } else {
        highestDigit.push(digit);
      }
    } else {
      highestDigit.push(digit);
    }
  }
  return +highestDigit.join("");
};
