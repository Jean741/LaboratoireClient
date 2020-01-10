import {Membre} from './membre.model';

export class Etudiant extends Membre{

  get date_inscription(): Date {
    return this._date_inscription;
  }

  set date_inscription(value: Date) {
    this._date_inscription = value;
  }

  get diplome(): string {
    return this._diplome;
  }

  set diplome(value: string) {
    this._diplome = value;
  }
   private _date_inscription: Date;
  private _diplome: string;

  constructor() {
    super();
  }
}
