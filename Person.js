//Test Class using person

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const person = new Person('Armand', 'B20', 50);
  console.log(person.fullName()); 
  
  person.age = 35;
  console.log(person.fullName()); 
  