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
}

Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth)
}

const john = new Person("John", 1990, "teacher");

const jane = new Person("Jane", 1969, "designer");

const mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
