const { input } = require('./input')

const gettingDeeper = (arr) => {
    let deeperCount = 0
    for (i = 0; i < arr.length; i++) {
        if (i > 0) {
            let currentDepth = arr[i]
            let previousDepth = arr[i - 1]

            if (currentDepth > previousDepth) {
                deeperCount++
            }
        }
    }
    return deeperCount
}

console.log('the number of deeper values are',  gettingDeeper(input))
