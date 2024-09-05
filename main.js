let stringNumber = "10369";
let realNumber = +stringNumber;

let fifthNumber = realNumber % 10;
let fourthNumber = Math.floor(realNumber % 100 / 10);
let thirdNumber = Math.floor(realNumber % 1000 / 100);
let secondNumber = Math.floor(realNumber % 100 / 100);
let firstNumber = Math.floor(realNumber / 10000);

console.log(realNumber);
console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`);
