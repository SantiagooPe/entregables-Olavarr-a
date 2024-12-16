"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const Personaje_1 = require("./Personaje");
class Luchador extends Personaje_1.Personaje {
    constructor(nombre, nivel, puntosDeVida) {
        super(nombre, nivel, puntosDeVida);
    }
    usarEspada() {
        console.log(`${this.nombre} está usando su espada.`);
    }
    habilidadEspecial() {
        setTimeout(() => this.usarEspada(), 1000); // Usa la espada después de 1 segundo
    }
}
exports.Luchador = Luchador;
