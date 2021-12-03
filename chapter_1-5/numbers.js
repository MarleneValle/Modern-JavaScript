let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operators +, -, *,/,**,%

console.log(10 / 2);
let result = radius % 3;
console.log(result);

let result2 = pi * radius ** 2;
console.log(result2);

//order of operation - B(brackets)I(indices)D(division)M(multiplication)A(addition)S(subtraction)

let result3 = 5 * (10 - 3) ** 2;
console.log(result3);

let likes = 20;
// likes = likes + 1;
// likes++;
// likes += 10;
// likes -= 10;
// likes *= 3;
likes /= 4;
console.log(likes);

//NaN - not a number
console.log(5 * "hello");

//concatenation way using `${value}`

//Type conversion
let score = "100";
score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result4 = Number("hello"); //NaN
let result5 = String(50); //50
let result6 = Boolean(0);
let result7 = Boolean("");

console.log(result4);
console.log(result5);
console.log(result7);
console.log(result7, typeof result7);
