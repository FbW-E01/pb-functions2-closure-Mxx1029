
// ### Closure

// 1. In your own words, define closure (1-2 sentences).
// closure defines a function that can access values of variables that are outside its own scope, that would normally been already erased from the computer's memory after the function has been run

// 2. Study the following code, then answer the questions below.

function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.ceil(Math.random() * 6); // here was a mistake, with Math.floor(), you get a number between 0 and 5, with Math.ceil(), you get one between 1 and 6
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");
const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();
zoesRoll();
zoesRoll();

// * a. Where is closure used in this code? How can you tell?
//the inner function can access the parameter name from the outer function and use it to console.log its value, when the function is calles

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
// the name variable will always be the same, newRoll will change, as it's value is given by a Math.random() method call

// * c. What is the lexical scope of `newRoll`? this might help https://stackoverflow.com/questions/1047454
// newRoll can only be accessed by calling dansRoll(); zoesRoll() or personalDice(<string>)() - in the function scope, which is nested scope or lexcial scope


// 3. Write a function that would allow you to do this using a closure.

const createBase = (number) => {
    const baseNum = number;
    return function(num) {
        console.log(num + baseNum);
    };
};

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

