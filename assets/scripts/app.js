//alert('Ceci est une alerte avec js');

// ceci est un commentaire en une seule ligne

/* ceci est une commentaire 
  sur plusieurs ligne 
  c'est un bloc de commentaire*/

const defaultResult = 0;
let currentResult = defaultResult;
let tab = [];

function getUserNumbrInput() {
  return parseInt(userInput.value);
}

// pour afficher les operation dans la calcul
function operateur(op, before, after) {
  // pour ecrire les bon operateur en sortie
  const desc = `${before} ${op} ${after}`;
  outputResult(currentResult, desc); //definit dans vendor.js
}

// pour la console
function writeToLog(opera, avant, operan, apres) {
  const objet = {
    operation: opera,
    avant: avant,
    entrer: operan,
    resultat: apres,
  };
  tab.push(objet);
  console.log(objet);
}

function CalculResultat(typeCalcul) {
  const numbr = getUserNumbrInput();
  const inti = currentResult;
  let mathop;
  if (typeCalcul === "ADD") {
    currentResult += numbr;
    mathop = "+";
  } else if (typeCalcul === "SUB") {
    currentResult -= numbr;
    mathop = "-";
  } else if (typeCalcul === "MUL") {
    currentResult = currentResult * numbr;
    mathop = "*";
  } else {
    currentResult = currentResult / numbr;
    mathop = "/";
  }

  operateur(mathop, inti, numbr);
  writeToLog(typeCalcul, inti, numbr, currentResult);
}

// function add() {
//   CalculResultat("ADD");
// }

// function sub() {
//   CalculResultat("SUB");
// }

// function mul() {
//   CalculResultat("MUL");
// }

// function div() {
//   CalculResultat("DIV");
// }

addBtn.addEventListener("click", CalculResultat.bind(this, "ADD"));
subtractBtn.addEventListener("click", CalculResultat.bind(this, "SUB"));
divideBtn.addEventListener("click", CalculResultat.bind(this, "MUL"));
multiplyBtn.addEventListener("click", CalculResultat.bind(this, "DIV"));
