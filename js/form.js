"use strict";

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



