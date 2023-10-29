const mirrorArray = array => {
    for (let i = array.length - 1; i >= 0; i--) {
        array.push(array[i])
    }

    return array
}

console.log(mirrorArray([1, 2, 3]))