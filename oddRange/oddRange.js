const before = Date.now()

const oddRange = end => {
    let result = []
    for (let i = 1; i <= end; i += 2) {
        result.push(i)
    }

    return result
}




console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]

const after = Date.now()

console.log(after - before + ' ms')