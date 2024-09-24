class Calculadora {

    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        return a / b;
    }

    potencia(a: number, b: number): number {
        return Math.pow(a, b);//con pow se puede elevar un número a otro
    }

    factorial(n: number): number {
        if (n === 0 || n === 1) {//si n es 0 o 1, el factorial es 1
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}

const calculadora = new Calculadora();
//probamos los métodos de la calculadora
console.log(calculadora.sumar(10, 5));
console.log(calculadora.restar(10, 5));
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 5));
console.log(calculadora.potencia(2, 3));
console.log(calculadora.factorial(5));
