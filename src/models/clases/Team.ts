export class Team {
  nombre: string;
  posicion: number;
  puntos: number;
  constructor(
    nombre: string,
    posicion: number,
    puntos: number
  ){
    this.nombre = nombre;
    this.posicion = posicion;
    this.puntos = puntos;
  }
}
