import {Deserializable} from './deserializable.interface';
// tslint:disable-next-line:class-name
export class Referentiel implements Deserializable{

  id: number ;
  libelle: string;
  presentation: string;
  criteresAdmission: string;
  criteresEvaluation: string;
  programme: any;
  groupeCompetences: any;

  // tslint:disable-next-line:max-line-length
  constructor(libelle: string, presentation: string, criteresAdmission: string, criteresEvaluation: string, programme: any, groupeCompetences: any, id?: number) {
    this.libelle = libelle;
    this.presentation = presentation;
    this.criteresAdmission = criteresAdmission;
    this.criteresEvaluation = criteresEvaluation;
    this.groupeCompetences = groupeCompetences;
    this.programme = programme;
    this.id = id;
  }

  deserializable(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
