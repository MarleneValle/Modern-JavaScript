// FOR LOOPS

for (let i = 0; i < 10; i++) {
  console.log("in loop ", i);
}

console.log("Loop finished");

const names = ["mariana", "cris", "luli", "martin"];

for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// WHILE LOOP

let i = 0;
while (i < 6) {
  console.log("in loop", i);
  i++;
}

// const names = ["mariana", "cris", "luli", "martin"];
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// let i = 2;
// do {
//   console.log("val of i is: ", i);
//   i++;
// } while (i < 5);

//BREAK AND CONTINUE

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log("your score: ", scores[i]);

//   if (scores[i] === 100) {
//     console.log("Congrats, you got the top score!");
//     break;
//   }
// }

// SWITCH STATEMENTS
const grade = "D";

switch (grade) {
  case "A":
    console.log("great A!");
    break;
  case "B":
    console.log("great B!");
    break;
  case "C":
    console.log("great C!");
    break;
  case "D":
    console.log("great D!");
    break;
  case "E":
    console.log("great E!");
    break;
  default:
    console.log("Not a valid grade!");
}
