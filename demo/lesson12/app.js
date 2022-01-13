const { stealRing, characters } = require('./characters');

const log = require('./characters');

// Если мы получили перемунную через require
// Она в этом скоупе ведет себя как константа!

//erro
characters = stealRing(characters, 'Frodo');

//good
let myChars = characters;
myChars = stealRing(myChars, 'Frodo');


for (const c of characters) {
  console.log(c);
}

// ---------------------------------------
const a = 1;
if (a > 0) {
  const log = require('./characters');
  log();
}
console.log("меньше нуля");

module.exports = { a };


