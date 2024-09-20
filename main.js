function createSum() {
  let sum = 0;
    
  return function(num){
   sum += num ;
   return sum;
  }
}

const myCounter = createSum();

console.log(myCounter(4)); 
console.log(myCounter(6)); 
console.log(myCounter(10)); 
console.log(myCounter(7));
