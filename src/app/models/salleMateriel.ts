import { Materiel } from './materiel';
import { Salle } from './salle';
export class SalleMateriel {
  id: number;
  dateDebut!: Date;
  dateFin!: Date;
  satut: boolean;
  estLoue: boolean;
  salle: Salle;
  materiel: Materiel;

  public constructor() {
    this.id = 0;
    this.satut = false;
    this.estLoue = false;
    this.salle = new Salle();
    this.materiel = new Materiel();
  }
}
