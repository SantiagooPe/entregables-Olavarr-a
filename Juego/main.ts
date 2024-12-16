import { Mago } from './Mago';
import { Luchador } from './Luchador';
import { Arquero } from './Arquero';
import { Archimago } from './Archimago';

const personajes = [
    new Mago("Gandalf", 10, 45),
    new Luchador("Conan", 20, 30),
    new Arquero("Legolas", 50, 25),
    new Archimago("Saruman", 60, 83)
];

personajes.forEach(personaje => {
    personaje.atacar();
    personaje.defender();
    personaje.habilidadEspecial();
    personaje.evolucionar();
});
