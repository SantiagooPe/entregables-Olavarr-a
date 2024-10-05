"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
class Moto {
    constructor(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    // Métodos Getters y Setters
    getPatente() {
        return this.patente;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
    setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
}
exports.Moto = Moto;
