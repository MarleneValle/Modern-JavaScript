//async and await allows to chain promises together. we can setting off all of our async code into a single and async function, and then use the await keyword inside to chain promises together
const getTodos = async () => {
  ///async function always return a promise
  const response = await fetch("todos/cecilia.json");
  if (response.status !== 200) {
    throw new Error("Can not fetch data");
  }
  const data = response.json();

  return data;
};

///si not  blocking code function
console.log(1);
console.log(2);

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));

console.log(3);
console.log(4);
console.log(5);
