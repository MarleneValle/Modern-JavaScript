///USE dateFns aster reference in a scrip in the index.html

const now = new Date();

console.log(dateFns.isToday(now));

/// FORMATTING  OPTIONS
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMMM"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "ddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

//COMPARING DATES
const before = new Date("February 1 2019 12:00:00");
console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
