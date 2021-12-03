//request data from different sources, one after another

//PROMISE EXAMPLE
const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/marlene.json")
  .then((data) => {
    console.log("promise 1 resolve", data);
    return getTodos("todos/cecilia.json");
  })
  .then((data) => {
    console.log("promise 2 solved", data);
    return getTodos("todos/jesper.json", data);
  })
  .then((data) => {
    console.log("promise 3 solved", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

//CHAINING PROMISES
