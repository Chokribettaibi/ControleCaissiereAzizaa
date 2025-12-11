let okCaisse = document.getElementById("okCaisse");

okCaisse.onclick = function () {
  Swal.fire({
        title: "Votre écart est de",
        text: "7.370 DT",
        icon: "success",
        confirmButtonText: "OK",
        // showCancelButton: true,
        // cancelButtonText: "Annuler",
        // theme: 'bootstrap-5'
      });
};
