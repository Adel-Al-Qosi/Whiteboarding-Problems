let cache = []

const logBetween = (lowNum, highNum) => {

    if (lowNum > highNum) return []

    if (!cache.includes(lowNum) && !cache.includes(highNum)) {
        if (cache[cache.length - 1] < lowNum) {
            for (let i = cache[cache.length - 1] + 1; i <= highNum; i++) {
                cache.push(i)
            }
        } else if (highNum < cache[0]) {
            for (let i = cache[0] - 1; i >= lowNum; i--) {
                cache.unshift(i)
            }
        } else {
            for (let i = lowNum; i <= highNum; i++) {
                cache.push(i)
            }
        }
    } else if (cache.includes(lowNum) && !cache.includes(highNum)) {
        for (let i = cache[cache[cache.length - 1]]; i <= highNum; i++) {
            cache.push(i)
        }
    } else if (!cache.includes(lowNum) && cache.includes(highNum)) {
        for (let i = lowNum; i < cache[0]; i++) {
            cache.unshift(i)
        }
    }

    return cache.slice(cache.indexOf(lowNum), cache.indexOf(highNum) + 1)
}

console.log(logBetween(-1, 2))
console.log(logBetween(14, 6))
console.log(logBetween(4, 6))
console.log(logBetween(1, 5))


// This function is O(n) on space-time complexity. Can we make it better? let's see:
// It's still the same time with the new code.
// Can we use linked lists to do the job? How would it be? nope, i tried it and it's a bad idea.
// How about trying caching again but with a different approach? yep, it's the one i needed. It's a Little faster now
// now it sometimes better in terms of time complexity, but takes more space. Does it worth it? I don't know.