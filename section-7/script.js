//  LECTURE: LET AND CONST

/*
// ES5
var name5 = "Jane Smith";
var age5 = 23;

name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Jane Smith";
let age6 = 23;

name6 = "Jane Miller";
console.log(name6);

*/

/*

// ES5

function driversLicence(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }
  console.log(`${firstName}, born in ${yearOfBirth}, is now officially allowed to drive a car.`);
}

driversLicence(true);

// ES6

function driversLicence(passedTest) {

  let firstName = "John";
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = "John";
  }
  console.log(`${firstName}, born in ${yearOfBirth}, is now officially allowed to drive a car.`);
}

driversLicence(true);

*/

/*
let i = 23

for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.log(i)

*/

// LECTURE: BLOCKS AND IFFE

/*

// ES5
(function() {
  var c = 3;
})();


// ES6

{
  const a = 1;
  let b = 2;
  var c = 3
}

console.log(c)

*/


/*
// LECTURE: STRINGS

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;
function calcAge(year) {
  return 2016 - year;
}

// ES5
console.log("This is " + firstName + " " + lastName+ ". He was born in " + yearOfBirth + ". Today, he is " + calcAge(yearOfBirth) + " years old.");


// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`;

console.log(n.startsWith("J"));
console.log(n.endsWith("h"));
console.log(n.includes(" "));
console.log(`${firstName} `.repeat(5))

*/

/*
// LECTURE: ARROW FUNCTIONS

const years = [1990, 1965, 1982, 1937];

// ES5

var ages5 = years.map(function(el) {
  return 2020 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map((el) => {
  return 2020 - el
})

ages6 = years.map((el, index) => {
  return `Age Element ${index + 1}: ${2020 - el}`
});

console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`
})

console.log(ages6)

*/

/*

// LECTURE: ARROW FUNCTIONS 2

// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {

    var self = this;

    document.querySelector(".green").addEventListener("click", function() {
      var str = "This is box number " + self.position + " and it is " + self.color;
      alert(str)
    })
  }
}

// ES6

const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {


    document.querySelector(".green").addEventListener("click", () => {
      const str = `This is box number ${this.position} and it is ${this.color}`
      alert(str)
    })
  }
}


const box66 = {
  color: "green",
  position: 1,
  clickMe: function() {


    document.querySelector(".green").addEventListener("click", () => {
      const str = `This is box number ${this.position} and it is ${this.color}`
      alert(str)
    })
  }
}
box66.clickMe();

*/

/*

function Person(name) {
  this.name = name;
}

// ES5

Person.prototype.myFriends5 = function(friends) {

  var arr = friends.map(function(el) {
    return this.name + " is friends with " + el;
  }.bind(this))
  console.log(arr)
}


// ES6

Person.prototype.myFriends6 = function (friends) {

  const arr = friends.map((el) =>  {
    return `${this.name} is friends with ${el}`;
  })
  console.log(arr)
}

const friends = ["Bob", "Jane", "Mark"];
new Person("Dae").myFriends6(friends);

*/


/*
// LECTURE: DESTRUCTURING

// ES5
var john = ["John", 26];

// var name = john[0];
// var age = john[1];

// ES6

const [name, age] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "John",
  lastName: "Smith",
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement)

*/

/*
// LECTURE: ARRAYS

const boxes = document.querySelectorAll(".box");

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "dodgerblue"
})

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => {
  cur.style.backgroundColor = "dodgerblue"
})

// ES5

for (var i = 0; i < boxesArr5.length; i++) {

  if (boxesArr5[i].className === "box blue") {
    break;
  }

  boxesArr5[i].textContent = "I Changed to blue!";
}


// ES6
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }

  cur.textContent = "I changed to blue"
}


// ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6

console.log(ages.findIndex(cur => {
  return cur >= 18;
})
)

console.log(ages.find((cur) => {
  return cur >= 18;
}))

*/


/*
// LECTURE: SPREAD OPERATOR

function addFourAges (a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");

const all = [h, ...boxes];

Array.from(all).forEach(cur => {
  cur.style.color = "purple"
})

*/

/*
// LECTURE: REST PARAMETERS

// ES5
function isFullAge5() {
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log((2020 - cur) >= 18);
  })
}

// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
  years.forEach((cur) => {
    console.log((2020 - cur) >= 18);
  })
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

*/

/*
// LECTURE: DEFAULT PARAMETERS

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = "Smith" : lastName;

  nationality === undefined ? nationality = "American" : nationality

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality
}

var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "American") {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality
}

var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");

*/

/*
// LECTURE: MAPS

const question = new Map();
question.set("question", "What is the official name of the latest major JavaScript version?");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct Answer");
question.set(false, "Wrong, Please try again!");

console.log(question.get("question"));
console.log(question.size);

if (question.has(4)) {
  console.log("Answer 4 is here")
}

// question.forEach((value, key) => {
//   console.log(`This is the ${key}, and it's set to ${value}`)
// })

for (let [key, value] of question.entries()) {
  if (typeof(key) === "number") {
    console.log(`Answer ${key}: ${value}`)
  }
}

*/


/*
// LECTURE: CLASSES

// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age)
}

var john5 = new Person5("John", 1990, "Teacher");

// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
  }

  calculateAge() {
    const age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log("Hey there!")
  }
}

const john6 = new Person6("John", 1990, "teacher");
Person6.greeting();

*/


/*
// LECTURE: CLASSES WITH SUBCLASSES

// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age)
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this. name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);

johnAthlete5.calculateAge();

*/

// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


/*  CODING CHALLENGE: MY SUBMISSION


class Parks {
  constructor(name, buildYear, numOfTrees, parkArea) {
    this.name = name;
    this.buildYear = buildYear;
    this.numOfTrees = numOfTrees;
    this.parkArea = parkArea
  }

  calculateDensity() {
    const treeDensity = this.numOfTrees / this.parkArea;
    console.log(`${this.name} has a tree density of ${treeDensity} trees per mile.`)
  }

  calculateAge() {
    const age = new Date().getFullYear() - this.buildYear;
    return age;
  }
}

class Streets {
  constructor(name, buildYear, length, size = 3) {
    this.name = name;
    this.buildYear = buildYear;
    this.length = length;
    this.size = size;
  }
}

const parks = [new Parks("Green Park", 1983, 1200, 4), new Parks("National Park", 1952, 542, 6), new Parks("Oak Park", 1990, 700, 5)];
const streets = [new Streets("Ocean Avenue", 1999, 3, 2), new Streets("Evergreen Street", 2008, 2, 1), new Streets("4th Street", 2015, 1), new Streets("Sunset Blvd", 1982, 10, 5)]


const getParksReport = function() {
  console.log("----PARKS REPORT----")
  let sumAges = 0;
  let parkAbove1000 = null;
  parks.forEach((cur) => {
    cur.calculateDensity();
    sumAges = sumAges + cur.calculateAge();
    if (cur.numOfTrees > 1000) {
      parkAbove1000 = cur.name
    }
  });
  const averageAge = sumAges/parks.length;
  console.log(`Our ${parks.length} parks have an average age of ${averageAge} years.`)
  console.log(`${parkAbove1000} has more than 1000 trees.`)
}

const getStreetsReport = function() {
  console.log("----STREETS REPORT----");
  let sumLength = 0;
  let currentYear = new Date().getFullYear();
  streets.forEach((current) => {
    sumLength = sumLength + current.length;
    let sizeClassification = null;
    if (current.size === 1) {
      sizeClassification = "tiny"
    } else if (current.size === 2) {
      sizeClassification = "small"
    } else if (current.size === 3) {
      sizeClassification = "normal"
    } else if (current.size === 4) {
      sizeClassification = "big"
    } else if (current.size === 5) {
      sizeClassification = "huge"
    }
    console.log(`${current.name}, built in ${currentYear - current.buildYear}, is a ${sizeClassification} street.`)
  })
  console.log(`Our ${streets.length} streets have a total length of ${sumLength} miles, with an average length of ${sumLength/streets.length} miles`);
}


getParksReport();
getStreetsReport();

*/


// CODING CHALLENGE: INSTRUCTOR SUBMISSION


class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}


class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; //km2
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}


class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
new Park('National Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('4th Street', 2015, 0.8),
new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {

  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];

}


function reportParks(p) {

  console.log('-----PARKS REPORT-----');

  // Density
  p.forEach(el => el.treeDensity());

  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // Which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);

}


function reportStreets(s) {

  console.log('-----STREETS REPORT-----');

  //Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

  // CLassify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
