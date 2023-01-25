import { Materiel } from './materiel';
export class Categorie {
  id: number;
  code: string;
  libelle: string;
  description: string;
  materiels: Materiel[];

  public constructor() {
    this.id = 0;
    this.code = '';
    this.libelle = '';
    this.description = '';
    this.materiels = [];
  }
}
