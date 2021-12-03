import Tooltip from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";
import Snackbar from "./ninja-ui/snackbar";
//crete a tooltip instance
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

//create a dropdown instances
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//crete a tabs instance
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

//create a snackbar

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector(".snackbar-trigger");
button.addEventListener("click", () => {
  snackbar.show("Thanks for the click event! :)");
});
