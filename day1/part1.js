const { input } = require('./input')

const greaterValueCount = input.reduce((val, curr, i, arr) => (curr > arr[i - 1] ? val + 1 : val), 0);

console.log('the number of greater values are',  greaterValueCount)
