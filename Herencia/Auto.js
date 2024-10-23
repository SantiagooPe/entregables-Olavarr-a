"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Auto extends Vehiculo_1.Vehiculo {
    constructor(patente, marca, modelo, cantidadPuertas) {
        super(patente, marca, modelo);
        this.cantidadPuertas = cantidadPuertas;
    }
    // Cantidad de puertas
    getCantidadPuertas() {
        return this.cantidadPuertas;
    }
}
exports.Auto = Auto;
