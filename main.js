const userInfo = {};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+380\d{9}$/; 

function validateForm() {
    let isValid = true;

    userInfo.firstName = document.querySelector('#authname').value.trim();
    if (!userInfo.authname) {
        document.querySelector('#authnameError').innerHTML = "Ім'я це обов'язкове поле!";
        isValid = false;
    } else {
        document.querySelector('#authnameError').innerHTML = "";
    }

    userInfo.message = document.querySelector('#authmessage').value.trim();
    if (userInfo.message.length < 5) {
        document.querySelector('#authmessageError').innerHTML = "Повідомлення повинно містити не менше 5 символів!";
        isValid = false;
    } else {
        document.querySelector('#authmessageError').innerHTML = "";
    }

    userInfo.email = document.querySelector('#authmail').value.trim();
    if (!userInfo.email) {
        document.querySelector('#authmailError').innerHTML = "Email це обов'язкове поле!";
        isValid = false;
    } else if (!emailRegex.test(userInfo.email)) {
        document.querySelector('#authmailError').innerHTML = "Введіть валідний email!";
        isValid = false;
    } else {
        document.querySelector('#authmailError').innerHTML = "";
    }

    userInfo.phone = document.querySelector('#authphone').value.trim();
    if (!userInfo.phone) {
        document.querySelector('#authphoneError').innerHTML = "Номер телефону це обов'язкове поле!";
        isValid = false;
    } else if (!phoneRegex.test(userInfo.phone)) {
        document.querySelector('#authphoneError').innerHTML = "Введіть валідний номер телефону (+380XXXXXXXXX)!";
        isValid = false;
    } else {
        document.querySelector('#authphoneError').innerHTML = "";
    }

    if (isValid) {
        console.log(userInfo);
    }

    return isValid;
}

document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault(); 
    validateForm();
});