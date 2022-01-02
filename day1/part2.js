const { input } = require('./input')

function threeValues(val, curr, i, arr) {
    if (arr[i + 2]) {
        let result = curr + arr[i + 1] + arr[i + 2]
        val.push(result)
    }
    return val
}
const threeValueWindow = input.reduce(threeValues, [])

console.log('this is the array of windows', threeValueWindow)
console.log('this is the length of the window array', threeValueWindow.length)
console.log('this is the length of input', input.length)

const greaterValueCount = threeValueWindow.reduce((val, curr, i, arr) => (curr > arr[i - 1] ? val + 1 : val), 0);

console.log('the number of greater values are', greaterValueCount)