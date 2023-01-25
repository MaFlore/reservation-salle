export class Materiel {
  id: number;
  matricule: string;
  nom: string;
  description: string;
  prix: number;
  statut: boolean;

  public constructor() {
    this.id = 0;
    this.matricule = '';
    this.nom = '';
    this.description = '';
    this.prix = 0;
    this.statut = false;
  }
}
