"use strict";

const downArrow = document.querySelectorAll(".down-arrow");
const accordion = document.querySelectorAll(".accordion");
const question = document.querySelectorAll(".question");

for (let i = 0; i < downArrow.length; i++) {
  downArrow[i].addEventListener("click", function () {
    downArrow[i].classList.toggle("rotate");
    accordion[i].classList.toggle("show-answer");
    question[i].classList.toggle("title");
  });
}
