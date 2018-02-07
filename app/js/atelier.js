import alertify from 'alertify.js'

// Initialisation des composants de l'atelier
const cup = document.getElementById('cup');
const cupBubbles = document.querySelectorAll('.bubble');
const choices = document.getElementById('choices');
const teaButton = document.getElementById('tea-button');
const bubbleButton = document.getElementById('bubble-button');
const flavourButton = document.getElementById('flavour-button');
const heatButton = document.getElementById('heat-button');
const sizeButton = document.getElementById('size-button');
const confirm = document.getElementById('valid-atelier');


// Fonction qui crée la div de choix de thé
function createTeaChoices() {
  // Création de la div qui contient les boutons des choix de thé
  const teaChoices = [
    'green',
    'red',
    'black',
  ];

  choices.innerHTML='';
  const teas = document.createElement("div");
  teas.classList.add('teas');

  // création à la volée de chaque div de thé
  for (let i = 0; i < teaChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", teaChoices[i]);
    if(teaChoices[i] === 'green') {
      elem.innerHTML = 'Vert';
    } else if(teaChoices[i] === 'red') {
      elem.innerHTML = 'Rouge';
    } else {
      elem.innerHTML = 'Noir';
    }
    teas.appendChild(elem);
  }
  choices.appendChild(teas);

  const teaButtons = document.querySelectorAll('.teas button');
  const teaBase = document.getElementById("tea-base");

  red.addEventListener('click', () => {
    cup.style.borderTop = "200px solid red";
    for (let i = 0; i < teaButtons.length; i++) {
      teaButtons[i].classList.remove('active');
    }
    red.classList.add('active');

    teaBase.innerHTML = "Base de thé : Rouge."
  });
  green.addEventListener('click', () => {
    cup.style.borderTop = "";
    for (let i = 0; i < teaButtons.length; i++) {
      teaButtons[i].classList.remove('active');
    }
    green.classList.add('active');

    teaBase.innerHTML = "Base de thé : Vert.";
  });
  black.addEventListener('click', () => {
    cup.style.borderTop = "200px solid brown";
    for (let i = 0; i < teaButtons.length; i++) {
      teaButtons[i].classList.remove('active');
    }
    black.classList.add('active');

    teaBase.innerHTML = "Base de thé : Noir.";
  });
};

// Fonction qui crée la div de choix de bubbles
function createBubbleChoices() {
  // Création de la div qui contient les boutons des bubbles
  const bubbleChoices = [
    'tapioca',
    'candy',
    'aucune'
  ];

  // Création de la div qui contient les boutons des choix de bubbles
  choices.innerHTML='';
  const bubbles = document.createElement("div");
  bubbles.classList.add('bubbles');

  // création à la volée de chaque div de saveur
  for (let i = 0; i < bubbleChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", bubbleChoices[i]);
    elem.innerHTML = bubbleChoices[i].charAt(0).toUpperCase() + bubbleChoices[i].slice(1)
    bubbles.appendChild(elem);
  }
  choices.appendChild(bubbles);

  const bubblesButtons = document.querySelectorAll('.bubbles button');
  const teaBubble = document.getElementById("tea-bubble");

  tapioca.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "block";
      cupBubbles[i].style.backgroundColor = "";
    };
    for (let i = 0; i < bubblesButtons.length; i++) {
      bubblesButtons[i].classList.remove('active');
    }
    tapioca.classList.add('active');
    teaBubble.innerHTML = "Bubbles : Tapioca."
  });

  candy.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "block";
      cupBubbles[i].style.backgroundColor = "magenta";
    };
    for (let i = 0; i < bubblesButtons.length; i++) {
      bubblesButtons[i].classList.remove('active');
    }
    candy.classList.add('active');
    teaBubble.innerHTML = "Bubbles : Bonbons."
  });

  aucune.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "none";
    };
    for (let i = 0; i < bubblesButtons.length; i++) {
      bubblesButtons[i].classList.remove('active');
    }
    aucune.classList.add('active');
    teaBubble.innerHTML = "Pas de bubble."
  });
};

// Fonction qui crée la div de choix de chaleur
function createHeatChoices() {
  // Création de la div qui contient les boutons des choix de chaleur
  const heatChoices = [
    'cold',
    'hot'
  ];

  choices.innerHTML='';
  const heat = document.createElement("div");
  heat.classList.add('heat');

  // création à la volée de chaque div de chaleur
  for (let i = 0; i < heatChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", heatChoices[i]);
    if(heatChoices[i] === 'hot') {
      elem.innerHTML = 'Chaud';
    } else {
      elem.innerHTML = 'Froid';
    }
    heat.appendChild(elem);
  }
  choices.appendChild(heat);

  const heatButtons = document.querySelectorAll('.heat button');
  const teaHeat = document.getElementById("tea-heat");

  cold.addEventListener('click', () => {
    for (let i = 0; i < heatButtons.length; i++) {
      heatButtons[i].classList.remove('active');
    }
    cold.classList.add('active');
    teaHeat.innerHTML = "Thé froid."
  });
  hot.addEventListener('click', () => {
    for (let i = 0; i < heatButtons.length; i++) {
      heatButtons[i].classList.remove('active');
    }
    hot.classList.add('active');
    teaHeat.innerHTML = "Thé chaud."
  });
};

// Fonction qui crée la div de choix de taille
function createSizeChoices() {
  // Création de la div qui contient les boutons des taille
  const sizeChoices = [
    'small',
    'large'
  ];
  const teaSize = document.getElementById("tea-size");

  // Création de la div qui contient les boutons des choix de taille
  choices.innerHTML='';
  const size = document.createElement("div");
  size.classList.add('size');

  // création à la volée de chaque div de saveur
  for (let i = 0; i < sizeChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", sizeChoices[i]);
    elem.innerHTML = sizeChoices[i].charAt(0).toUpperCase() + sizeChoices[i].slice(1)
    size.appendChild(elem);
    elem.addEventListener('click', () => {
      const sizeButtons = document.querySelectorAll('.size button');
      for(let j = 0; j < sizeButtons.length; j++) {
        sizeButtons[j].style.backgroundColor = "";
      }

      elem.style.backgroundColor = "lightgreen";

      teaSize.innerHTML = "Taille : " + sizeChoices[i] + "."
    })
  }
  choices.appendChild(size);
};

// Fonction qui crée la div de choix de saveurs
function createFlavourChoices() {
  const flavourChoices = [
    'coco',
    'mangue',
    'taro',
    'durian',
    'pomme',
    'fraise',
    'citron',
    'passion'
  ];
  const teaFlavour = document.getElementById("tea-flavour");

  // Création de la div qui contient les boutons des choix de saveur
  choices.innerHTML='';
  const flavour = document.createElement("div");
  flavour.classList.add('flavour');

  // création à la volée de chaque div de saveur
  for (let i = 0; i < flavourChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", flavourChoices[i]);
    elem.innerHTML = flavourChoices[i].charAt(0).toUpperCase() + flavourChoices[i].slice(1)
    flavour.appendChild(elem);
    elem.addEventListener('click', () => {
      const flavourButtons = document.querySelectorAll('.flavour button');
      for(let j = 0; j < flavourButtons.length; j++) {
        flavourButtons[j].style.backgroundColor = "";
      }

      elem.style.backgroundColor = "lightgreen";

      teaFlavour.innerHTML = "Saveur : " + flavourChoices[i].charAt(0).toUpperCase() + flavourChoices[i].slice(1) + "."
    })
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

confirm.addEventListener('click', () => {
  // confirm dialog
  alertify.confirm("En cliquant sur OK, votre commande sera passée à Moment Tea.", function () {
      alertify.logPosition("bottom");
      alertify.success("Merci, on s'occupe de votre commande ! :)");
  });
})
