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
    const paperMap = utilities.parseListToTab(data).map((x) => x.split(""));
    let countRoll = 0;
    for (let i = 0; i < paperMap.length; i++) {
      for (let j = 0; j < paperMap[i].length; j++) {
        if (countAdjacentRollerPaper(paperMap, { y: i, x: j }) < 4) {
          countRoll++;
          console.log(`{y: ${i}, x: ${j}}`);
        }
      }
    }

    console.log(countRoll);
  });
}

export const countAdjacentRollerPaper = (map: string[][], cell: { y: number; x: number }) => {
  if (map[cell.y][cell.x] == ".") return 42;
  const possibleCellsAround = [
    //UpLeft
    { x: cell.x - 1, y: cell.y - 1 },
    //UpMiddle
    { x: cell.x, y: cell.y - 1 },
    //UpRight
    { x: cell.x + 1, y: cell.y - 1 },
    //Left
    { x: cell.x - 1, y: cell.y },
    //Right
    { x: cell.x + 1, y: cell.y },
    //DownLeft
    { x: cell.x - 1, y: cell.y + 1 },
    //DownMiddle
    { x: cell.x, y: cell.y + 1 },
    //DownRight
    { x: cell.x + 1, y: cell.y + 1 },
  ];
  const cellsToCheck = possibleCellsAround.filter((cellAround) => cellAround.x >= 0 && cellAround.y >= 0 && cellAround.x < map[0].length && cellAround.y < map.length);

  return cellsToCheck.map((cellAround) => map[cellAround.y][cellAround.x] == "@").filter((x) => x).length;
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
