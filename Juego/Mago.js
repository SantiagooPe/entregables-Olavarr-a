"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personaje_1 = require("./Personaje");
class Mago extends Personaje_1.Personaje {
    constructor(nombre, nivel, puntosDeVida) {
        super(nombre, nivel, puntosDeVida);
    }
    lanzarHechizo() {
        console.log(`${this.nombre} está lanzando un hechizo.`);
    }
    habilidadEspecial() {
        setTimeout(() => this.lanzarHechizo(), 2000); // Hechizo se lanza después de 2 segundos
    }
}
exports.Mago = Mago;
