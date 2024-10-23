"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    //Método getters
    getPatente() {
        return this.patente;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    //Setters
    setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
    setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
}
exports.Vehiculo = Vehiculo;
