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
if (false && param.part == 2) {
  utilities.fetchAndTest(data).then((data: string) => {
    const batteriesRack = utilities.parseListToTab(data).map((x) => findHighestDigitsNumbers(x));

    let result = new Big("0");
    batteriesRack.forEach((x) => {
      result = result.add(new Big(x));
    });
    console.log(batteriesRack);
    console.log(result.toString());
  });
}

export const findHighestDigitsNumbers = (batteriesRack: string): number => {
  const structuredRackRaw = batteriesRack.split("").map((x) => +x);
  const structuredRack = [...structuredRackRaw.slice(0, structuredRackRaw.length - 12 + 1)];
  const highestNumber = structuredRack.sort((a, b) => b - a)[0];
  const indexHighestNumber = structuredRackRaw.indexOf(highestNumber);
  let highestDigit = [highestNumber, structuredRackRaw[indexHighestNumber + 1]];
  for (let i = indexHighestNumber + 2; i < structuredRackRaw.length; i++) {
    const digit = structuredRackRaw[i];

    if (i < structuredRackRaw.length - 12) {
      // The element to change can be the n-12 element
      if (digit >= highestDigit[1]) {
        highestDigit[1] = digit;
        highestDigit = [...highestDigit.slice(0, 2)];
        console.log(highestDigit);
      } else {
        highestDigit.push(digit);
      }
    } else if (highestDigit.length < 12) {
      highestDigit.push(digit);
    }
  }
  return +highestDigit.join("");
};

findHighestDigitsNumbers("2221222621311222213132242151213242132162234231144212112222231222222222122221122241223232322424322112");
