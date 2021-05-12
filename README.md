
### Closure

1. In your own words, define closure (1-2 sentences).
2. Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

* a. Where is closure used in this code? How can you tell?
* b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
* c. What is the lexical scope of `newRoll`? this might help https://stackoverflow.com/questions/1047454


3. Write a function that would allow you to do this using a closure.

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```
