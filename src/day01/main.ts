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
}

export const findNewPosition = ({ initial = 50, rotationDirection = -1, rotationStep = 100 }) => {
  let newPosition = initial + rotationDirection * (rotationStep % 100);
  if (newPosition < 0) {
    newPosition += 100;
  }
  return newPosition % 100;
};

/**
 * Part 2
 */
if (param.part == 2) {
  utilities.fetchAndTest(data).then((data: string) => {
    const safePositions = [50];
    let totalZero = 0;

    const rotations = utilities.parseListToTab(data).map((x) => {
      return { direction: x.slice(0, 1) === "L" ? -1 : 1, step: +x.slice(1) };
    });

    rotations.forEach((rotate) => {
      const initial = safePositions[safePositions.length - 1],
        rotationDirection = rotate.direction,
        rotationStep = rotate.step;

      const newPosition = findNewPosition({ initial, rotationDirection, rotationStep });
      totalZero += countPassingByZero({ initial, rotationDirection, rotationStep, newPosition });
      console.log(`step: ${rotationStep}, zero: ${totalZero}, newPos: ${newPosition}`);
      safePositions.push(newPosition);
    });
    // console.log(safePositions);
    console.log(safePositions.filter((x) => x == 0).length + totalZero);
  });
}

export const countPassingByZero = ({ initial = 50, rotationDirection = -1, rotationStep = 100, newPosition = 50 }) => {
  const completeTour = Math.floor(rotationStep / 100);
  if (completeTour) {
    return completeTour;
  } else if (rotationDirection == -1 && initial < newPosition) {
    if (initial === 0) return 0;
    return 1;
  } else if (rotationDirection == 1 && initial > newPosition) {
    if (initial === 0) return 0;
    return 1;
  }
  return 0;
};
