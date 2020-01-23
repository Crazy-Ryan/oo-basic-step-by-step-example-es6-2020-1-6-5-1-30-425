import Person from "../../main/practice_7/person.js";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    if (this.klass) {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass}.`;
    }
    else {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach No Class.`;
    }
  }
  introduceWith() {
    if (this.klass) {
      return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach Class ${this.klass}.`;
    } 
  }
}

module.exports = Teacher;
