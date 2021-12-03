//QUERY SELECTOR AND QUERY SELECTOR ALL//reference single elements//

// const para = document.querySelector("div.error");
// console.log(para);

///reference all same elements

// const paras = document.querySelectorAll("p");

// const errors = document.querySelectorAll(".error");
// // paras.forEach((para) => {
// //   console.log(para);
// // });

// console.log(paras[1]);

///GET AN ELEMENT BY ID///

const title = document.getElementById("page-title");
console.log(title);

///GET ELEMENT BY THEIR CLASS NAME///
const errors = document.getElementsByClassName("error");
console.log(errors);
console.log(errors[0]);

///GET ELEMENTS BY THEIR TAG NAME///
const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[1]);
