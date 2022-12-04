export class Race {
  nombre: string;
  fecha: string;
  ubicacion: string;

  constructor(
    nombre: string,
    fecha: string,
    ubicacion: string
  ){
    this.nombre = nombre;
    this.fecha = fecha;
    this.ubicacion = ubicacion;
  }
}
