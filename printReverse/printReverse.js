const before = Date.now()

// normal way:
const printReverse = (min, max) => {
    let array = []

    for (let i = max - 1; i > min; i--) {
        array.push(i)
    }

    return array
}



console.log(printReverse(1, 10000000))

const after = Date.now()

console.log(after - before + ' ms')