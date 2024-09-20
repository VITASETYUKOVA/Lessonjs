function numericСycle() {
  let input;
  let attempts = 10; 

  for (let i = 0; i < attempts; i++) {
      input = prompt("Введіть число більше 100:");
      
      if (input > 100) {
          break; 
      }

      if (input <= 100) {
          alert("Число повинно бути більше 100");
      }
  }

  console.log("Останнє введене число: " + input);
}

numericСycle();
