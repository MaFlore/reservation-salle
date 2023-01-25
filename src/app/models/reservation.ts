import { ReservationSalle } from './responsableSalle';
import { Client } from './client';

export class Reservation {
  id: number;
  dateDebut!: Date;
  dateFin!: Date;
  client: Client;
  reservationSalle: ReservationSalle;

  public constructor() {
    this.id = 0;
    this.client = new Client();
    this.reservationSalle = new ReservationSalle();
  }
}
