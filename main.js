const btnSubmit = document.querySelector('#btnSubmit'); 

let oldColor = false; 

btnSubmit.addEventListener('click', () => {
    if (oldColor) {
        btnSubmit.classList.remove('new'); 
        oldColor = false; 
    } else {
        btnSubmit.classList.add('new'); 
        oldColor = true; 
    }
});