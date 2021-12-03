const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data); //turn JSOn data into a Javascript array of objects
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });
  //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", "todos.json");
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  //add a callback function as an argument to the function GetTodos. convention is have as a parameters "err" first and the "data"
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
