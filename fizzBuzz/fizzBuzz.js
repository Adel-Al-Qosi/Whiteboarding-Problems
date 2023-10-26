const before = Date.now()

// normal way:
const fizzBuzz = (max) => {
    let result = []
    for (let i = 3; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) continue;
        else if (i % 3 === 0 || i % 5 === 0) result.push(i);
    }

    return result;
}

console.log(fizzBuzz(1000000))
console.log(fizzBuzz(1000005))

const after = Date.now()

console.log(after - before + ' ms')

