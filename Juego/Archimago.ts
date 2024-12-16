import { Mago } from './Mago';

export class Archimago extends Mago {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida);
    }

    lanzarHechizoPoderoso(): void {
        console.log(`${this.nombre} está lanzando un hechizo poderoso.`);
    }

    habilidadEspecial(): void {
        setTimeout(() => this.lanzarHechizoPoderoso(), 2500); // Hechizo poderoso se lanza después de 2.5 segundos
    }
}
