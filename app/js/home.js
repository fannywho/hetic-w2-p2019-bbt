
var burger = document.querySelector('.responsive-menu');
var close = document.querySelector('.close-menu');

var headerNavigation = document.querySelector('.header_navigation');


burger.addEventListener('click', function(){
  headerNavigation.style.right = 0;
});


close.addEventListener('click', function(){
  headerNavigation.style.right = '-50%';
});
