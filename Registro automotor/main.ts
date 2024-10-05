// Importar las clases Auto, Moto, Camion y RegistroAutomotor
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { RegistroAutomotor } from './RegistroAutomotor';

// Crear una instancia del RegistroAutomotor
const registro = new RegistroAutomotor();

// Crear instancias de vehículos
const auto1 = new Auto("AAA111", "Ford", "Focus");
const moto1 = new Moto("BBB222", "Honda", "CBR");
const camion1 = new Camion("CCC333", "Mercedes", "Actros");

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
