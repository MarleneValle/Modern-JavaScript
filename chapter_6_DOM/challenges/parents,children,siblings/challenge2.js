//Finding and adding class to children elements

const article = document.querySelector("article");

console.log(article.children);

//Turn a HTMLCollection into and array to be able to use ForEach
const newArticle = Array.from(article.children);

console.log(newArticle);

Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});

///Finding parent elements

const title = document.querySelector("h2");

console.log(title.parentElement);
console.log(title.parentElement.parentElement);

/////Finding sibling relationship

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

////Chaining
console.log(title.nextElementSibling.parentElement.children);
