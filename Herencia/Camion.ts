import { Vehiculo } from './Vehiculo';

export class Camion extends Vehiculo {
    private capacidadCarga: number;

    constructor(patente: string, marca: string, modelo: string, capacidadCarga: number) {
        super(patente, marca, modelo);
        this.capacidadCarga = capacidadCarga;
    }

//Capacidad de Carga

    getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    
}
