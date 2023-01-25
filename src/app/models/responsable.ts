import { Personne } from './personne';
import { Salle } from './salle';
export class Responsable extends Personne {
  salles: Salle[];

  public constructor() {
    super();
    this.salles = [];
  }
}
