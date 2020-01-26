class Class {
  constructor(number) {
    this.number = number;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
  assignLeader(student) {
    if (this.number === student.klass.number) {
      this.leader = student;
      if (this.assignListeningTeacher) {
        this.assignListeningTeacher.assignResponse(student);
      }
    }
    else {
      console.log("It is not one of us.");
    }
  }
  appendMember(student) {
    student.klass = this;
    if (this.joinListeningTeacher) {
      this.joinListeningTeacher.joinResponse(student);
    }
  }
  isIn(student) {
    if (student.klass === this) {
      return true;
    }
    else {
      return false;
    }
  }
  registerJoinListener(teacher) {
    this.joinListeningTeacher = teacher;
  }
  registerAssignLeaderListener(teacher) {
    this.assignListeningTeacher = teacher;
  }
}

module.exports = Class;