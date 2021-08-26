const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc). Sort
// Remove any integers greater than 19. Filter
// Multiply each remaining number by 1.5 and then subtract 1. math?
// Then output (either in the DOM or the console) the sum of all the resulting numbers. console.log

const chainMethod = integers
  .sort((a, b) => b - a)
  .filter((integer) => {
    let aboveNineteen = false;
    if (integer < 19) {
      aboveNineteen = true;
    }
    return aboveNineteen;
  })
  .map((integer) => {
    return integer * 1.5 - 1;
  })
  .reduce((currentTotal, nextValue) => currentTotal + nextValue, 0);

console.log(chainMethod);
