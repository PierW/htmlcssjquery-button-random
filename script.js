//TASK1
// var element = document.getElementById("button");
// var stamp = document.getElementById("data");
//
// var array = [];

function getRandom() {
    return Math.floor(Math.random() * 100) +1;
}
//------------------------------ CON FUNZIONE ANONIMA
// element.addEventListener("click", function() {
//   var rndValue = getRandom();
//   console.log(rndValue + " diviso 2 - RESTO = " + (rndValue%2));
//
//   if (isEven(rndValue)) {
//     stamp.style.color = "black";
//     stamp.style.background = "red";
//   }
//   else {
//     stamp.style.color = "red";
//     stamp.style.background = "black";
//   }
//   array.push(rndValue);
//   stamp.innerHTML += rndValue + " ";
//   element.innerHTML =  "Numeri Generati= " + array.length;
// });

//--------------------------------------OPPURE CON FUNZIONE NORMALE.
// WARNING: addEventListener non accetta attributi di ingresso.

// function clickButton() {
//   stamp.innerHTML = getRandom();
// }
//
// element.addEventListener("click", clickButton);

//TASK2
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

///////////STESSO ESERCIZIO DI IERI (sopra) MA USARE SOLO JQUARY

$("body").css("text-align", "center"); //Centro testo con jquery (1 modifica)
var element = $("#button");
var stamp = $("#data");
var array = [];

element.click(function() {
  var rndValue = getRandom();
  console.log(rndValue + " diviso 2 - RESTO = " + (rndValue%2));

  if (isEven(rndValue)) {
    stamp.css({"color" : "black", "background-color" : "red"}); // (Più modifiche sul css agisco per oggetti)
  }
  else {
    stamp.css({"color" : "red", "background-color" : "black"});
  }
  array.push(rndValue);
  stamp.append(rndValue + " ");
  element.text("Numeri Generati= " + array.length);
});
