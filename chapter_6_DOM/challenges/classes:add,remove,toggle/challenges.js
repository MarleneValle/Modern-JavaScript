const paras = document.querySelectorAll("p");

paras.forEach((para) => {
  console.log(para.textContent); //in this case textContent is better use than InnerText because it shows all the text even if it is hidden
  if (para.textContent.includes("error")) {
    para.classList.add("error");
  }
  if (para.textContent.includes("success")) {
    para.classList.add("success");
  }
});

////TOGGLE CLASSES///
const title = document.querySelector(".title");

title.classList.toggle("test"); //ADD THE CLASS 'TEST
title.classList.toggle("test"); //NOW REMOVES THE CLASS 'TEST
