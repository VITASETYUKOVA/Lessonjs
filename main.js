let N = parseInt(prompt(""));
let result = "";

for (let i = 1; i <= 100; i++) {
    if (i * i  <= N){
        result += i + " ";
    } else {
        break;
    }
}
console.log (result);

