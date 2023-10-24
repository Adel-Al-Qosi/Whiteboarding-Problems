let cache = []

const logBetween = (lowNum, highNum) => {

    if (lowNum > highNum) return []

    if (!cache.includes(lowNum) && !cache.includes(highNum)) {
        for (let i = lowNum; i <= highNum; i++) {
            cache.push(i)
        }
    } else if (cache.includes(lowNum) && !cache.includes(highNum)) {
        for (let i = cache[cache[cache.length - 1]]; i <= highNum; i++) {
            cache.push(i)
        }
    } else if (!cache.includes(lowNum) && cache.includes(highNum)) {
        for (let i = lowNum; i < cache[0]; i++) {
            cache.unshift(i)
        }
    } else {
        for (let i = lowNum + 1; i < highNum; i++) {
            if (!cache.includes(i)) {
                cache.splice(cache.indexOf(i - 1), 1, i - 1, i)
            }
        }
    }

    console.log(cache)
    return cache.slice(cache.indexOf(lowNum), cache.indexOf(highNum) + 1)
}

console.log(logBetween(-1, 2))
console.log(logBetween(14, 6))
console.log(logBetween(4, 6))
console.log(logBetween(1, 5))
console.log(logBetween(0, 20))


// This function is O(n) on space-time complexity. Can we make it better? let's see:
// it's still the same time 