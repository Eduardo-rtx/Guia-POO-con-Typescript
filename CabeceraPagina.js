var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // Método que obtiene el título, color y fuente
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente);
    };
    // Método para elegir la alineación del título
    CabeceraPagina.prototype.ElegirAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método para imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("\n        T\u00EDtulo: ".concat(this.titulo, "\n        Color: ").concat(this.color, "\n        Fuente: ").concat(this.fuente, "\n        Alineaci\u00F3n: ").concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina("Probando Página", "Azul", "Arial");
console.log(cabecera.obtenerPropiedades()); // Muestra el título, color y fuente
cabecera.ElegirAlineacion("izquierda"); // Cambia la alineación a "centrado"
cabecera.imprimirPropiedades(); // Imprime todas las propiedades
