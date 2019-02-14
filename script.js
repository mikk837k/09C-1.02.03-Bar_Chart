"use strict";

window.addEventListener("DOMContentLoaded", init);

const arr = [];

let counter = 0;

function init() {
  console.log("init kørt");

  populateArray();
}

function populateArray() {
  console.log("populateArray kørt");

  // add 39 "0´s" to the array
  counter++;

  const maxLengthOfArray = 40;

  if (counter <= maxLengthOfArray) {
    arr.unshift(0);
    populateArray();
  } else {
    console.log(arr);
    addRandomNumToArray();
  }
}

function makeRandomNumber(min, max) {
  const numb = Math.floor(Math.random() * (max - min) + min);

  return numb;
}

function addRandomNumToArray() {
  counter++;

  //   random number between 0-35
  let randomNumber = makeRandomNumber(0, 35);

  //   console.log(randomNumber);

  arr.unshift(randomNumber);

  const LengthOfArray = 40;

  if (counter > LengthOfArray) {
    arr.pop();
    createBox();
  }
  console.log(arr);

  setTimeout(addRandomNumToArray, 1000);
}

function createBox() {
  let height = arr[1];

  //grap html template
  const clone = document.querySelector("template").content.cloneNode(true);
  //add height to box from template
  const box = (clone.querySelector(".box").style.height = height * 3 + "px");

  //   const element = document.querySelector("#container").appendChild(clone);

  document.querySelector("#container").appendChild(clone);

  //   console.log(box);

  return clone;
}
