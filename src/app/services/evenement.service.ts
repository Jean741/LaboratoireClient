import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {API_URL} from '../config/api.url.config';
import {Publication} from '../models/publication.model';
import {Evenement} from '../models/evenement.model';

@Injectable()
export class EvenementService {


  constructor(private httpClient: HttpClient) {

  }

  getEvenement(): Observable<Evenement[]> {
    return this.httpClient.get<any[]>(API_URL.EVENEMENT_URL);
  }

  getMemberEvenement(id:number): Observable<Evenement[]> {
    return this.httpClient.get<any[]>(API_URL.EVENEMENT_URL+"/membre/"+id);
  }



  ajouterEvenement(evenement:Evenement) : Observable<Evenement> {
    return this.httpClient.post<Evenement>(API_URL.EVENEMENT_URL,evenement)
  }

  ajouterMembreEvenement(publication:Evenement) : Observable<Evenement> {
    return this.httpClient.post<Evenement>(API_URL.EVENEMENT_URL,publication)
  }


  updateEvenement(publication:Publication): Observable<any>{
    return this.httpClient.post<Publication>(API_URL.EVENEMENT_URL,publication)
  }

  deleteEvenement(id:number): Observable<any>{
    return this.httpClient.delete(API_URL.EVENEMENT_URL+'/'+id)
  }
}
