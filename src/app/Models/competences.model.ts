import {Deserializable} from './deserializable.interface';

export class Competences implements Deserializable{

  id?: number;
  libelle: string;
  groupeCompetences: any;
  niveaux: any;
  constructor(libelle: string, groupeCompetences: any, niveaux: any, id?: number) {
    this.libelle = libelle;
    this.groupeCompetences = groupeCompetences;
    this.niveaux = niveaux;
    this.id = id;
  }

  deserializable(input: any): this {
    Object.assign(this, input);
    return this;
  }

}
