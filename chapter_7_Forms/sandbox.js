const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
// const username = document.querySelector("#username"); ///Not needed if the input filed is inside of a forma and as a Id or name
const userPattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(username.value);
  console.log(form.username.value); //we can reference an input field (or its value) that is inside of a form with the ID or name property and dot notation

  ///VALIDATION
  const user = form.username.value;
  if (userPattern.test(user)) {
    feedback.textContent = "You've created a valid username";
  } else {
    feedback.textContent =
      "Username must contain letters only and be between 6 &12 characters long";
  }
});
////LIVE FEEDBACK WHEN WRITING IN THE FIELD

form.username.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  if (userPattern.test(e.target.value)) {
    // console.log("Passed");
    form.username.setAttribute("class", "success");
  } else {
    // console.log("failed");
    form.username.setAttribute("class", "error");
  }
});

///TESTING RegEx

// const username = "jesprf";
// const pattern = /^[a-z]{5,}$/;

// //////METHOD 1
// let result = pattern.test(username);
// console.log(result); //True

// if (result) {
//   console.log("RegEx test passed :)");
// } else {
//   console.log("RegEx test failed :(");
// }
//////METHOD 2

// let result = username.search(pattern);
// console.log(result);  /// return and integer of the position where it match, otherwise return -1 (for not match)
