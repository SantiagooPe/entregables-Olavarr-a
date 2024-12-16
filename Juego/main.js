"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mago_1 = require("./Mago");
const Luchador_1 = require("./Luchador");
const Arquero_1 = require("./Arquero");
const Archimago_1 = require("./Archimago");
const personajes = [
    new Mago_1.Mago("Gandalf", 10, 45),
    new Luchador_1.Luchador("Conan", 20, 30),
    new Arquero_1.Arquero("Legolas", 50, 25),
    new Archimago_1.Archimago("Saruman", 60, 83)
];
personajes.forEach(personaje => {
    personaje.atacar();
    personaje.defender();
    personaje.habilidadEspecial();
    personaje.evolucionar();
});
