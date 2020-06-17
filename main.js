// Your code here!
const colorCombinator = require ('./color-combinator.js')
const colorDeconstructor = require ('./color-deconstructor.js')


// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}

const color1 = getInput(0);
const color2 = getInput(1);

  if (!color1) {
    console.log( 'you need to enter a color')
  }

  if (!color2) {
    console.log(colorDeconstructor(color1))
  }

  if (color1, color2) {
    console.log(colorCombinator(color1,color2))
  }

