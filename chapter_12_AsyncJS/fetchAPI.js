//Native fetch() API
//the fetch function is a more modern way to fetch data instead of  using XMLHTTPrequest and it also implement the promises under the hood

fetch("todos/jesper.json")
  .then((response) => {
    console.log("resolve", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

///EXplanation fetch()
// fetch(
//   "pass in the resource that we want to fetch. can be a endpoint to and API or a local resource and returns a promise(resolve or reject)"
// )
//   .then((response) => {
//     console.log("resolved", response);
//   })
//   .catch((err) => {
//     console.log("reject", err);
//   });
