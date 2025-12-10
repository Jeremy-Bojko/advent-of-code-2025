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
    const ingredientsDatabase = utilities.parseListToTab(data).map((x) => x);
    const freshIngredientRange = ingredientsDatabase.slice(0, ingredientsDatabase.indexOf("")).map((x) => x.split("-").map((id) => +id));
    const idsIngredientToCheck = ingredientsDatabase.slice(ingredientsDatabase.indexOf("") + 1).map((x) => +x);
    let countFreshIngredient = 0;
    idsIngredientToCheck.forEach((id) => {
      isIngredientInRange(freshIngredientRange, id) && ++countFreshIngredient;
    });
    console.log(countFreshIngredient);
  });
}

export const isIngredientInRange = (rangeArray: number[][], ingredientId: number): boolean => {
  for (const range of rangeArray) {
    if (ingredientId >= range[0] && ingredientId <= range[1]) {
      return true;
    }
  }
  return false;
};

/**
 * Part 2
 */
if (param.part == 2) {
  utilities.fetchAndTest(data).then((data: string) => {
    const ingredientsDatabase = utilities.parseListToTab(data).map((x) => x);

    console.log(ingredientsDatabase);
  });
}
