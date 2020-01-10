import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {API_URL} from '../config/api.url.config';
import {Membre} from '../models/membre.model';

@Injectable()
export class MembreService {


  constructor(private httpClient: HttpClient) {

  }

  getMembres(): Observable<Membre[]> {
    return this.httpClient.get<Membre[]>(API_URL.MEMBRES_URL);
  }


  getMembre(id:number): Observable<Membre> {
    return this.httpClient.get<Membre>(API_URL.MEMBRE_URL+'/'+id);
  }


  chargerEnseignant(): Observable<Membre[]>{
    return this.httpClient.get<Membre[]>(API_URL.ENSEIGNANT_URL)
  }
  chargerEtudiant(): Observable<Membre[]>{
    return this.httpClient.get<Membre[]>(API_URL.ETUDIANT_URL)
  }
  ajouterEnseignan(membre:Membre) : Observable<any> {
    return this.httpClient.post(API_URL.ENSEIGNANT_URL,membre)
  }
  updateEnseignan(membre:Membre): Observable<any>{
    return this.httpClient.post(API_URL.ENSEIGNANT_URL,membre)
  }

  ajouterEtudiant(membre:Membre): Observable<any>{
    return this.httpClient.post(API_URL.ETUDIANT_URL,membre)
  }
  updateEtudiant(membre:Membre): Observable<any>{
    return this.httpClient.post(API_URL.ETUDIANT_URL,membre)
  }

  deleteMembre(id:number): Observable<any>{
    return this.httpClient.delete(API_URL.MEMBRES_URL+'/'+id)
  }
}
