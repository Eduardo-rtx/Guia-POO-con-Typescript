class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // Método que obtiene el título, color y fuente
    obtenerPropiedades(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    // Método para elegir la alineación del título
    ElegirAlineacion(alineacion: "centrado" | "derecha" | "izquierda"): void {
        this.alineacion = alineacion;
    }

    // Método para imprimir todas las propiedades
    imprimirPropiedades(): void {
        console.log(`
        Título: ${this.titulo}
        Color: ${this.color}
        Fuente: ${this.fuente}
        Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina("Probando Página", "Azul", "Arial");
console.log(cabecera.obtenerPropiedades()); // Muestra el título, color y fuente
cabecera.ElegirAlineacion("izquierda"); // Cambia la alineación a "centrado"
cabecera.imprimirPropiedades(); // Imprime todas las propiedades
