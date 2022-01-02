const { input } = require("./input");
const { countGreaterValues } = require("./utils");

function threeValueArr(val, curr, i, arr) {
  if (arr[i + 2]) {
    let result = curr + arr[i + 1] + arr[i + 2];
    val.push(result);
  }
  return val;
}
const threeValueWindow = input.reduce(threeValueArr, []);

const result = countGreaterValues(threeValueWindow);

console.log("the number of greater values are", result);
