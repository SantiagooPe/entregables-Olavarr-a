// Importa las clases Auto, Moto, y Camion
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

export class RegistroAutomotor {
    private autos: Auto[] = [];
    private motos: Moto[] = [];
    private camiones: Camion[] = [];

    // Método para agregar vehículos
    agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    // Mostrar detalles de todos los vehículos utilizando getters
    mostrarVehiculos(): void {
        console.log("Autos:");
        this.autos.forEach(auto => {
            console.log(`Patente: ${auto.getPatente()}, Marca: ${auto.getMarca()}, Modelo: ${auto.getModelo()}`);
        });

        console.log("Motos:");
        this.motos.forEach(moto => {
            console.log(`Patente: ${moto.getPatente()}, Marca: ${moto.getMarca()}, Modelo: ${moto.getModelo()}`);
        });

        console.log("Camiones:");
        this.camiones.forEach(camion => {
            console.log(`Patente: ${camion.getPatente()}, Marca: ${camion.getMarca()}, Modelo: ${camion.getModelo()}`);
        });
    }

    // Métodos para modificar y eliminar vehículos 
    modificarAuto(patente: string, nuevaMarca: string, nuevoModelo: string): boolean {
        const auto = this.autos.find(a => a.getPatente() === patente);
        if (auto) {
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            return true;
        }
        return false;
    }

    darDeBajaMoto(patente: string): void {
        this.motos = this.motos.filter(moto => moto.getPatente() !== patente);
    }
}
