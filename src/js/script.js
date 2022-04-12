/* 
 ИСПОЛЬЗОВАНИЕ jQUERY


$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $('.menu').toggleClass('active')
    });
    $('.menu__close').on('click', function(){
        $('.menu').toggleClass('active')
    });
    $('.menu__overlay').on('click', function(){
        $('.menu').toggleClass('active')
    });
    $('.menu__list-link').on('click', function(){
        $('.menu').toggleClass('active')
    });
}); */

const hamburger = document.querySelector('.hamburger'),
    closeElement = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu'),
    menu__overlay = document.querySelector('.menu__overlay'),
    menu__link = document.querySelectorAll('.menu__list-link');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('active');
});
closeElement.addEventListener('click', function(){
    menu.classList.toggle('active');
});

menu__overlay.addEventListener('click', function(){
    menu.classList.remove('active');
});
// menu__link.addEventListener('click', function(){
//     menu.classList.remove('active')
// });


for (let i = 0; i < menu__link.length; i++) { 
    menu__link[i].addEventListener('click', function(){
        menu.classList.remove('active');
    });
  }


const ratings = document.querySelectorAll('.skills__percent'),
    skills = document.querySelectorAll('.skills__last');


// МОЙ КОД

for(let i = 0; i < ratings.length; i++) {
    skills[i].style = `width: ${ratings[i].innerText.replace('%', '')}%`
}


// КОД С КУРСА

// ratings.forEach( (item, i) => {
//     skills[i].style.width = item.innerHTML
// });


