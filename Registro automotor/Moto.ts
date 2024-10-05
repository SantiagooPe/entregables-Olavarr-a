export class Moto {
    private patente: string;
    private marca: string;
    private modelo: string;

    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }

    // Métodos Getters y Setters
    getPatente(): string {
        return this.patente;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    setMarca(nuevaMarca: string): void {
        this.marca = nuevaMarca;
    }

    setModelo(nuevoModelo: string): void {
        this.modelo = nuevoModelo;
    }


}
