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
    teas.appendChild(elem);
  }
  choices.appendChild(teas);

  const teaButtons = document.querySelectorAll('.teas button');

  red.addEventListener('click', () => {
    cup.style.borderTop = "200px solid red";
    for (let i = 0; i < teaButtons.length; i++) {
      teaButtons[i].classList.remove('active');
    }
    red.classList.add('active');
  });
  green.addEventListener('click', () => {
    cup.style.borderTop = "";
    for (let i = 0; i < teaButtons.length; i++) {
      teaButtons[i].classList.remove('active');
    }
    green.classList.add('active');

  });
  black.addEventListener('click', () => {
    cup.style.borderTop = "200px solid brown";
    for (let i = 0; i < teaButtons.length; i++) {
      teaButtons[i].classList.remove('active');
    }
    black.classList.add('active');
  });
};

// Fonction qui crée la div de choix de bubbles
const createBubbleChoices = () => {
  // Création de la div qui contient les boutons des bubbles
  const bubbleChoices = [
    'tapioca',
    'candy',
    'none'
  ];

  // Création de la div qui contient les boutons des choix de bubbles
  choices.innerHTML='';
  const bubbles = document.createElement("div");
  bubbles.classList.add('bubbles');

  // création à la volée de chaque div de saveur
  for (let i = 0; i < bubbleChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", bubbleChoices[i]);
    bubbles.appendChild(elem);
  }
  choices.appendChild(bubbles);

  const bubblesButtons = document.querySelectorAll('.bubbles button');

  tapioca.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "block";
      cupBubbles[i].style.backgroundColor = "";
    };
    for (let i = 0; i < bubblesButtons.length; i++) {
      bubblesButtons[i].classList.remove('active');
    }
    tapioca.classList.add('active');
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
  });

  none.addEventListener('click', () => {
    for (let i = 0; i < cupBubbles.length; i++) {
      cupBubbles[i].style.display = "none";
    };
    for (let i = 0; i < bubblesButtons.length; i++) {
      bubblesButtons[i].classList.remove('active');
    }
    none.classList.add('active');
  });
};

// Fonction qui crée la div de choix de chaleur
const createHeatChoices = () => {
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
    heat.appendChild(elem);
  }
  choices.appendChild(heat);

  const heatButtons = document.querySelectorAll('.heat button');

  cold.addEventListener('click', () => {
    for (let i = 0; i < heatButtons.length; i++) {
      heatButtons[i].classList.remove('active');
    }
    cold.classList.add('active');
  });
  hot.addEventListener('click', () => {
    for (let i = 0; i < heatButtons.length; i++) {
      heatButtons[i].classList.remove('active');
    }
    hot.classList.add('active');
  });
};

// Fonction qui crée la div de choix de taille
const createSizeChoices = () => {
  // Création de la div qui contient les boutons des taille
  const sizeChoices = [
    'small',
    'large'
  ];

  // Création de la div qui contient les boutons des choix de taille
  choices.innerHTML='';
  const size = document.createElement("div");
  size.classList.add('size');

  // création à la volée de chaque div de saveur
  for (let i = 0; i < sizeChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", sizeChoices[i]);
    size.appendChild(elem);
    elem.addEventListener('click', () => {
      elem.style.backgroundColor = "green";
    })
  }
  choices.appendChild(size);
};

// Fonction qui crée la div de choix de saveurs
const createFlavourChoices = () => {
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

  // Création de la div qui contient les boutons des choix de saveur
  choices.innerHTML='';
  const flavour = document.createElement("div");
  flavour.classList.add('flavour');

  // création à la volée de chaque div de saveur
  for (let i = 0; i < flavourChoices.length; i++) {
    const elem = document.createElement("button");
    elem.setAttribute("id", flavourChoices[i]);
    flavour.appendChild(elem);
    elem.addEventListener('click', () => {
      elem.style.backgroundColor = "green";
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
