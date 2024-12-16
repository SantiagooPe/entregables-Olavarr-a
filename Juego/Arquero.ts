import { Personaje } from './Personaje';

export class Arquero extends Personaje {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida);
    }

    dispararFlecha(): void {
        console.log(`${this.nombre} está disparando una flecha.`);
    }

    habilidadEspecial(): void {
        setTimeout(() => this.dispararFlecha(), 1500); // Dispara una flecha después de 1.5 segundos
    }
}
