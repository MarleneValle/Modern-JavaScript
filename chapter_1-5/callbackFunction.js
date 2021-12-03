//get a reference to the 'ul' that was created on index.html

const ul = document.querySelector(".people");

const people = ["Marin", "Sara", "Daniel", "Beto"];

let html = ``;
people.forEach((person, index) => {
  // create html template
  html += `<li style="color: purple">${index} - ${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
