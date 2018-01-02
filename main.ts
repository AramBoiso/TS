
//  Funciones y Tipado 

function numero(num:number):string{
    return "Hola "+num;
}

function string(texto:string):number{
	if(texto == "hola"){
		var num = 66;
	}
	else{
		 num = 90;
	}

	return num;
}
alert(numero(19));

alert(string("aram"));
