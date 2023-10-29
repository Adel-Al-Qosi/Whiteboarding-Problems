const abbreviate = sentence => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let arrayOfWords = sentence.split(' ')

    let newWords = arrayOfWords.reduce((array, word) => {
        let newWord = ''
        if (word.length > 4) {
            for (let i = 0; i < word.length; i++) {
                if (!vowels.includes(word[i])) {
                    newWord += word[i]
                }
            }
        } else {
            newWord += word
        }
        array.push(newWord)
        
        return array
    }, [])

    let newSentence = newWords.join(' ')

    return newSentence
}

console.log(abbreviate('how are you'))