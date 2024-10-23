"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Moto extends Vehiculo_1.Vehiculo {
    constructor(patente, marca, modelo, cilindrada) {
        super(patente, marca, modelo);
        this.cilindrada = cilindrada;
    }
    getCilindrada() {
        return this.cilindrada;
    }
}
exports.Moto = Moto;
