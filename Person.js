class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  hello() {
    console.log(
      `Hello World, my name it ${this.name}, I'm ${this.age} years old.`
    );
  }
}
