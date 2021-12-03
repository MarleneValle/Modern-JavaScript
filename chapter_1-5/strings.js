console.log("hello world");
let email = "marlene@gmail";
console.log(email);

let firstName = "Valle";
let lastName = "Marlene";
let fullName = firstName + " " + lastName;

console.log(fullName.length);

// string methods

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf("@");
console.log(index);

let result2 = email.lastIndexOf("l");
console.log(result2);

let result3 = email.slice(0, 7);
console.log(result3);

let result4 = email.substr(2, 7);
console.log(result4);

let result5 = email.replace("m", "zz");
console.log(result5);

//template string or template literal

const title = "Best reads of 2021";
const author = "Mario";
const likes = 30;

let result6 = `The blog called ${title} by ${author} has ${likes} likes`;

console.log(result6);
