"use strict"
const btnNav = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const links = document.querySelector('.main-nav-list')

btnNav.addEventListener('click', function (e) {
    e.preventDefault()
    headerEl.classList.toggle('nav-open')
    overlay.classList.toggle('show-modal')


})

const closeBoth = function () {
    headerEl.classList.remove('nav-open')
    overlay.classList.remove('show-modal')
}

overlay.addEventListener('click', closeBoth)
links.addEventListener('click', closeBoth)

$('.brand-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
