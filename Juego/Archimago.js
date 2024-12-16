"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archimago = void 0;
const Mago_1 = require("./Mago");
class Archimago extends Mago_1.Mago {
    constructor(nombre, nivel, puntosDeVida) {
        super(nombre, nivel, puntosDeVida);
    }
    lanzarHechizoPoderoso() {
        console.log(`${this.nombre} está lanzando un hechizo poderoso.`);
    }
    habilidadEspecial() {
        setTimeout(() => this.lanzarHechizoPoderoso(), 2500); // Hechizo poderoso se lanza después de 2.5 segundos
    }
}
exports.Archimago = Archimago;
