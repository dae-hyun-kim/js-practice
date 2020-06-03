/*

                        //Function Constructor//

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

                  //Object.create//

/*

const personProto = {
  calculateAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
}

const john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

const jane = Object.create(personProto, {
  name: { value: "Jane"},
  yearOfBirth: { value: 1969},
  job: { value: "designer"}
})

*/

                        // Primitives vs Objects //
/*

let a = 23;
let b = a;
a = 46;

console.log(a)
console.log(b)


                        // Objects
const obj1 = {
  name: "John",
  age: 26
};

const obj2 = obj1;
obj1.age = 30;

console.log(obj1.age)
console.log(obj2.age)


                        // Functions
const age = 27;
const obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a,b) {
  a = 30;
  b.city = "San Francisco"
}

change(age, obj);
console.log(age);
console.log(obj.city)

*/

                        // Passing Functions as arguments

/*
const years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  const arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }

  return arrResult;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18
}

function heartRate(el) {
  if (el >= 18 && el <= 81) {
    return parseInt(206.9 - (0.67 * el))
  } else {
    return -1
  }
}

const ages = arrayCalc(years, calculateAge);

const fullAges = arrayCalc(ages, isFullAge);

const rates = arrayCalc(ages, heartRate);

console.log(ages);
console.log(fullAges);
console.log(rates)

*/

                      // Functions returning functions

/*
function interviewQuestion(job) {
  if (job === "designer") {
    return (name) => {
      console.log(name + ", can you please explain what UX design is?");
    }
  } else if  (job === "teacher") {
    return (name) => {
      console.log("What subject do you teach, " + name);
    }
  } else {
    return (name) => {
      console.log(`Hello. ${name}, what do you do?`);
    }
  }
}

const teacherQuestion = interviewQuestion("teacher");
const designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");
designerQuestion("Jane");
designerQuestion("Mark");

interviewQuestion("teacher")("Mark");
*/


                     // Immediately Invoked Function Expression (IIFE)

/*
function game() {
  let score = Math.random() * 10;
  console.log(score >= 5);
}

game();


(function() {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodLuck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

*/


                      // Closures

/*
function retirement(retirementAge) {
  return (yearOfBirth) => {
    const a = " years left until retirement";
    let age = 2020 - yearOfBirth;
    console.log((retirementAge - age) + a)
  }
}

const retirementUS = retirement(66);
retirementUS(1990);

const retirementGermany = retirement(65);
retirementGermany(1990);

const retirementIceland = retirement(67);
retirementIceland(1990)

//retirement(66)(1990);
*/
/*
function interviewQuestion(job) {
  if (job === "designer") {
    return (name) => {
      console.log(name + ", can you please explain what UX design is?");
    }
  } else if (job === "teacher") {
    return (name) => {
      console.log("What subject do you teach, " + name);
    }
  } else {
    return (name) => {
      console.log(`Hello. ${name}, what do you do?`);
    }
  }
}

*/

/*
function interviewQuestions(job) {
  return (name) => {
    if (job === "designer") {
    console.log(`${name}, can you please explain what UX design is?`);
    } else if (job === "teacher") {
    console.log(`What subject do you teach, ${name}?`);
  } else {
    console.log(`Hello, ${name}, what do you do?`)
  }
}
}



interviewQuestions("designer")("John");

const teacherQuestion = interviewQuestions("teacher");
teacherQuestion("James")

*/

                      // Bind, Call, and Apply

const john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(`Good ${timeOfDay}, Ladies and Gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`);
    } else if (style === "friendly") {
      console.log(`Hey! What's up?. I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
    }
  }
}

const emily = {
  name: "Emily",
  age: 35,
  job: "designer"
}


john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon")
