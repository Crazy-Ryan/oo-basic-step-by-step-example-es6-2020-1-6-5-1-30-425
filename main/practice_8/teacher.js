import Person from "../../main/practice_8/person.js";
class Teacher extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    let prefix = (new Person(this.id, this.name, this.age)).introduce() + ' I am a Teacher. ';
    if (this.klass) {
      return prefix + `I teach Class ${this.klass.number}.`;
    }
    else {
      return prefix + `I teach No Class.`;
    }
  }
}

module.exports = Teacher;

