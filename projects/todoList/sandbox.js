/////remove elements from theDOM
const ul = document.querySelector("ul");
// ul.remove();

//STEP 1: query the dom to get the element  where we expect the event to happen

const button = document.querySelector("button");

///STEP 2: add an eventListener to the element...STEP 3: write a callback function which will fire the event

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New task";
  // ul.append(li);
  ul.prepend(li);
});

//////ATTACH EVENT LISTENER TO EVERY TODO ITEM///////

// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log("item clicked");
//     // console.log(e);
//     // console.log(item);

//     console.log("event in LI li Li");
//     e.stopPropagation(); //this method stops the event bubbling up anymore to the parent

//     // e.target.style.textDecoration = "line-through";
//     // e.target.remove();
//   });
// });

////////EVENT DELEGATION by attaching a single eventListener to the parent (<ul>) /////////
ul.addEventListener("click", (e) => {
  // console.log("event in UL");
  if (e.target.tagName === "LI") {
    console.log(e.target.tagName);
    e.target.remove();
  }
});
