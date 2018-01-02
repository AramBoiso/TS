function hola(n) {
    return "Hola Mundo " + nombre;
}
var nombre = "Aram";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = hola(nombre);
