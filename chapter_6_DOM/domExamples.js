///1///

const para = document.querySelector("h3");

console.log(para.innerText);

para.innerText += " ---I am adding this text with a query Selector";

////2/////

const paras = document.querySelectorAll("p");

paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " NEW TEXT!!!";
});

///3////

// const content = document.querySelector(".content");
// console.log(content.innerHTML);

// content.innerHTML += "<h2>I AM EDITING THE HTML </>";

// console.log(content.innerHTML);

/////4/////
// const content = document.querySelector(".content");

// const people = ["Mario", "Luigu", "Yoshi"];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

////GET AND ATTRIBUTE OR SET AND ATTRIBUTE FROM JAVASCRIPT TO THE HTML

//// GET ATTRIBUTE/////

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

///SET AND CHANGE ATTRIBUTE

link.setAttribute("href", "www.blahblah.com");

console.log(link.getAttribute("href"));

link.innerText = "Mi first company name";

////EXAMPLE WITH CLASS ATTRIBUTE

const content = document.querySelector("div");

console.log(content.getAttribute("class"));
content.setAttribute("class", "success");
content.setAttribute("style", "color: green");

/////CHANGING/ADDING  CSS STYLES WITHOUT OVERWRITtEn THE ACTUAL STYLE
const title = document.querySelector("h1");
console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "red";
title.style.fontSize = "40px";

////REMOVE PROPERTIES FROM STYLE

title.style.margin = "";

////CHANGE CLASSES FROM THE JAVASCRIPT

const mss = document.querySelector("body > p.error");

console.log(mss.classList);
mss.classList.add("success"); //add a class
mss.classList.remove("success"); //remove a class
