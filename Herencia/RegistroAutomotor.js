"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
class RegistroAutomotor {
    constructor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    // Método para agregar vehículos
    agregarAuto(auto) {
        this.autos.push(auto);
    }
    agregarMoto(moto) {
        this.motos.push(moto);
    }
    agregarCamion(camion) {
        this.camiones.push(camion);
    }
    // Mostrar detalles de todos los vehículos 
    mostrarVehiculos() {
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
    modificarAuto(patente, nuevaMarca, nuevoModelo) {
        const auto = this.autos.find(a => a.getPatente() === patente);
        if (auto) {
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            return true;
        }
        return false;
    }
    //Modoficar moto
    modificarMoto(patente, nuevaMarca, nuevoModelo) {
        const moto = this.motos.find(m => m.getPatente() === patente);
        if (moto) {
            moto.setMarca(nuevaMarca);
            moto.setModelo(nuevoModelo);
            return true;
        }
        return false;
    }
    darDeBajaMoto(patente) {
        this.motos = this.motos.filter(moto => moto.getPatente() !== patente);
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
