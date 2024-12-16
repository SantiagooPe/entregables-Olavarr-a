"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Personaje_1 = require("./Personaje");
class Arquero extends Personaje_1.Personaje {
    constructor(nombre, nivel, puntosDeVida) {
        super(nombre, nivel, puntosDeVida);
    }
    dispararFlecha() {
        console.log(`${this.nombre} está disparando una flecha.`);
    }
    habilidadEspecial() {
        setTimeout(() => this.dispararFlecha(), 1500); // Dispara una flecha después de 1.5 segundos
    }
}
exports.Arquero = Arquero;
