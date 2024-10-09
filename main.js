const imgToChange = document.querySelector("#imgToChange");

const randomNumber = Math.floor(Math.random() * 9) + 1;

imgToChange.src = `./images/${randomNumber}.jpg`; 

console.log(imgToChange.src);

