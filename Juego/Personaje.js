"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(nombre, nivel = 1, puntosDeVida = 100) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }
    atacar() {
        console.log(`${this.nombre} está atacando.`);
    }
    defender() {
        console.log(`${this.nombre} está defendiendo.`);
    }
    evolucionar() {
        this.nivel++;
        this.puntosDeVida += 50; // Incrementa los puntos de vida al evolucionar
        console.log(`${this.nombre} ha evolucionado al nivel ${this.nivel} y ahora tiene ${this.puntosDeVida} puntos de vida.`);
    }
}
exports.Personaje = Personaje;
