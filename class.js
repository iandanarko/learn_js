class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type
  }

  getName() {
    return this.name;
  } 
}

let dog = new Animal("Doggie", "Dog");
console.log(dog.getName);