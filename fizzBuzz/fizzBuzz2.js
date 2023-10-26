const before = Date.now()

// caching way:
const cache = []

const fizzBuzz = (max) => {

    if (max < 3) return []

    if (cache.length === 0) {
        for (let i = 3; i <= max; i++) {
            if (i % 3 === 0 && i % 5 === 0) continue;
            else if (i % 3 === 0 || i % 5 === 0) {
                cache.push(i)
            };
        }

    } else if (max <= cache[cache.length - 1]) {

        return cache.slice(0, cache[cache.indexOf(max) + 1])
    } else {
        for (let i = cache[cache.length - 1] + 1; i <= max; i++) {
            if (i % 3 === 0 && i % 5 === 0) continue;
            else if (i % 3 === 0 || i % 5 === 0) cache.push(i);
        }
    }

    return cache.slice(0, cache[cache.indexOf(max) + 1])
}

console.log(fizzBuzz(1000000))
console.log(fizzBuzz(1000005))

const after = Date.now()

console.log(after - before + ' ms')