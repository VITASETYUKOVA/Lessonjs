const imgToChange = document.querySelector("#imgToChange");

const min = 1; 
const max = 9; 

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

imgToChange.src = `./images/${randomNumber}.jpg`; 

console.log(imgToChange.src);

