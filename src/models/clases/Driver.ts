export class Driver {
  nombre: string;
  posicion: number;
  puntos: number;
  nacionalidad: string;

  constructor(
    nombre: string,
    posicion: number,
    puntos: number,
    nacionalidad: string
  ){
    this.nombre = nombre;
    this.posicion = posicion;
    this.puntos = puntos;
    this.nacionalidad = nacionalidad;
  }
}
