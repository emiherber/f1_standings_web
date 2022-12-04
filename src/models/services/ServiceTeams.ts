import { Team } from '../clases/Team';
import { IRequest } from '../interfaces/IRequest';

export class ServiceTeams implements IRequest<Team> {
  getPositions(): Promise<Team[]> {
    throw new Error('Method not implemented.');
  }

}
