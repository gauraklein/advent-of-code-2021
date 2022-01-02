const { input } = require('./part1Input')

const greaterValueCount = input.reduce((total, curr, i, arr) => (curr > arr[i - 1] ? total + 1 : total), 0);

console.log('the number of greater values are',  greaterValueCount)
