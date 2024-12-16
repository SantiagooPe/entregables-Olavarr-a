import { Personaje } from './Personaje';

export class Mago extends Personaje {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida);
    }

    lanzarHechizo(): void {
        console.log(`${this.nombre} está lanzando un hechizo.`);
    }

    habilidadEspecial(): void {
        setTimeout(() => this.lanzarHechizo(), 2000); // Hechizo se lanza después de 2 segundos
    }
}
