// $(window).scroll(function () {
//     var wScroll = $(this).scrollTop();

//     // jumbotron
//     $('.jumbotron img').css({
//         'transform': 'translate(0px, ' + wScroll / 4 + '%)'
//     });

//     $('.jumbotron h1').css({
//         'transform': 'translate(0px, ' + wScroll / 2 + '%)'
//     });

//     $('.jumbotron p').css({
//         'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
//     });

//     // portfolio 
//     if (wScroll > $('.portfolio').offset().top - 350) {
//         $('.portfolio .img-thumbnail').each(function (i) {
//             setTimeout(function () {
//                 $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
//             }, 300 * (i + 1));
//         });
//     }

// });

$('.btn .btn-outline-secondary').button('dispose');
var a = 1;
console.log(a);







// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-link');
//     const navLink = document.querySelectorAll('.nav-link li');

//     burger.addEventListener('click', () => {
//         //ToggleNav 
//         nav.classList.toggle('nav-active');

//         //Animate Link
//         navLink.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ''
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
//             }

//         });
//         //Burger Animation
//         burger.classList.toggle('toggle');

//     });
// }
// navSlide();