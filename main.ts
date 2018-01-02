function hola(n){
    return "Hola Mundo "+nombre;
}

var nombre = "Aram";

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = hola(nombre);
