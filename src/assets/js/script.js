let burgerButton = document.getElementById('header__burger');
let mobileMenu = document.getElementById('mobile__menu');
let mobileCross = document.getElementById('mobile__menu--cross');

burgerButton.addEventListener('click', function (){
    mobileMenu.classList.remove('inactive');
    mobileMenu.classList.add('active');
});

mobileCross.addEventListener('click', function (){
    mobileMenu.classList.remove('active');
    mobileMenu.classList.add('inactive');
});