//SETS are a new data structure in the objects category - which means they are reference type- and they allows to store a list of any kind of unique values. ARRAY THAT DOESN'T ALLOW DUPLICATES VALUES

////EXAMPLE how to create a set///
const namesArray = ["marlene", "jessica", "nicole", "jessica"];
console.log(namesArray);

// //creating a set
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// //change the set to an Array
// const uniqueNames = [...namesSet];

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

////EXAMPLE properties and metods add and delete///
const ages = new Set();
ages.add(20);
ages.add(30).add(35);
ages.add(30);
ages.delete(30);

console.log(ages, ages.size);
console.log(ages.has(20), ages.has(30));

////EXAMPLE clear out the set ///
ages.clear();
console.log(ages);

////EXAMPLE using forEach method///
const ninjas = new Set([
  { name: "maria", age: 20 },
  { name: "benja", age: 24 },
  { name: "andy", age: 22 },
]);
ninjas.forEach((ninja) => {
  console.log(ninja.name, ninja.age);
});
