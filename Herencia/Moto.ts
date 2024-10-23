import { Vehiculo } from './Vehiculo';

export class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(patente: string, marca: string, modelo: string, cilindrada: number) {
        super(patente, marca, modelo);
        this.cilindrada = cilindrada;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }


}
