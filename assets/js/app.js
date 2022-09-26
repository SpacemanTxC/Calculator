console.log("Welcome");
console.log("Please Select Calculator Option");

const prompt = require("prompt-sync")({ sigint: true });
const userInput = prompt("1:Add 2:Subtract 3:Multiple 4: Divide ");

switch(userInput)
{
    case "1":
        const firstNumberAdd = prompt("Enter First Number to Add ");
        const secondNumberAdd = prompt("Enter Second Number to Add ");
        console.log("Total: " + (Number(firstNumberAdd) + Number(secondNumberAdd)));
        break;
    case "2": 
        const firstNumberSub = prompt("Enter First Number to Subtract ");
        const secondNumberSub = prompt("Enter Second Number to Subtract ");
        console.log("Total: " + (Number(firstNumberSub) - Number(secondNumberSub)));
        break;
    case "3": 
        const firstNumberMult = prompt("Enter First Number to Multiple ");
        const secondNumberMult = prompt("Enter Second Number to Multiple ");
        console.log("Total: " + (Number(firstNumberMult) * Number(secondNumberMult)));
        break;
    case "4":
        const firstNumberDiv = prompt("Enter First Number to Divide ");
        const secondNumberDiv = prompt("Enter Second Number to Divide ");
        console.log("Total: " + (Number(firstNumberDiv) / Number(secondNumberDiv)));
        break;
    default:
        console.log("Please Select a Number 1 - 4 ");

}
