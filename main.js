// Your code here!
const colorCombinator = require ('./color-combinator.js')
const colorDeconstructor = require ('./color-deconstructor.js')


// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}

const color1 = getInput(0);
const color2 = getInput(1);


function result() {
  if (color1 === undefined) {
    return 'you need to enter a color'
  }
  if (color2 === undefined) {
    const deconstructor = colorDeconstructor(color1)
    return deconstructor;
  }
  else {
    const combinator = colorCombinator(color1,color2)
    return combinator;
  }
}

const printResult = result()
console.log(printResult) 

