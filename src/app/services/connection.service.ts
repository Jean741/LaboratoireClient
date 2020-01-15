import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {API_URL} from '../config/api.url.config';
import {Publication} from '../models/publication.model';
import {Role} from '../models/role.model';
import {User} from '../models/user.model';
import {Membre} from '../models/membre.model';

@Injectable()
export class ConnectionService {


  constructor(private http: HttpClient) {

  }

  public login(username:string,password:string){
    const headers = new HttpHeaders({Authorization:'Basic '+btoa(username+":"+password)})
    return this.http.get(API_URL.MEMBRES_URL,{headers})
  }

  public connect(user:User) : Observable<any>{
      return this.http.post(API_URL.BASE+"connect",user)
  }

}
