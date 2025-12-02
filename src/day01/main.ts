import * as utilities from "../utilities";

const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

const isTest = false;
const data = isTest ? testData : inputData;

/**
 * Part 1
 */

utilities.fetchAndTest(data).then((data: string) => {
  const safePositions = [50];

  const rotations = utilities.parseListToTab(data).map((x) => {
    return { direction: x.slice(0, 1) === "L" ? -1 : 1, step: +x.slice(1) };
  });

  rotations.forEach((rotate) => {
    const newPosition = findNewPosition({ initial: safePositions[safePositions.length - 1], rotationDirection: rotate.direction, rotationStep: rotate.step });
    safePositions.push(newPosition);
  });
  console.log(safePositions);
  console.log(safePositions.filter((x) => x == 0).length);
});

export const findNewPosition = ({ initial = 50, rotationDirection = -1, rotationStep = 100 }) => {
  let newPosition = initial + rotationDirection * (rotationStep % 100);
  if (newPosition < 0) {
    newPosition += 100;
  }
  return newPosition % 100;
};
