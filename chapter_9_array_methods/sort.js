///SORT METHOD rearrange the array in a particular way (alphabetical, quantity order, etc). It doesn't create a new array y just alters the original array (its destructive)

///EXAMPLE 1 SORT STRINGS
const names = ["beto", "ana", "cecilia", "daniel", "erik", "juan"];
names.sort();
names.reverse();

console.log(names);

///EXAMPLE 2 SORT NUMBERS
const scores = [10, 5, 15, 20, 40, 50, 60, 90];
scores.sort((a, b) => b - a);
console.log(scores);

/// EXAMPLE 3 SORT OBJECTS
const players = [
  { name: "martha", points: 50 },
  { name: "laura", points: 10 },
  { name: "ale", points: 80 },
  { name: "monse", points: 30 },
];

//answer 1 compare function which take 2 parameters (a , b)//

// players.sort((a, b) => {
//   if (a.points > b.points) {
//     return -1;
//   } else if (b.points - a.points) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

//answer 2 shorter version
players.sort((a, b) => b.points - a.points);

console.log(players);
