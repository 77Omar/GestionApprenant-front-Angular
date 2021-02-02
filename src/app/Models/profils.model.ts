import {Deserializable} from './deserializable.interface';

export class Profils implements Deserializable{

  id?: number;
  libelle: string;
  constructor(libelle: string, id?: number) {
    this.libelle = libelle;
    this.id = id;
  }

  deserializable(input: any): this {
    Object.assign(this, input);
    return this;
  }

}
