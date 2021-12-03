import "./styles/snackbar.css";

class Snackbar {
  constructor() {
    //created the element when we call the constructor
    this.snackbar = document.createElement("div");
  }
  init() {
    //adding a class to the created snackbar
    this.snackbar.classList.add("snackbar");
    //appending the snackbar to the DOM inside the body tag
    document.querySelector("body").appendChild(this.snackbar);
    //
  }
  show(message) {
    this.snackbar.textContent = message;
    this.snackbar.classList.add("active");
    setTimeout(() => {
      this.snackbar.classList.remove("active");
    }, 4000);
  }
}

export { Snackbar as default };
