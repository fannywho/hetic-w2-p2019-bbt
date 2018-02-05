

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

var illustrationSlider = document.querySelector('.slider .illustration');
var textSlider = document.querySelector('.slider .text-container');
var titleSlider = document.querySelector('.slider h2');

var textAbout = 'Le Bubble Tea bar est un salon de thé de nouvelle génération dans lequel on peut boire l’une des boissons les plus demandées en Asie : le Bubble Tea.';
var textDiscover = 'Au delà du bubble tea, nous vous proposons de découvrir nos recettes maison prêtes à déguster à base de thé,café ou chocolat et nos friandises asiatiques que vous allez adorer. Explosion de saveurs garantie !';
var textQuality = 'La qualité est et sera toujours au cœur de nos préoccupations. Nous nous attachons à sélectionner des thé de haute qualité,choisis avec soin dans différents pays asiatiques par la fondatrice de Momen’Tea elle-même.';


var tabTitle = ['A propos', 'Découverte', 'Qualité'];
var tabText = [textAbout, textDiscover, textQuality];
var tabIllustration = ['speculoos.png', 'recette.jpg', 'quality.jpg'];


for(let i = 0 ; i < navigationSlider.length ; i++ ){


  navigationSlider[i].addEventListener('click', function(){

    // Title modif
    titleSlider.innerHTML = '';
    titleSlider.innerHTML = tabTitle[i];

    // Illustration modif
    illustrationSlider.style.backgroundImage = "url("+' '+")";
    illustrationSlider.style.backgroundImage = "url(../../img/img-content/"+ tabIllustration[i] +")";

    // text modif
    textSlider.innerHTML = '';
    textSlider.innerHTML = tabText[i];

    // bullet modif
    for( let i = 0; i < navigationSlider.length ; i++){
      navigationSlider[i].classList.remove('active');
    }
    navigationSlider[i].classList.add('active');

  });
};


for(let i = 0 ; i < navigationAbout.length ; i++ ){

  navigationAbout[i].addEventListener('click', function(){

    // Title modif
    titleSlider.innerHTML = '';
    titleSlider.innerHTML = tabTitle[i];

    // Illustration modif
    illustrationSlider.style.backgroundImage = "url("+' '+")";
    illustrationSlider.style.backgroundImage = "url(../../img/img-content/"+ tabIllustration[i] +")";

    // text modif
    textSlider.innerHTML = '';
    textSlider.innerHTML = tabText[i];

    // bullet modif
    for( let i = 0; i < navigationAbout.length ; i++){
      navigationAbout[i].classList.remove('active');
    }
    navigationAbout[i].classList.add('active');

  });
};
