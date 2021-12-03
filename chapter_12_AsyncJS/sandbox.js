//ASYNC JAVASCRIPT governs how we perform tasks which take some time to complete(e.g getting dat from a database)
//Asynchronous code ins code tha CAN START NAW AND FINISH LATER
//example
// console.log(1);
// console.log(2);
// setTimeout(() => {
//   //this function is Async and doesn't block the code
//   console.log("callback function fired");
// }, 2000);
// console.log(3);
// console.log(4);

//STEPS TO MAKE  A HTTP REQUEST
///STEP 1/// MAKE A REQUEST OBJECT
const request = new XMLHttpRequest(); //this is going to send the request from the browser

////to know when the request is complete and we can access the data. we can track the progress of the request using and Event Listener ReadyStateChange
request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("Could not fetch the data");
  }
});

///STEP 2/// SETTING UP THE REQUEST  FROM THE REQUEST OBJECT*//
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

//STEP 3  SEND A REQUEST TO GET SOME DATA
request.send();
