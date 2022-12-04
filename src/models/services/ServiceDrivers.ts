import { Driver } from '../clases/Driver';
import { IRequest } from '../interfaces/IRequest';

export class ServiceDrivers implements IRequest<Driver> {
  getPositions(): Promise<Driver[]> {
    throw new Error('Method not implemented.');
  }

}
