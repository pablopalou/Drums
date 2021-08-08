var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//paso por todos los tambores, y le agrego los event listeners con el click
for (var i = 0; i < numberOfDrumButtons; i++) {
  // utilizo funcion anonima
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // si alguien clickeo un drum, consigo la letra correspondiente, la hago sonar y le pongo la animacion

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//le agrego al documento el event listener de las letras. De tal manera que cuando alguien toque
// una letra, se genere el sonido y la animacion que corresponda.
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

//funcion que realiza el sonido, me pasan por parametro la letra que fue apretada o clickeada
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {
  //busco el boton que fue tocado segun la clase. Por eso se le agrega el punto.
  //Ejemplo: Para buscar la w se pone document.querySelector(".w");
  var activeButton = document.querySelector("." + currentKey);
  // le agrego al boton activo la clase "pressed";
  //esta clase le pone como una sombra
  activeButton.classList.add("pressed");

  //para que esa clase no quede activada por siempre, la tengo que remover.
  //setTimeout lo que hace es esperar 100 milisegundos (o el tiempo que vos le pases mejor dicho)
  // y luego de ese tiempo ejecuta la funcion que le pases.
  //(En este caso pasados los 0,1 segundos le quita la clase pressed) y todo vuelve a la normalidad). 
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
