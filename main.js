// input espces
let inp50 = document.getElementById("inp50");
let inp20 = document.getElementById("inp20");
let inp10 = document.getElementById("inp10");
let inp5 = document.getElementById("inp5");
let inpp5 = document.getElementById("inpp5");
let inp2 = document.getElementById("inp2");
let inp1 = document.getElementById("inp1");
let inp05 = document.getElementById("inp0.5");
let inp200 = document.getElementById("inp200");
let inp100 = document.getElementById("inp100");
let inp50m = document.getElementById("inp50m");

// input TR
let TR4 = document.getElementById("TR4");
let TR5 = document.getElementById("TR5");
let TR6 = document.getElementById("TR6");
let TR7 = document.getElementById("TR7");
let TR8 = document.getElementById("TR8");
let TR9 = document.getElementById("TR9");
let TR10 = document.getElementById("TR10");
let TR50 = document.getElementById("TR50");
let TR100 = document.getElementById("TR100");

let reselt = document.getElementById("reselt")
// result espces
let reslt50 = document.getElementById("reslt50");
let reslt20 = document.getElementById("reslt20");
let reslt10 = document.getElementById("reslt10");
let reslt5 = document.getElementById("reslt5");
let resltp5 = document.getElementById("resltp5");
let reslt2 = document.getElementById("reslt2");
let reslt1 = document.getElementById("reslt1");
let reslt05 = document.getElementById("reslt0.5");
let reslt200 = document.getElementById("reslt200");
let reslt100 = document.getElementById("reslt100");
let reslt50m = document.getElementById("reslt50m");
let resltTR4 = document.getElementById("resltTR4")
let resltTR5 = document.getElementById("resltTR5")
let resltTR6 = document.getElementById("resltTR6")
let resltTR7 = document.getElementById("resltTR7")
let resltTR8 = document.getElementById("resltTR8")
let resltTR9 = document.getElementById("resltTR9")
let resltTR10 = document.getElementById("resltTR10")
let resltTR50 = document.getElementById("resltTR50")
let resltTR100 = document.getElementById("resltTR100")

let sodexo4 = document.getElementById("sodexo4")
let sodexo5 = document.getElementById("sodexo5")
let sodexo6 = document.getElementById("sodexo6")
let sodexo7 = document.getElementById("sodexo7")
let sodexo8 = document.getElementById("sodexo8")
let sodexo9 = document.getElementById("sodexo9")
let sodexo10 = document.getElementById("sodexo10")
let sodexo50 = document.getElementById("sodexo50")
let sodexo100 = document.getElementById("sodexo100")

let resltSodexo4 = document.getElementById("resltsodexo4")
let resltSodexo5 = document.getElementById("resltsodexo5")
let resltSodexo6 = document.getElementById("resltsodexo6")
let resltSodexo7 = document.getElementById("resltsodexo7")
let resltSodexo8 = document.getElementById("resltsodexo8")
let resltSodexo9 = document.getElementById("resltsodexo9")
let resltSodexo10 = document.getElementById("resltsodexo10")
let resltSodexo50 = document.getElementById("resltsodexo50")
let resltSodexo100 = document.getElementById("resltsodexo100")

let carteBancaire = document.getElementById("carteBancaire");
let total = document.getElementById("total");
let cais = document.getElementById("cais");
let écare = document.getElementById("écar");

let totalEspes = document.getElementById("totalEspes");
let totalSodexo = document.getElementById("totalSodexo");
let totalSodexoCadeau = document.getElementById("totalSodexoCadeau");

let btn = document.getElementById("btn");

let audio = document.getElementById("audio")
let audio2 = document.getElementById("audio2")

// console.log(JSON.stringify(sp50.value))

btn.onclick = function () {

    reslt50.value = inp50.value * 50;
    reslt20.value = inp20.value * 20;
    reslt10.value = inp10.value * 10;
    reslt5.value = inp5.value * 5;
    resltp5.value = inpp5.value * 5;
    reslt2.value = inp2.value * 2;
    reslt1.value = inp1.value * 1;
    reslt05.value = inp05.value * 0.5;
    reslt200.value = inp200.value * 0.2;
    reslt100.value = inp100.value * 0.1;
    reslt50m.value = inp50m.value * 0.05;

    resltTR4.value = (TR4.value  - TR4.value * 0.1) * 4 ;
    resltTR5.value = (TR5.value - TR5.value * 0.1) * 5;
    resltTR6.value = (TR6.value - TR6.value * 0.1) * 6;
    resltTR7.value = (TR7.value - TR7.value * 0.1) * 7;
    resltTR8.value = (TR8.value - TR8.value * 0.1) * 8;
    resltTR9.value = (TR9.value - TR9.value * 0.1) * 9;
    resltTR10.value = (TR10.value - TR10.value * 0.1) * 10;
    resltTR50.value = (TR50.value - TR50.value * 0.1) * 50;
    resltTR100.value = (TR100.value - TR100.value * 0.1) * 100;

    resltSodexo4.value = sodexo4.value * 4;
    resltSodexo6.value = sodexo6.value * 6;
    resltSodexo5.value = sodexo5.value * 5;
    resltSodexo7.value = sodexo7.value * 7;
    resltSodexo8.value = sodexo8.value * 8;
    resltSodexo9.value = sodexo9.value * 9;
    resltSodexo10.value = sodexo10.value * 10;
    resltSodexo50.value = sodexo50.value * 50;
    resltSodexo100.value = sodexo100.value * 100;


    total.value = +reslt10.value + +reslt20.value +
     +reslt50.value + +reslt5.value + +resltp5.value + 
     +reslt2.value + +reslt1.value + +reslt05.value + 
     +reslt200.value + +reslt100.value + +reslt50m.value + 
    +resltTR4.value + +resltTR5.value + 
    +resltTR6.value + +resltTR7.value + +resltSodexo4.value + +resltSodexo5.value +
    +resltSodexo6.value + +resltSodexo7.value + +resltSodexo8.value +
    +resltSodexo9.value + +resltSodexo10.value + +resltSodexo50.value +
    +resltSodexo100.value + +carteBancaire.value;

    écare.value = +total.value - +cais.value - 200;
    
    totalEspes.value = +reslt50.value + +reslt20.value +
     +reslt10.value + +reslt5.value + +resltp5.value + 
     +reslt2.value + +reslt1.value + +reslt05.value + 
     +reslt200.value + +reslt100.value + +reslt50m.value;

     totalSodexo.value = +resltTR4.value + +resltTR5.value +
     +resltTR6.value + +resltTR7.value + +resltTR8.value +
     +resltTR9.value + +resltTR10.value + +resltTR50.value +
     +resltTR100.value;

     totalSodexoCadeau.value = +resltSodexo4.value + +resltSodexo5.value +
     +resltSodexo6.value + +resltSodexo7.value + +resltSodexo8.value +
     +resltSodexo9.value + +resltSodexo10.value + +resltSodexo50.value +
     +resltSodexo100.value;

    reselt.style.display = "block";
    if (écare.value <= 0){
        reselt.style.background = "red";
    } else {
        reselt.style.background = "green";
        reselt.style.color = "#eee";
    }
}

let btn2 = document.getElementById("btnD");

// clear inputs

btn2.onclick = function (){
    reslt50.value = '';
    reslt20.value = '';
    reslt10.value = '';
    reslt5.value = '';
    resltp5.value = '';
    reslt2.value = '';
    reslt1.value = '';
    reslt05.value = '';
    reslt200.value = '';
    reslt100.value = '';
    reslt50m.value = '';

    total.value ='';
    écare.value = '';
    cais.value = '';

    resltTR4.value = '';
    resltTR5.value = '';
    resltTR6.value = '';
    resltTR7.value = '';
    resltTR8.value = '';
    resltTR9.value = '';
    resltTR10.value = '';
    resltTR50.value = '';
    resltTR100.value = '';
    
    inp50.value = '';
    inp20.value = '';
    inp10.value = '';
    inp5.value = '';
    inpp5.value = '';
    inp2.value = '';
    inp1.value = '';
    inp05.value = '';
    inp200.value = '';
    inp100.value = '';
    inp50m.value = '';

    sodexo4.value = '';
    sodexo5.value = '';
    sodexo6.value = '';
    sodexo7.value = '';
    sodexo8.value = '';
    sodexo9.value = '';
    sodexo10.value = '';
    sodexo50.value = '';
    sodexo100.value = '';

    carteBancaire.value = '';
    resltSodexo4.value = '';
    resltSodexo5.value = '';
    resltSodexo6.value = '';
    resltSodexo7.value = '';
    resltSodexo8.value = '';
    resltSodexo9.value = '';
    resltSodexo10.value = '';
    resltSodexo50.value = '';
    resltSodexo100.value = '';

    TR4.value = '';
    TR5.value = '';
    TR6.value = '';
    TR7.value = '';
    TR8.value = '';
    TR9.value = '';
    TR10.value = '';
    TR50.value = '';
    TR100.value = '';

    reselt.style.background = "#eee";
    reselt.style.color = "black";
  };
  
let lists = document.querySelectorAll(".nav ul li");
let listContent = document.querySelectorAll("main .sizeForm > div");


lists.forEach((li, index) => {
    li.addEventListener("click", () => {
        lists.forEach((li) => li.classList.remove("active"));
        li.classList.add("active");

        listContent.forEach((content) => content.classList.remove("active"));
        listContent[index].classList.add("active");
    });
});

