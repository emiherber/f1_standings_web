export interface IRequest<T> {
  getPositions(): Promise<T[]>;
}
