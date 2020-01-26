import Person from "../../main/practice_1/person.js";
class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return (new Person(this.name, this.age)).introduce() + ' ' + `I am a Student. I am at Class ${this.klass.number}.`;
  }
}

module.exports = Student;