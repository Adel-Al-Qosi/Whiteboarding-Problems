const before = Date.now()

const logBetweenStepper = (lowNum, highNum, step) => {
    let array = []

    for (let i = lowNum; i <= highNum; i += step) {
        array.push(i)
    }

    return array
}

console.log(logBetweenStepper(0, 10000, 1))
console.log(logBetweenStepper(0, 100000, 5))

const after = Date.now()

console.log(after - before + 'ms')