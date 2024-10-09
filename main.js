const btnTodo = document.querySelector('#btnTodo'); 
const goTo = document.querySelector('#goTo');

let userInput = "";  

btnTodo.addEventListener('click', () => {
    userInput = prompt('Input address:');  
});

goTo.addEventListener('click', () => {
    if (userInput) {  
        location.assign(userInput);  
    } else {
        alert('Please, wright address before assign.');
    }
});
