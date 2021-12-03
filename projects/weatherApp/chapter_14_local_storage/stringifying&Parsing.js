const todos = [
  { text: "play mariokart", author: "jesper" },
  { text: "eat", author: "cecilia" },
  { text: "shopping", author: "marlene" },
];

// console.log(JSON.stringify('todos'));

localStorage.setItem("todos", JSON.stringify("todos"));

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
