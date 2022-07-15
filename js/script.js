<<<<<<< HEAD
"use strict";

//burger-menu

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const burgerLineFirst = document.querySelector(".burger__line");
const burgerLineLast = document.querySelector(".burger__line--last");
const logoName = document.querySelector(".logo__name");

burger.addEventListener("click", function(evt) {
	evt.preventDefault();
	nav.classList.toggle("nav--active");
	header.classList.toggle("header--active");
	burgerLineFirst.classList.toggle("burger__line--animation-start");
	burgerLineLast.classList.toggle("burger__line--animation-start");
	logoName.classList.toggle("logo__name--toggle");
});


//registration-form

const registrationBtn = document.querySelector(".registration-btn");
const entryBtn = document.querySelector(".entry-btn");
const registrationForm = document.querySelector(".registration__form");
const entryForm = document.querySelector(".registration__form--entry");
const entryHeader = document.querySelector(".entry");

entryBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	entryForm.classList.add("block-active");
	entryBtn.classList.remove("inactive");
	registrationBtn.classList.add("inactive");
	registrationForm.classList.add("block-inactive");
	entryHeader.classList.remove("block-inactive");
});

registrationBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	entryForm.classList.remove("block-active");
	entryBtn.classList.add("inactive");
	registrationForm.classList.remove("block-inactive");
	registrationBtn.classList.remove("inactive");
	entryHeader.classList.add("block-inactive");
});



=======
"use strict";

//burger-menu

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const burgerLineFirst = document.querySelector(".burger__line");
const burgerLineLast = document.querySelector(".burger__line--last");
const logoName = document.querySelector(".logo__name");

burger.addEventListener("click", function(evt) {
	evt.preventDefault();
	nav.classList.toggle("nav--active");
	header.classList.toggle("header--active");
	burgerLineFirst.classList.toggle("burger__line--animation-start");
	burgerLineLast.classList.toggle("burger__line--animation-start");
	logoName.classList.toggle("logo__name--toggle");
});


//registration-form

const registrationBtn = document.querySelector(".registration-btn");
const entryBtn = document.querySelector(".entry-btn");
const registrationForm = document.querySelector(".registration__form");
const entryForm = document.querySelector(".registration__form--entry");
const entryHeader = document.querySelector(".entry");

entryBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	entryForm.classList.add("block-active");
	entryBtn.classList.remove("inactive");
	registrationBtn.classList.add("inactive");
	registrationForm.classList.add("block-inactive");
	entryHeader.classList.remove("block-inactive");
});

registrationBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	entryForm.classList.remove("block-active");
	entryBtn.classList.add("inactive");
	registrationForm.classList.remove("block-inactive");
	registrationBtn.classList.remove("inactive");
	entryHeader.classList.add("block-inactive");
});



>>>>>>> f81298592bdbd3e9caf4a8f53dacf363e7061572
