///FILTER to filter put certain items from a array base on certain condition

////EXAMPLE 1
const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter((score) => {
  return score < 20;
});
console.log(filteredScores);

////EXAMPLE 2
const user = [
  { name: "Jesper", premium: true },
  { name: "Mario", premium: false },
  { name: "Carls", premium: false },
  { name: "Noemi", premium: true },
];

const premiumUser = user.filter((user) => user.premium);

console.log(premiumUser);
