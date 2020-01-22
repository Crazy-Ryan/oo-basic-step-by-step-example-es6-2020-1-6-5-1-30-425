import Person from "../../main/practice_1/person.js";
class Worker extends Person {
  introduce() {
    return "I am a Worker. I have a job.";
  }
}

module.exports = Worker;
