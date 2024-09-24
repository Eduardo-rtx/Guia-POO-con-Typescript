class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: number;

    constructor(nombreParam: string, cantidadParam: number, tipoCuentaParam: string, numeroCuentaParam: number) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }

    // Método para depositar dinero en la cuenta
    public depositar(cantidad: number): void {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente: $${cantidad}.`);
        }
    }

    // Método para retirar dinero de la cuenta
    public retirar(valor: number): void {
        if (this.cantidad < 5) {
            console.log("No hay suficiente dinero en la cuenta para realizar un retiro.");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else {
            this.cantidad -= valor;
            console.log(`Has retirado: $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }

    // Método para mostrar los datos de la cuenta
    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
        console.log(`Número de Cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo: $${this.cantidad}`);
    }
}

const cuenta = new Cuenta("Juan Pérez", 100, "Ahorro", 777865421);
cuenta.mostrarDatos();
cuenta.depositar(10);
cuenta.retirar(20);
cuenta.retirar(3);
