import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {API_URL} from '../config/api.url.config';
import {Publication} from '../models/publication.model';

@Injectable()
export class PublicationService {


  constructor(private httpClient: HttpClient) {

  }

  getPublication(): Observable<Publication[]> {
    return this.httpClient.get<any[]>(API_URL.PUBLICATION_URL);
  }

  getMemberPublication(id:number): Observable<Publication[]> {
    return this.httpClient.get<any[]>(API_URL.PUBLICATION_URL+"/membre/"+id);
  }



  ajouterPublication(publication:Publication) : Observable<Publication> {
    return this.httpClient.post<Publication>(API_URL.PUBLICATION_URL,publication)
  }

  ajouterMembrePublication(publication:Publication) : Observable<Publication> {
    return this.httpClient.post<Publication>(API_URL.PUBLICATION_URL,publication)
  }


  updatePublication(publication:Publication): Observable<any>{
    return this.httpClient.post<Publication>(API_URL.PUBLICATION_URL,publication)
  }

  deletePublication(id:number): Observable<any>{
    return this.httpClient.delete(API_URL.PUBLICATION_URL+'/'+id)
  }
}
