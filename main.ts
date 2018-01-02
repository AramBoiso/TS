//variable y Tipos

var na:string = "Aram",
   age:number = 19,
   programer:boolean = true,
   langs:Array<string> =["php","JS","Go"],
   etiqueta = <HTMLElement>document.getElementById("container");

    etiqueta.innerHTML = na+" "+age+" "+programer+" "+langs[0];


    // var - let
var a:number = 7;
var b:number = 12;

if(a === 7){
	let a = 4;
	 b -= 1;

	console.log(a+" "+b);
}