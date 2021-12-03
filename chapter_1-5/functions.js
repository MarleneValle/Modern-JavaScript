// FUNCTION DECLARATION
// function greet(name) {
//   console.log(`Hello there ${name}`);
// }

// greet("Cecilia");

//FUNCTION EXPRESSION WHEN WE STORE FUNCTION INSIDE A VARIABLE (CONST)

// const speak = function (name = "Martina", time = "night") {
//   console.log(`Good ${time} ${name}`);
// }; // A FUNCTION EXPRESSION ALWAYS ENDS WITH SEMICOLON --ALWAYS--

// speak();
// speak("jepser", "morning");

//RETURN VALUE in a regular function
// const calcArea = function (radius) {
//   return 3.1416 * radius ** 2;
// };

//ARROW FUNCTION (MORE MODERN ADDITION: CLEANER AND SHORTER WAY TO WRITE FUNCTIONS)

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

//SHORTER WAY OF WRITTING ARROW FUNTION WHEN THEY HAVE ONLY ONE PARAMETER AND ONE RETURN
const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log(`are is ${area}`);

//PRACTICE

//pass the next regulars functions into arrow functions

//1
// const greet = function () {
//   return "hello, world";
// };
///////////ANSWER 1////
// const greet = () => "Hello, world";

// const result = greet();
// console.log(result);

//2
// const bill = function (products, tax) {
//   let total = 0;
//   for (i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

///////////ANSWER 1////

const bill = (products, tax) => {
  let total = 0;
  for (i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const total = bill([10, 15, 30], 0.2);
console.log(total);

//FUNCTION VS METHOD

const name = "shaun";

//functions

const greet = () => "hello, I am a function";

let resultFunction = greet();
console.log(resultFunction);

//method
const resultMethod = name.toUpperCase();
console.log(resultMethod);

//CALLBACK FUNCTION IS PASSING A FUNCTION AS A PARAMETER IN A FUNCTION OR METHOD
//FOR EACH IS AN ELEGANT LOOP

let people = ["Jesper", "Carlos", "Magnus", "Raul"];

/////SAME RESULTS DIFFERENT WRITTEN...///
// people.forEach((person, index) => {
//   console.log(index, person);
// });
const logPerson = (person, index) => {
  // create html template
  console.log(`${index} - Hello ${person}`);
};
people.forEach(logPerson);
