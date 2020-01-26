import Person from "../../main/practice_6/person.js";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    let prefix = (new Person(this.name, this.age)).introduce() + ' I am a Teacher. ';
    if (this.klass) {
      return prefix + `I teach Class ${this.klass.number}.`;
    }
    else {
      return prefix + `I teach No Class.`;
    }
  }
  introduceWith(student) {
    let prefix = (new Person(this.name, this.age)).introduce() + ' I am a Teacher. ';
    if (student.klass.number === this.klass.number) {
      return prefix + `I teach ${student.name}.`;
    }
    else {
      return prefix + `I don't teach ${student.name}.`;
    }
  }
}

module.exports = Teacher;
