import { Personne } from './personne';
import { Reservation } from './reservation';
export class Client extends Personne {
  reservations: Reservation[];

  public constructor() {
    super();
    this.reservations = [];
  }
}
