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
