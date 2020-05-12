"use strict";

var myNav = document.getElementById("mynav");

window.onscroll = function() {
 
  if (document.body.scrollTop >= 900 || document.documentElement.scrollTop >= 900) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

let myButton = document.getElementById('changeUser');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to PhotoBoot, ' + myName;
}
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to PhotoBoot, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }