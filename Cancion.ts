class Cancion {

    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
    }

    // Método getter para obtener el valor del autor
    public getAutor(): string {
        return this.autor;
    }

    // Método setter para establecer el valor del autor
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    public mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);
    }
}

const cancion = new Cancion("Imagine", "Rock");
cancion.setAutor("John Lennon");
cancion.mostrarDatos();

