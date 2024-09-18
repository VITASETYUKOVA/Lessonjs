let arr = [ 1, 3, 'string', true, 545,'world'];

function arithmeticMean(arr) {
    let sum = 0;
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
             sum += arr[i];
             res++;   
        }
    } 
        return res > 0 ? sum / res : 0;
}      
 
console.log (arithmeticMean(arr));