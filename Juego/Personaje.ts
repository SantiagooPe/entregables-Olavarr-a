
export abstract class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;

    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 100) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    atacar(): void {
        console.log(`${this.nombre} está atacando.`);
    }

    defender(): void {
        console.log(`${this.nombre} está defendiendo.`);
    }

    abstract habilidadEspecial(): void;

    evolucionar(): void {
        this.nivel++;
        this.puntosDeVida += 50; // Incrementa los puntos de vida al evolucionar
        console.log(`${this.nombre} ha evolucionado al nivel ${this.nivel} y ahora tiene ${this.puntosDeVida} puntos de vida.`);
    }
}
