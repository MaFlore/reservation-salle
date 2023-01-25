import { Reservation } from './reservation';
import { Salle } from './salle';

export class ReservationSalle {
  id: number;
  nombreSalles: number;
  reservation: Reservation;
  salle: Salle;

  public constructor() {
    this.id = 0;
    this.nombreSalles = 0;
    this.reservation = new Reservation();
    this.salle = new Salle();
  }
}
