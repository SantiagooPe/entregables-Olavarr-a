"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Camion extends Vehiculo_1.Vehiculo {
    constructor(patente, marca, modelo, capacidadCarga) {
        super(patente, marca, modelo);
        this.capacidadCarga = capacidadCarga;
    }
    //Capacidad de Carga
    getCapacidadCarga() {
        return this.capacidadCarga;
    }
}
exports.Camion = Camion;
