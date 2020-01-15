import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {API_URL} from '../config/api.url.config';
import {Publication} from '../models/publication.model';
import {Role} from '../models/role.model';

@Injectable()
export class RoleService {


  constructor(private httpClient: HttpClient) {

  }

  getAllRoles(): Observable<any[]> {
    return this.httpClient.get<any[]>(API_URL.ROLE_URL);
  }

  getMemberRole(id:number): Observable<any[]> {
    return this.httpClient.get<any[]>(API_URL.ROLE_URL+"/membre/"+id);
  }



  ajouterRole(role:Role) : Observable<Publication> {
    return this.httpClient.post<Publication>(API_URL.ROLE_URL,role)
  }

  addMembreFromRole(idR:number,idM:number) : Observable<any> {
    return this.httpClient.post(API_URL.ROLE_URL+"/membre/"+idR+"/"+idM,[])
  }


  deleteMembreFromRole(idR:number,idM:number) : Observable<any> {
    return this.httpClient.delete<any>(API_URL.ROLE_URL+"/membre/"+idR+"/"+idM)
  }


  updatePublication(publication:Publication): Observable<any>{
    return this.httpClient.post<Publication>(API_URL.ROLE_URL,publication)
  }

  deletePublication(id:number): Observable<any>{
    return this.httpClient.delete(API_URL.ROLE_URL+'/'+id)
  }

  deleteRole(id: number) {
    return this.httpClient.delete(API_URL.ROLE_URL+'/'+id)
  }
}
