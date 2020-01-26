import Person from "../../main/practice_6/person.js";
class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    let prefix = (new Person(this.name, this.age)).introduce() + ' I am a Teacher. ';
    if (this.klass) {
      return prefix + `I teach Class ${this.klass}.`;
    }
    else {
      return prefix + `I teach No Class.`;
    }
  }
}

module.exports = Teacher;
