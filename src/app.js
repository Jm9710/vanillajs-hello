/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  return `${randomElement(who)} ${randomElement(action)} ${randomElement(
    what
  )} ${randomElement(when)}.`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
