import Person from "../../main/practice_8/person.js";
class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    let prefix = (new Person(this.id, this.name, this.age)).introduce() + ' ' + `I am a Student. `;
    if (this.klass.leader === this) {
      return prefix + `I am Leader of Class ${this.klass.number}.`
    }
    else {
      return prefix + `I am at Class ${this.klass.number}.`
    }
  }
}

module.exports = Student;