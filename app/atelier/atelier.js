// Initialisation des composants de l'atelier
const cup = document.getElementById('cup');
const cupBubbles = document.querySelectorAll('.bubble');
const choices = document.getElementById('choices');
const teaButton = document.getElementById('tea-button');
const bubbleButton = document.getElementById('bubble-button');
const flavourButton = document.getElementById('flavour-button');
const heatButton = document.getElementById('heat-button');
const sizeButton = document.getElementById('size-button');


// Fonction qui crée la div de choix de thé
const createTeaChoices = () => {
  // Création de la div qui contient les boutons des choix de thé
  choices.innerHTML='';
  const teas = document.createElement("div");
  teas.innerHTML = '<div id="red"></div>' +
  ' <div id="green"></div>' +
  ' <div id="black"></div>';
  teas.classList.add('teas');
  choices.appendChild(teas);

  // Initialisation des boutons de changements de thé
  const red = document.getElementById('red');
  const green = document.getElementById('green');
  const black = document.getElementById('black');

  red.addEventListener('click', () => {
    cup.style.borderTop = "200px solid red";
  });
  green.addEventListener('click', () => {
    cup.style.borderTop = "";
  });
  black.addEventListener('click', () => {
    cup.style.borderTop = "200px solid brown";
  });
};

// Fonction qui crée la div de choix de bubbles
const createBubbleChoices = () => {
  // Création de la div qui contient les boutons des choix de thé
  choices.innerHTML='';
  const bubbles = document.createElement("div");
  bubbles.innerHTML = '<div id="tapioca"></div>' +
  ' <div id="candy"></div>' +
  ' <div id="none"></div>';
  bubbles.classList.add('bubbles');
  choices.appendChild(bubbles);

  // Initialisation des boutons de changements de bubbles
  const tapioca = document.getElementById('tapioca');
  const candy = document.getElementById('candy');
  const none = document.getElementById('none');

  tapioca.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "block";
      cupBubbles[i].style.backgroundColor = "black";
    };
  });
  candy.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "block";
      cupBubbles[i].style.backgroundColor = "pink";
    };
  });
  none.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "none";
    };
  });
};

// Fonction qui crée la div de choix de chaleur
const createHeatChoices = () => {
  // Création de la div qui contient les boutons des choix de thé
  choices.innerHTML='';
  const heat = document.createElement("div");
  heat.innerHTML = '<div id="hot"></div>' +
  ' <div id="cold"></div>';
  heat.classList.add('heat');
  choices.appendChild(heat);

  // Initialisation des boutons de changements de bubbles
  const hot = document.getElementById('hot');
  const cold = document.getElementById('cold');

  hot.addEventListener('click', () => {
    console.log('servi chaud !')
  });
  cold.addEventListener('click', () => {
    console.log('servi froid !')
  });
};

// Fonction qui crée la div de choix de taille
const createSizeChoices = () => {
  // Création de la div qui contient les boutons des choix de thé
  choices.innerHTML='';
  const size = document.createElement("div");
  size.innerHTML = '<div id="small"></div>' +
  ' <div id="large"></div>';
  size.classList.add('size');
  choices.appendChild(size);

  // Initialisation des boutons de changements de bubbles
  const small = document.getElementById('small');
  const large = document.getElementById('large');

  small.addEventListener('click', () => {
    console.log('en petite taille !')
  });
  large.addEventListener('click', () => {
    console.log('en grande taille !')
  });
};

// Fonction qui crée la div de choix de saveurs
const createFlavourChoices = () => {
  const flavourChoices = ['coco', 'mangue', 'taro', 'durian', 'pomme', 'fraise', 'citron', 'passion']

  // Création de la div qui contient les boutons des choix de thé
  choices.innerHTML='';
  const flavour = document.createElement("div");
  flavour.classList.add('flavour');
  flavour.innerHTML = '';

  for (i = 0; i < flavourChoices; i++) {
    flavour.innerHTML += '<div id="'+flavourChoices[i]+'"></div>';
    console.log(flavour.innerHTML);
  }
  choices.appendChild(flavour);
};


// Initialisation des écouteurs sur chaque bouton
teaButton.addEventListener('click', () => {
  createTeaChoices();
});
bubbleButton.addEventListener('click', () => {
  createBubbleChoices();
});
flavourButton.addEventListener('click', () => {
  createFlavourChoices();
});
heatButton.addEventListener('click', () => {
  createHeatChoices();
});
sizeButton.addEventListener('click', () => {
  createSizeChoices();
});
