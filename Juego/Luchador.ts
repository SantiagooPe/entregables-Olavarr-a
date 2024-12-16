import { Personaje } from './Personaje';

export class Luchador extends Personaje {
    constructor(nombre: string, nivel: number, puntosDeVida: number) {
        super(nombre, nivel, puntosDeVida);
    }

    usarEspada(): void {
        console.log(`${this.nombre} está usando su espada.`);
    }

    habilidadEspecial(): void {
        setTimeout(() => this.usarEspada(), 1000); // Usa la espada después de 1 segundo
    }
}
