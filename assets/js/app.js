
//Building a Calculator
// Steps 1: Create List of basic functions for Calculator
// Step 2: Create Method for each operation in Calculator
// Step 3: Test in Console

// function add(x, y){
//   return x + y;
// }
//
// function sub(x, y){
//   return x - y;
// }
//
// function mult(x, y){
//   return x * y;
// }
//
//
// function div(x, y){
//   return x / y;
// }
// basic 2 input works


// Example of node terminal input
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// readline.question('Who are you?', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

//Example 2
//NPM package that can prompt question in terminal
const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
