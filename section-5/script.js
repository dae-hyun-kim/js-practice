/*
Function Constructor

const john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
}

*/

const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = () => {
    console.log(2020 - this.yearOfBirth)
  }
}

const john = new Person("John", 1990, "teacher");
