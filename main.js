const myUser = {
  name: 'John',
  age: 29,
  city: 'Kharkiv',
  
  getData: function() {
    console.log(`Hello, my name is ${this.name}, my age is ${this.age}, my city is - ${this.city}`);
  }
};

myUser.getData(); 
