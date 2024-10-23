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

    // Mostrar detalles de todos los vehículos 
    mostrarVehiculos(): void {
        
        console.log("Autos:");
        this.autos.forEach(auto => {
            console.log(`Patente: ${auto.getPatente()}, Marca: ${auto.getMarca()}, Modelo: ${auto.getModelo()}, Puertas: ${auto.getCantidadPuertas()}`);
        });
    
        
        console.log("Motos:");
        this.motos.forEach(moto => {
            console.log(`Patente: ${moto.getPatente()}, Marca: ${moto.getMarca()}, Modelo: ${moto.getModelo()}, Cilindrada: ${moto.getCilindrada()} cc`);
        });
    
        
        console.log("Camiones:");
        this.camiones.forEach(camion => {
            console.log(`Patente: ${camion.getPatente()}, Marca: ${camion.getMarca()}, Modelo: ${camion.getModelo()}, Capacidad de carga: ${camion.getCapacidadCarga()} kg`);
        });
    }
    

    // Método para modificar auto
    modificarAuto(patente: string, nuevaMarca: string, nuevoModelo: string): boolean {
        const auto = this.autos.find(a => a.getPatente() === patente);
        if (auto) {
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            return true;
        }
        return false;
    }

    //Modoficar moto
    modificarMoto(patente: string, nuevaMarca: string, nuevoModelo: string): boolean {
        const moto = this.motos.find(m => m.getPatente() === patente);
        if (moto) {
            moto.setMarca(nuevaMarca);
            moto.setModelo(nuevoModelo);
            return true;
        }
        return false;
    }

    darDeBajaMoto(patente: string): void {
        this.motos = this.motos.filter(moto => moto.getPatente() !== patente);
    }
}
