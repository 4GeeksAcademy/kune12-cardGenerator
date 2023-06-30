/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write you
  console.log("Hello Rigo from the console!");
  document.querySelector(".card").innerHTML = genrannumber();
  document.querySelector(".card").classList.add([genransuites()]);
};
const genrannumber = () => {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let ranindex = Math.floor(Math.random() * numbers.length);
  return numbers[ranindex];
};
const genransuites = () => {
  let suites = ["spade", "club", "diam", "heart"];
  let ranindex = Math.floor(Math.random() * suites.length);
  return suites[ranindex];
};