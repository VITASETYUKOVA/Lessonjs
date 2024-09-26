let ladder = {
    current: 0,
  
    up: function () {
      this.current++; 
      return this;    
    },
  
    down: function () {
      this.current--; 
      return this;    
    },
  
    showStep: function () {
      console.log(this.current); 
      return this;               
    }
};
  
const actions = ['up', 'up', 'down'];
  
actions.filter(action => typeof ladder[action] === 'function') 
.forEach(action => ladder[action]()); 
  
ladder.current = 0; 
  
ladder.up().up().down().showStep(); 