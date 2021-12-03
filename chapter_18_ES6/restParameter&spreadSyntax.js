//some modern features: let&const, async&await, promises, arrow functions, classes, destructuring, etc.

//REST PARAMETER. it can be use when we don't know how many different arguments we are going to pass in and we want to bundle them up into a single array
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};
const result = double(2, 4, 6, 8, 10);
console.log(result);

//SPREAD SYNTAX (ARRAYS). spread out an array into its individual components

const people = ["martah", "grecia", "isa"];
console.log(people);
console.log(...people);

const members = ["alex", "richard", ...people];
console.log(members);

//SPREAD SYNTAX (OBJECTS)
const person = { name: "nancy", ege: 3102, job: "best women" };
const personClone = { ...person, location: "Malmö" };
console.log(personClone);
