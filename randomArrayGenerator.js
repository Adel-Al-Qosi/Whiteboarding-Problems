const fs = require('fs');

function generateRandomNumbers(count) {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(Math.floor(Math.random() * 1000000));
  }
  return randomNumbers;
}


const randomArray = generateRandomNumbers(1000000);

fs.writeFileSync('randomArray.json', JSON.stringify(randomArray));
