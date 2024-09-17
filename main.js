let str = "hello world";
let arrayToDelete = ['l' , 'd'];

function eraseFromStr(str, arrayToDelete) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (!arrayToDelete.includes(str[i])){
             newStr += str[i];
        }
    } 
        return newStr;
 }

console.log (eraseFromStr(str, arrayToDelete));
