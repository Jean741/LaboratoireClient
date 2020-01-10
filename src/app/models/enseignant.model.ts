import {Membre} from './membre.model';

export class Enseignant extends Membre{

  get etablissement(): string {
    return this._etablissement;
  }

  set etablissement(value: string) {
    this._etablissement = value;
  }

  get grade(): string {
    return this._grade;
  }

  set grade(value: string) {
    this._grade = value;
  }
  private _etablissement: string;
  private _grade: string;
  constructor() {
    super();
  }
}
