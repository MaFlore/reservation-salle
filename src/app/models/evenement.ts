import { Participant } from './participant';
import { Reservation } from './reservation';
export class Evenement {
  id: number;
  matricule: string;
  typeEvenement: string;
  nom: string;
  description: string;
  dateDebut!: Date;
  dateFin!: Date;
  reservation: Reservation;
  participants: Participant[];

  public constructor() {
    this.id = 0;
    this.matricule = '';
    this.typeEvenement = '';
    this.nom = '';
    this.description = '';
    this.reservation = new Reservation();
    this.participants = [];
  }
}
