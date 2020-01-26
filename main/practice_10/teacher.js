import Person from "../../main/practice_8/person.js";
class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }
  introduce() {
    let prefix = (new Person(this.id, this.name, this.age)).introduce() + ' I am a Teacher. ';
    if (this.klasses) {
      return prefix + `I teach Class ${this.klasses.map(klass => klass.number).join(', ')}.`;
    }
    else {
      return prefix + `I teach No Class.`;
    }
  }
  isTeaching(student) {
    if(this.klasses.find(klass.isIn(student))) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Teacher;


