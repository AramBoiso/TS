(function(){

/*   Una interfaz sirve para asignarle propiedades o metodos obligatorios
      que tendra la clase a la que le implementes la interface
*/      
  interface UsuarioBase{
      nombre:string;
      getNombre():string;
     // setNombre();
  }  

  class Usuarios implements UsuarioBase{

//      Propiedades de la clase

      public nombre:string;
      public edad:number;
      public sexo:string;
      public nacionalidad:string;
      public numeroSeguidores:number;

      public saldo:number;


//   Otorgarle valores por defecto a las propiedades de la clase
      constructor( public pais = null){
          this.numeroSeguidores = 0;
          if (pais == null ){
              this.nacionalidad = "Mexico";
          }else{
              this.nacionalidad = pais;
          }

          this.saldo = 1500;
      }

     
  //     Metodos de la clase   

     public getNombre():string{
        return this.nombre;
     }

     public setNombre(n){
         this.nombre = n;
     }   

     public getPais(){
       return this.nacionalidad;
     }

     public setPais(pais){
         this.nacionalidad = pais;
     }

     public teSigue(){
         this.numeroSeguidores++;
      }

      public yaNoTeSigue(){
        this.numeroSeguidores--;
      }

      public seguidores (){
          return this.numeroSeguidores;
      }

  }


var usuarioUno = new Usuarios();   /*  Instanciar o Crear un Objeto */

   //Acciones del usuario
usuarioUno.setNombre("Aram");
alert("Bienvenido: "+usuarioUno.getNombre());



usuarioUno.teSigue();
usuarioUno.teSigue();
usuarioUno.teSigue();
usuarioUno.teSigue();
usuarioUno.yaNoTeSigue();


alert("Seguidores: "+ usuarioUno.seguidores());

// Usuario Dos

var ususarioDos = new Usuarios("Alemania");

//ususarioDos.setPais("Rusia");

console.log(ususarioDos.nacionalidad);



/*     Visibilidad de propiedades y metodos

public: al declarar una variable con la propiedad
        (public) se podra acceder al valor o a la 
        accion que este almacenado desde cualquier parte
        del codigo.

protected: con esta propiedad solo se pude acceder 
           a su valor desde la clase que lo defina
           o desde una clase que lo herede .
           
private:  Con esta propiedad unicamente se pude acceder
          o utilizar dentro de la clase que lo define.        

*/



//      Aqui estamos heredando la clase Usuarios

    class aramStore extends Usuarios{
        
        

        public getSaldo(){
            return this.saldo;
        }

        public setSaldo(s){
            this.saldo += s;
        }

    } 

    var clienteUno = new aramStore();

    alert(clienteUno.getSaldo());
}())