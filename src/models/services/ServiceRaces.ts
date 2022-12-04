import { Race } from '../clases/Race';
import { IRequest } from '../interfaces/IRequest';

export class ServiceRaces implements IRequest<Race> {
  getPositions(): Promise<Race[]> {
    throw new Error('Method not implemented.');
  }

}
