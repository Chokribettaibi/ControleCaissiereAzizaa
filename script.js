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
  console.log("Total Espèces: " + somme + " DT");
  document.getElementById("especes").value = somme;
  return somme;
};
// Écouter les changements dans les inputs espèces
document.querySelectorAll(".inpEspeces").forEach(input => {
  input.addEventListener("input", calculerSommeEspeces); // "input" = en temps réel
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
  console.log("Total TR: " + sommeTR + " DT");
  // document.getElementById("TR").value = somme;
  return sommeTR;
}
// Somme KDO
function calculerSommeKDO() {
  let somme = 0;
  document.querySelectorAll(".KDO").forEach(input => {
    somme += +input.value;
  });
  console.log("Total KDO: " + somme + " DT");
  // document.getElementById("KDO").value = somme;
  return somme;
}
// Calculer Ecart
let Ecar = calculerSommeEspeces() + calculerSommeTR() + calculerSommeKDO() + +carteBancaireInput.value - +caisseMaitre.value - 200;

// bouton clear inputs
let clearBtn = document.getElementById("clear-btn");
clearBtn.onclick = function () {
  document.querySelectorAll("input").forEach(input => {
    input.value = "";
  });
  // document.getElementById("especes").value = "";
  // document.getElementById("TR").value = "";
}
let footerNote = document.getElementById("footer-note");

if (Ecar > 0) {
  // Bouton OK Caisse
  okCaisse.onclick = function () {
    Swal.fire({
          title: "Votre écart est Supérieur à",
          color: "green",
          html: `<p style="font-size: 40px; color: #228b22;">+${Ecar} DT</p>`,
          icon: "success",
          iconColor: "#228b22",
          // background: "#7ccd7c",
          confirmButtonText: "OK",
          confirmButtonColor: "#228b22",
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
  };

} else if (Ecar < 0) {
  // Bouton OK Caisse
  okCaisse.onclick = function () {
    Swal.fire({
          title: "Votre écart est inferieur à",
          color: "red",
          // background: "#ff69b4",
          html: `<p style="font-size: 40px; color: red;">${Ecar} DT</p>`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "red",
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });;
  };
} else {
  // Bouton OK Caisse
  okCaisse.onclick = function () {
    Swal.fire({
          title: "Votre écart est nul",
          color: "blue",
          text: `${Ecar} DT`,
          icon: "info",
          confirmButtonText: "OK",
          confirmButtonColor: "blue",
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });;
  };
}
