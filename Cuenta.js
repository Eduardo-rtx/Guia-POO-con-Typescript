var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoCuentaParam, numeroCuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }
    // Método para depositar dinero en la cuenta
    Cuenta.prototype.depositar = function (cantidad) {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente: $".concat(cantidad, "."));
        }
    };
    // Método para retirar dinero de la cuenta
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad < 5) {
            console.log("No hay suficiente dinero en la cuenta para realizar un retiro.");
        }
        else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else {
            this.cantidad -= valor;
            console.log("Has retirado: $".concat(valor, ". Saldo restante: $").concat(this.cantidad));
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de Cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de Cuenta: ".concat(this.numeroCuenta));
        console.log("Saldo: $".concat(this.cantidad));
    };
    return Cuenta;
}());
var cuenta = new Cuenta("Juan Pérez", 100, "Ahorro", 777865421);
cuenta.mostrarDatos();
cuenta.depositar(10);
cuenta.retirar(20);
cuenta.retirar(3);
