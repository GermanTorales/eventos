function move(img) {
  // Creamos el evento en el img para controlar la pulsación sobre el elemento
  // cuando se pulsa sobre el elemento se ejecuta la funcion inicio()
  img.addEventListener("mousedown", inicio, false);

  // Iniciamos el arrastre
  function inicio() {
    // Cremos los eventos mousemove y mouseup
    document.addEventListener("mousemove", mover, false);
    document.addEventListener("mouseup", soltar, false);
  }

  // Movemos el elemento por la pantalla cada vez que se mueve el cursor
  function mover(e) {
    img.style.top = `${e.clientY}px`;
    img.style.left = `${e.clientX}px`;
  }

  // Funcion que se ejecuta el botón del ratón cuando lo dejamos de presionar
  function soltar(e) {
    // Eliminamos los eventos creados en la funcion inicio
    document.removeEventListener("mousemove", mover, false);
    document.removeEventListener("mouseup", soltar, false);
  }
}

// Inicializamos el movimiento del img
move(document.querySelector("img"));
