var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Usuarios = /** @class */ (function () {
        //   Otorgarle valores por defecto a las propiedades de la clase
        function Usuarios(pais) {
            if (pais === void 0) { pais = null; }
            this.pais = pais;
            this.numeroSeguidores = 0;
            if (pais == null) {
                this.nacionalidad = "Mexico";
            }
            else {
                this.nacionalidad = pais;
            }
            this.saldo = 1500;
        }
        //     Metodos de la clase   
        Usuarios.prototype.getNombre = function () {
            return this.nombre;
        };
        Usuarios.prototype.setNombre = function (n) {
            this.nombre = n;
        };
        Usuarios.prototype.getPais = function () {
            return this.nacionalidad;
        };
        Usuarios.prototype.setPais = function (pais) {
            this.nacionalidad = pais;
        };
        Usuarios.prototype.teSigue = function () {
            this.numeroSeguidores++;
        };
        Usuarios.prototype.yaNoTeSigue = function () {
            this.numeroSeguidores--;
        };
        Usuarios.prototype.seguidores = function () {
            return this.numeroSeguidores;
        };
        return Usuarios;
    }());
    var usuarioUno = new Usuarios(); /*  Instanciar o Crear un Objeto */
    //Acciones del usuario
    usuarioUno.setNombre("Aram");
    alert("Bienvenido: " + usuarioUno.getNombre());
    usuarioUno.teSigue();
    usuarioUno.teSigue();
    usuarioUno.teSigue();
    usuarioUno.teSigue();
    usuarioUno.yaNoTeSigue();
    alert("Seguidores: " + usuarioUno.seguidores());
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
    var aramStore = /** @class */ (function (_super) {
        __extends(aramStore, _super);
        function aramStore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        aramStore.prototype.getSaldo = function () {
            return this.saldo;
        };
        aramStore.prototype.setSaldo = function (s) {
            this.saldo += s;
        };
        return aramStore;
    }(Usuarios));
    var clienteUno = new aramStore();
    alert(clienteUno.getSaldo());
}());
