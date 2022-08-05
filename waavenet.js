"use strict"
const btnNav = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector('.header')
const overlay = document.querySelector('.overlay')


btnNav.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
    overlay.classList.toggle('show-modal')
})

const closeBoth = function () {
    headerEl.classList.remove('nav-open')
    overlay.classList.remove('show-modal')
}

overlay.addEventListener('click', closeBoth)


