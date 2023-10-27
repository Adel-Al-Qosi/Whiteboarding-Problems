const before = Date.now()

const myIndexOf = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i
    }

    return -1
}

console.log(myIndexOf([1,2,3,4],4))
console.log(myIndexOf([5,6,7,8],2))

const after = Date.now()

console.log(after - before + 'ms')

// The time complexity of this function is between O(1), and O(n) depending on the place of the target and the length of the array
