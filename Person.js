class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
    hello = function () {
      return `Hello World, I'm ${this.name}, I'm ${this.age} years old.`;
    };
  }
}
