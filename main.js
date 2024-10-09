const newTable = document.querySelector('#myTable'); 

for (let i = 0; i < 10; i++) {
  const newTr = document.createElement('tr'); 

  for (let j = 0; j < 10; j++) {
    const newTd = document.createElement('td'); 
    newTr.appendChild(newTd); 
  }

  newTable.appendChild(newTr); 
}


