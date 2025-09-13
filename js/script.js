const burg = document.querySelector('.header__burger');
const men = document.querySelector('.header__menu');
const menBurg = document.querySelector('.menu__burger');
const headerLogo = document.querySelector('.header__logo');
const headerMenuLi1 = document.querySelector('.header__menu-but1');
const headerMenuLi2 = document.querySelector('.header__menu-but2');
const headerMenuLi3 = document.querySelector('.header__menu-but3');
const headerMenuActive = document.querySelector('.header__menu-li--active');
const prodMainButton = document.querySelector('.prodMain__button');

function MyBut(){
burg.onclick = function () {
    men.classList.add('active');
}

menBurg.onclick = function () {
    men.classList.remove('active');
}
    
headerLogo.onclick = function(event) {
    event.preventDefault();
            location.href = 'index.html';
    }
 
    headerMenuLi1.onclick = function (event) {
        event.preventDefault();
    window.location.replace('project.html');
  
}
    headerMenuLi2.onclick = function (event) {
        event.preventDefault();
 window.location.replace('skills.html');

  
    }
    headerMenuLi3.onclick = function(event) {
    event.preventDefault();
 window.location.replace('contacts.html');
    }
    prodMainButton.onclick = function(event) {
    event.preventDefault();
        window.location.assign('https://sergeyfarm.github.io/SergGenerator/');
    }

}
MyBut();

//https://sergeyfarm.github.io/SergGenerator/
