const before = Date.now()

const factorArray = (array, number) => {
    let result = []
    
    array.forEach(element => {
        if (number % element === 0) result.push(element)
    })

    return result
}

console.log(factorArray([2,3,4,5,6],20))
console.log(factorArray([2,3,4,5,6],35))
console.log(factorArray([10,15,20,25],5))

const after = Date.now()

console.log(after - before + 'ms')

// this function's time and space complexities are O(n).