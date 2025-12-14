let formEspeces = document.getElementById("formEspeces");
let formTiroir = document.getElementById("formTiroir");
let okCaisse = document.getElementById("okCaisse");
// Inputs Espèces
let piece5Millimes = document.getElementById("piece5Millimes");
let piece10Millimes = document.getElementById("piece10Millimes");
let piece20Millimes = document.getElementById("piece20Millimes");
let piece50Millimes = document.getElementById("piece50Millimes");
let piece100Millimes = document.getElementById("piece100Millimes");
let piece200Millimes = document.getElementById("piece200Millimes");
let piece500Millimes = document.getElementById("piece500Millimes");
let piece1Dinar = document.getElementById("piece1Dinar");
let piece2Dinars = document.getElementById("piece2Dinars");
let piece5Dinars = document.getElementById("piece5Dinars");
let billet5Dinars = document.getElementById("billet5Dinars");
let billet10Dinars = document.getElementById("billet10Dinars");
let billet20Dinars = document.getElementById("billet20Dinars");
let billet50Dinars = document.getElementById("billet50Dinars");
let billet100Dinars = document.getElementById("billet100Dinars");
// Inputs carte bancaire
let carteBancaireInput = document.getElementById("carteBancaire");
// Input Caisse Maitre
let caisseMaitreInput = document.getElementById("caisseMaitre");
// Footer Note
let footerNote = document.getElementById("footer-note");
console.log(footerNote.innerText);
// Calculer SommeEspeces
function calculerSommeEspeces() {
  let somme = 0;
  somme += +piece5Millimes.value * 0.005
  + +piece10Millimes.value * 0.01
  + +piece20Millimes.value * 0.02
  + +piece50Millimes.value * 0.05
  + +piece100Millimes.value * 0.1
  + +piece200Millimes.value * 0.2
  + +piece500Millimes.value * 0.5
  + +piece1Dinar.value * 1
  + +piece2Dinars.value * 2
  + +piece5Dinars.value * 5
  + +billet5Dinars.value * 5
  + +billet10Dinars.value * 10
  + +billet20Dinars.value * 20
  + +billet50Dinars.value * 50
  + +billet100Dinars.value * 100;
  document.getElementById("especes").value = somme;
  return somme;
};
// Écouter les changements dans les inputs espèces
document.querySelectorAll(".inpEspeces").forEach(input => {
  input.addEventListener("input", calculerSommeEspeces); // "input" = en temps réel
  // footerNote.innerText = "Modification: TAB permet d'accéder au prochain nombre de pièces ou billets.";
});
// Somme TR
function calculerSommeTR() {
  let somme = 0;
  let sommeTR = 0;
  // Récupérer toutes les entrées avec la classe "inpTR"
  document.querySelectorAll(".TR").forEach(input => {
    somme += +input.value;
  });
  sommeTR += somme - (somme * 0.1);
  // document.getElementById("TR").value = somme;
  return sommeTR;
}
// Somme KDO
function calculerSommeKDO() {
  let somme = 0;
  document.querySelectorAll(".KDO").forEach(input => {
    somme += +input.value;
  });
  return somme;
}
// Calculer Ecart

// let Ecar = calculerSommeEspeces() + calculerSommeTR() + calculerSommeKDO() + +carteBancaireInput.value - +caisseMaitre.value - 200;
// bouton clear inputs
let clearBtn = document.getElementById("clear-btn");
clearBtn.onclick = function () {
  document.querySelectorAll("input").forEach(input => {
    input.value = "";
  });
}

// let Ecar = calculerSommeEspeces() + calculerSommeTR() + calculerSommeKDO() + +carteBancaireInput.value - +caisseMaitre.value - 200;;

okCaisse.onclick = function () {
  // Calculer l'écart au moment du clic (assure la valeur à jour)
  const Ecar = calculerSommeEspeces()
    + calculerSommeTR()
    + calculerSommeKDO()
    + Number(carteBancaireInput.value || 0)
    - Number(caisseMaitreInput.value || 0)
    - 200;

  if (Ecar > 0) {
    Swal.fire({
      title: "Votre écart est Supérieur à",
      color: "green",
      html: `<p style="font-size: 40px; color: #228b22;">+${Ecar.toFixed(3)} DT</p>`,
      icon: "success",
      iconColor: "#228b22",
      confirmButtonText: "OK",
      confirmButtonColor: "#228b22",
    });

  } else if (Ecar < 0) {
    Swal.fire({
      title: "Votre écart est inferieur à",
      color: "red",
      html: `<p style="font-size: 40px; color: red;">${Ecar.toFixed(3)} DT</p>`,
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "red",
    });

  } else {
    Swal.fire({
      title: "Votre écart est nul",
      color: "blue",
      text: `${Ecar.toFixed(3)} DT`,
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "blue",
    });
  }
};
  // Footer Note
  let inputTR = document.querySelectorAll(".TR");
  let inputKDO = document.querySelectorAll(".KDO");
  let inputTotal = document.getElementById("especes");
  let inputEspeces = document.querySelectorAll(".inpEspeces");
  inputTR.forEach(input => {
    input.addEventListener("focus", () => {
      footerNote.innerText = "Modification! Sodexo TR: en Dinar";
      calculerSommeEspeces();
      calculerSommeTR();
      calculerSommeKDO();
    });
  });
  inputKDO.forEach(input => {
    input.addEventListener("focus", () => {
      footerNote.innerText = "Modification! Sodexo KDO: en Dinar";
      calculerSommeEspeces();
      calculerSommeTR();
      calculerSommeKDO();
    });
  });
  inputEspeces.forEach(input => {
    input.addEventListener("focus", () => {
      footerNote.innerText = "Modification! TAB permet d'accéder au prochain nombre de pièces ou billets.";
      calculerSommeEspeces();
      calculerSommeTR();
      calculerSommeKDO();
    });
  });
  inputTotal.addEventListener("focus", () => {
    footerNote.innerText = "Le montant saisi en espèces doit représenter la totalité du tiroircaisse";
      calculerSommeEspeces();
      calculerSommeTR();
      calculerSommeKDO();
  });
  caisseMaitreInput.addEventListener("focus", () => {
    footerNote.innerText = "Aller à Caiss Maîter, Analyse par caissière, saisie Montant CA Net";
  });