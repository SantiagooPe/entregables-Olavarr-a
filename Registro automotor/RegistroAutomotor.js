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
    // Mostrar detalles de todos los vehículos utilizando getters
    mostrarVehiculos() {
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
    modificarAuto(patente, nuevaMarca, nuevoModelo) {
        const auto = this.autos.find(a => a.getPatente() === patente);
        if (auto) {
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            return true;
        }
        return false;
    }
    darDeBajaMoto(patente) {
        this.motos = this.motos.filter(moto => moto.getPatente() !== patente);
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
