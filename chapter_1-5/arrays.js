let ninjas = ["Marlene", "Rubi", "Priscilla"];
ninjas[1] = "Mariana";
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);
console.log(ages.length);

//array methods

let result = ages.join("/");
console.log(result);

let result2 = ages.indexOf(30);
console.log(result2);

let result3 = ninjas.concat(["Ken", "Grecia"]);
console.log(result3);

//This method is a destructive  method because it alters (changes) the original value of the array
let result4 = ninjas.push("Jesper");
console.log(ninjas);

//this value popped off (remove) the last value of the array

result5 = ninjas.pop();
console.log(ninjas);
console.log(result5);
