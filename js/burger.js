"use strict";

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
	burgerLineFirst.classList.toggle("burger__line--active");
	burgerLineLast.classList.toggle("burger__line--active");
	logoName.classList.toggle("logo__name--toggle");
});