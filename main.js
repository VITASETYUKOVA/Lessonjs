let userInputNumber = prompt("Enter a three-digit number", "123");
let digitNumber = +userInputNumber;

let thirdNumber = digitNumber % 10;
let secondNumber = Math.floor(digitNumber % 100 / 10);
let firstNumber = Math.floor(digitNumber % 1000 / 100);

if (firstNumber === secondNumber  && secondNumber === thirdNumber) {
    console.log("Input numbers are equal");
} else {
    console.log("Input numbers are not equal");
}

if (firstNumber === secondNumber ) {
    console.log("Some numbers are equal");
} else if (firstNumber === thirdNumber ) {
    console.log("Some numbers are equal");
} else if (secondNumber === thirdNumber ) {
    console.log("Some numbers are equal");
} else {
    console.log("Input numbers are not equal");
}

