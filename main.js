let number = parseInt(prompt(""));
let count = 0;
  
for (let i = 1; i <= number; i++) {
    if (number % i === 0){
       count ++;
    }
    if (count > 2){
        break;
    }
}

if ( count === 2) {
    console.log( number + "є простим числом.");
} else {
    console.log (number + " не є простим числом." );
}
