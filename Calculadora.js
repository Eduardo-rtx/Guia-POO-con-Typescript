var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        return a / b;
    };
    Calculadora.prototype.potencia = function (a, b) {
        return Math.pow(a, b); //con pow se puede elevar un número a otro
    };
    Calculadora.prototype.factorial = function (n) {
        if (n === 0 || n === 1) { //si n es 0 o 1, el factorial es 1
            return 1;
        }
        return n * this.factorial(n - 1);
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
//probamos los métodos de la calculadora
console.log(calculadora.sumar(10, 5));
console.log(calculadora.restar(10, 5));
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 5));
console.log(calculadora.potencia(2, 3));
console.log(calculadora.factorial(5));
