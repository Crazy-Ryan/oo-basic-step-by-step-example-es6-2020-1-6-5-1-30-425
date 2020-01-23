import Person from "../../main/practice_1/person.js";
class Worker extends Person {
  introduce() {
    return (new Person(this.name, this.age)).introduce() + ' ' + `I am a Worker. I have a job.`;
  }
}

module.exports = Worker;

