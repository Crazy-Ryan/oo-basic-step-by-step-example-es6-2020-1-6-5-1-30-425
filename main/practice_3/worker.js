class Worker {
  constructor(name, age, klass) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return "I am a Worker. I have a job.";
  }
}

module.exports = Worker;
