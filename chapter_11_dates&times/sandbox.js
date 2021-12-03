//date is an object
const now = new Date();
console.log(now);
console.log(typeof now);

//years, months, day, times
console.log("getFullYear:", now.getFullYear());
console.log("getMonth:", now.getMonth());
console.log("getDate:", now.getDate());
console.log("getDay:", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//timestamps
console.log("timestamp:", now.getTime()); //Number of milliseconds since 12 a.m. on the 1st of January 1970

//TIMESTAMPS COMPARISON

const before = new Date("February 1 2019 7:30:59");
const rightNow = new Date();
console.log(rightNow.getTime(), before.getTime());

//HOW TO GET THE DIFFERENCE IN DAY BETWEEN TWO DAY

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);
console.log(`The blog was written ${days} ago`);

//CONVERTING TIMESTAMPS INTO DAY OBJECTS

const timestamp = 1675938474990;
console.log(new Date(timestamp));
