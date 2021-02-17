import {Deserializable} from './deserializable.interface';
// tslint:disable-next-line:class-name
export class Promo implements Deserializable{

  id?: number;
  langue: string;
  titre: string;
  description: string;
  lieu: string;
  referenceAgate: string;
  dateDebut: Date;
  fabrique: string;
  dateFin: Date;
  referentiel: any;
  apprenant: any;

  // tslint:disable-next-line:max-line-length
  constructor(langue: string, titre: string, description: string, lieu: string, referenceAgate: string, dateDebut: Date, fabrique: string, dateFin: Date, referentiel: any, apprenant: any, id?: number) {
    this.langue = langue;
    this.titre = titre;
    this.description = description;
    this.lieu = lieu;
    this.referenceAgate = referenceAgate;
    this.dateDebut = dateDebut;
    this.fabrique = fabrique;
    this.dateFin = dateFin;
    this.referentiel = referentiel;
    this.apprenant = apprenant;
    this.id = id;
  }

  deserializable(input: any): this {
    Object.assign(this, input);
    return this;
  }

}
