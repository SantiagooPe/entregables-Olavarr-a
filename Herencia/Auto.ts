import { Vehiculo } from './Vehiculo';

export class Auto extends Vehiculo {
    private cantidadPuertas: number;

    constructor(patente: string, marca: string, modelo: string, cantidadPuertas: number) {
        super(patente, marca, modelo);  
        this.cantidadPuertas = cantidadPuertas;
    }

// Cantidad de puertas
    
    getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }

    
}
