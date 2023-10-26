const before = Date.now()

// the fastest way I can think of:
const isPrime = number => {
    let firstPrimes = [2, 3, 5, 7]

    if (firstPrimes.includes(number)) return true

    let squareRoot = Math.sqrt(number)

    if (parseInt(squareRoot) < squareRoot) {
        for (let i = 0; i < firstPrimes.length && parseInt(squareRoot) >= firstPrimes[i]; i++) {
            if (number % firstPrimes[i] === 0) return false
        }
    } else {
        for (let i = 0; i <= firstPrimes.indexOf(squareRoot); i++) {
            if (number % firstPrimes[i] === 0) return false
        }
    }

    return true
}


console.log(isPrime(2))
console.log(isPrime(10))
console.log(isPrime(11))
console.log(isPrime(9))
console.log(isPrime(2017))
console.log(isPrime(938))

const after = Date.now()

console.log(after - before + ' ms')
