"use strict"

let hinzufuegen = function() {
    let eintrag = document.createElement("li");
    let textNode = document.createTextNode(document.getElementById("eingabe").value);
    eintrag.appendChild(textNode);
    document.getElementById("aufgabenListe").appendChild(eintrag);
    document.getElementById("eingabe").value = "";
};

let liste = document.getElementById("aufgabenListe");
liste.addEventListener("click", function(event){
event.target.classList.toggle("angeklickt");
});
