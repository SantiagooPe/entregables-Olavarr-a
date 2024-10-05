"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar las clases Auto, Moto, Camion y RegistroAutomotor
const Auto_1 = require("./Auto");
const Moto_1 = require("./Moto");
const Camion_1 = require("./Camion");
const RegistroAutomotor_1 = require("./RegistroAutomotor");
// Crear una instancia del RegistroAutomotor
const registro = new RegistroAutomotor_1.RegistroAutomotor();
// Crear instancias de vehículos
const auto1 = new Auto_1.Auto("AAA111", "Ford", "Focus");
const moto1 = new Moto_1.Moto("BBB222", "Honda", "CBR");
const camion1 = new Camion_1.Camion("CCC333", "Mercedes", "Actros");
// Agregar vehículos al registro
registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);
// Mostrar los vehículos registrados
registro.mostrarVehiculos();
// Modificar un auto
registro.modificarAuto("AAA111", "Chevrolet", "Cruze");
// Dar de baja una moto
registro.darDeBajaMoto("BBB222");
// Mostrar los vehículos después de los cambios
console.log("\nDespués de modificar el auto y dar de baja la moto:");
registro.mostrarVehiculos();
