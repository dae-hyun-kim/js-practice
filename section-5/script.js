/*
Function Constructor

const john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
}

*/

/*

const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth)
}

Person.prototype.lastName = "Smith";

const john = new Person("John", 1990, "teacher");

const jane = new Person("Jane", 1969, "designer");

const mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

//Object.create

const personProto = {
  calculateAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
}

const john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";
