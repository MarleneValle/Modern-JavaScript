//local storage store data inside de browser an each item of data is going to have a key  and a value, much like when wake have JS objects

//STORE DATA IN LOCAL STORAGE
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);

// GET DATA FROM LOCAL STORAGE
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

//UPDATING DATA
localStorage.setItem("name", "Jesper");
localStorage.age = "34";

name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age);

//DELETE DATA FROM LOCAL STORAGE
localStorage.removeItem("name");
localStorage.clear();

name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);
