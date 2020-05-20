// *********************************************************************
//Notes and Practice
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
// const prompt = require('prompt-sync')();
//
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

// Example 3 numbers
// const prompt = require('prompt-sync')();
//
// const num1 = prompt('Enter a number: ');
// const num2 = prompt('Enter a second number: ');
// //convert to int from  string
// function add(x, y){
//   let number1 = parseInt(x);
//   let number2 = parseInt(y);
// // value
//   return number1 + number2;
//
// };
// //call and then show sum
// console.log(add(num1, num2));
//******************************************************************


// Need to prompt what the user whats to do add, sub, mult, div
// Terminal Calculator I created

// npm package required
const prompt = require('prompt-sync')();

// var to store the value of the first question asked
const firstQ = prompt('Calculator: Enter add, sub for subtract, div for divide, or mult for multiple.  ');

//Method to check what the user put in the terminal
function checkResponce(Q1){

// Lower case the value to be used in method
  let question1 = Q1.toLowerCase();

// if statement that checks the input and throws error
    if(question1 == "add"){
      // Prompt question to add
        const firstAddQuestion = prompt('Enter first number to add :  ');
        const secondAddQuestion = prompt('Enter second number to add :  ');
      // add method
          function add(x, y){
            let number1 = parseInt(x);
            let number2 = parseInt(y);

            return number1 + number2;
          };
          // print value
          console.log(add(firstAddQuestion, secondAddQuestion));

    }else if(question1 == "sub"){
      // Prompt question to subtract
      const firstSubQuestion = prompt('Enter first number to subtract :  ');
      const secondSubQuestion = prompt('Enter second number to subtract :  ');
      // subtract method
        function sub(x, y){
          let number1 = parseInt(x);
          let number2 = parseInt(y);

          return number1 - number2;
        };
        // print value
        console.log(sub(firstSubQuestion, secondSubQuestion));

    }else if(question1 == "div"){
      // Prompt question to divide
      const firstDivQuestion = prompt('Enter first number to divide :  ');
      const secondDivQuestion = prompt('Enter second number to divide :  ');
      // divide method
        function div(x, y){
          let number1 = parseInt(x);
          let number2 = parseInt(y);

          return number1 / number2;
        };
        //print value
        console.log(div(firstDivQuestion, secondDivQuestion));

    }else if(question1 == "mult"){
      // Prompt question to multiple
      const firstMultQuestion = prompt('Enter first number to multiple :  ');
      const secondMultQuestion = prompt('Enter second number to multiple :  ');
      // multiple method
        function mult(x, y){
          let number1 = parseInt(x);
          let number2 = parseInt(y);

          return number1 * number2;
        };
        // print value
        console.log(mult(firstMultQuestion, secondMultQuestion));

    }else{
      // throws error
      console.log("Error: incorrect input try program again.  ");
    };
};

// calls method with value from first prompted question
checkResponce(firstQ);
