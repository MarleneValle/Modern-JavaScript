///FIND METHOD returns the value of the FIRST ELEMENT inside an array that passes a certain test (it returns true or false for each element and stops when it first find a value which passes the condition, so it stop the callback function for the rest of the element in the array)

const scores = [10, 20, 50, 60, 600, 300, 900];

const firstHighScore = scores.find((score) => score > 200);

console.log(firstHighScore);
