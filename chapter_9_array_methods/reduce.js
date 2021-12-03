//REDUCE METHOD it doesn't return necessarily a new array instead it can return A SINGLE VALUE (can be a array or NUMBER, or string) based on the values in the array tha we iterate over

///EXAMPLE 1. How many scores are over 5 (in this case it will return a NUMBER)
const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);

console.log(result);

///EXAMPLE 2. Total points of a player (mario)

const points = [
  { player: "cecilia", points: 50 },
  { player: "greg", points: 90 },
  { player: "mario", points: 40 },
  { player: "greg", points: 50 },
  { player: "mario", points: 100 },
  { player: "mario", points: 100 },
  { player: "mario", points: 40 },
  { player: "greg", points: 50 },
  { player: "mario", points: 100 },
  { player: "mario", points: 100 },
];

const marioTotal = points.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.points;
  }
  return acc;
}, 0);

console.log(marioTotal);
