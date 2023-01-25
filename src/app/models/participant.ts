import { Evenement } from './evenement';

export class Participant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  evenement: Evenement;

  public constructor() {
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.telephone = '';
    this.evenement = new Evenement();
  }
}
