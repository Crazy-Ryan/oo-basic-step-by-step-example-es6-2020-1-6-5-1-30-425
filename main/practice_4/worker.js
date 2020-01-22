import Person from "../../main/practice_1/person.js";
class Worker extends Person {
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
  }
}

module.exports = Worker;

