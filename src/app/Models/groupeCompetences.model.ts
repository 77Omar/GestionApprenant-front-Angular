import {Deserializable} from './deserializable.interface';
// tslint:disable-next-line:class-name
export class groupeCompetences implements Deserializable{

  id?: number;
  libelle: string;
  descriptif: string;
  competences: any;
  constructor(libelle: string, descriptif: string, competences: any, id?: number) {
    this.libelle = libelle;
    this.descriptif = descriptif;
    this.competences = competences;
    this.id = id;
  }

  deserializable(input: any): this {
    Object.assign(this, input);
    return this;
  }

}

