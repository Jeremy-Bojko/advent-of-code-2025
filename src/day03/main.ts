import * as utilities from "../utilities";

const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

const param = {
  isTest: true,
  part: 1,
};
const data = param.isTest ? testData : inputData;

/**
 * Part 1
 */
if (param.part === 1) {
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
    const solution = utilities.parseListToTab(data).map((x) => x);

    console.log(solution);
  });
}
