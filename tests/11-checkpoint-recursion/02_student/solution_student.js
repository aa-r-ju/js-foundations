/* eslint-disable no-unused-vars */
class Student {
  constructor(name, email) {
    this.name = name[0].toUpperCase() + name.slice(1);
    this.email = email;
    this.grades = [];
  }
  addGrade(num) {
    this.grades.push(num);
    return this;
  }

  getGradeAverage() {
    let countAll = 0;
    for (let i = 0; i < this.grades.length; i++) {
      countAll += this.grades[i];
    }
    return countAll / this.grades.length;
  }
}
class Alumni extends Student {
  constructor(name, email, year) {
    super(name, email);
    this.year = year;
  }

  getGraduationYear() {
    return this.year;
  }
}
