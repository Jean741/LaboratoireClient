import {Membre} from './membre.model';

export class Publication {
  public id: number;
  public type: string;
  public lien: string;
  public dateApparition: Date;
  public sourcePdf: string;
  public auteurs:  any[];

  constructor() {
  }
}
