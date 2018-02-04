


// Navigation
var navigationSlider = document.querySelectorAll('.slider .navigation li');
var navigationAbout = document.querySelectorAll('.slider .container li');

// var navigationAbout = document.querySelectorAll('.about .container li');
// var navigationDiscover = document.querySelectorAll('.discover .container li');
// var navigationQuality = document.querySelectorAll('.quality .container li');


// Blocks Infos

// var about = document.querySelector('.about');
// var discover = document.querySelector('.discover');
// var quality = document.querySelector('.quality');

var illustrationAbout = document.querySelector('.slider .illustration');
var textAbout = document.querySelector('.slider .text-container');
var titleSlider = document.querySelector('.slider h2');


var textAbout = 'Le Bubble Tea bar est un salon de thé de nouvelle génération dans lequel on peut boire l’une des boissons les plus demandées en Asie : le Bubble Tea.';
var textDiscover = 'Au delà du bubble tea, nous vous proposons de découvrir nos recettes maison prêtes à déguster à base de thé,café ou chocolat et nos friandises asiatiques que vous allez adorer. Explosion de saveurs garantie !';
var textQuality = 'La qualité est et sera toujours au cœur de nos préoccupations. Nous nous attachons à sélectionner des thé de haute qualité,choisis avec soin dans différents pays asiatiques par la fondatrice de Momen’Tea elle-même.';

var tabTitle = ['A propos', 'Découverte', 'Qualité'];
var tabText = [textAbout, textDiscover, textQuality];
var tabIllustration = ['speculoos.png', 'recette.png', 'quality.png'];


for( i = 0 ; i < navigationSlider.length ; i++ ){
  navigationSlider[i].addEventListener('click', function(){

    // Title modif
    titleSlider.innerHTML = '';
    titleSlider.innerHTML = titleSlider[i];

    // Illustration modif
    illustrationAbout.style.backgroundImage = "url("+' '+")";
    illustrationAbout.style.backgroundImage = "url("+' '+ tabIllustration[i] +")";

    // text modif
    textAbout.innerHTML = '';
    textAbout.innerHTML = tabText[i];


  });
};


for( i = 0 ; i < navigationAbout.length ; i++ ){
  navigationAbout[i].addEventListener('click', function(){

    // Title modif
    titleSlider.innerHTML = '';
    titleSlider.innerHTML = titleSlider[i];

    // Illustration modif
    illustrationAbout.style.backgroundImage = "url("+' '+")";
    illustrationAbout.style.backgroundImage = "url("+' '+ tabIllustration[i] +")";

    // text modif
    textAbout.innerHTML = '';
    textAbout.innerHTML = tabText[i];


  });
};
