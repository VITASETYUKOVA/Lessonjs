function removeElement(array, item) {
    return array.filter(function(element) {
      return element !== item; 
    });
  }
  
  const array = [1, 3, 4, 6, 2, 5, 7];
  const result = removeElement(array, 4); 
  
console.log(result); 
    
