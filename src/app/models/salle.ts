import { Responsable } from './responsable';

export class Salle {
  id: number;
  photo: string;
  nom: string;
  capacite: number;
  prix: number;
  statut: boolean;
  responsable: Responsable;

  public constructor() {
    this.id = 0;
    this.photo = '';
    this.nom = '';
    this.capacite = 0;
    this.prix = 0;
    this.statut = false;
    this.responsable = new Responsable();
  }
}
