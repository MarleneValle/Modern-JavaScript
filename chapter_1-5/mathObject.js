console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.6;

console.log(Math.round(area)); //round the number to the closest number
console.log(Math.floor(area)); //set the number to the closest floor integer
console.log(Math.ceil(area)); //set the number to the closest ceil integer
console.log(Math.trunc(area)); //remove the decimals and leave the integer

//Random numbers

const random = Math.trunc(Math.random() * 100); // random function is always a decimal number between 0 and 1

console.log(random);
