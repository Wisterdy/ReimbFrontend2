import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRoles } from './models/UserRole';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
//testing simple update
  url: string = " http://localhost:8082/UserRole";
  constructor(private httpclient: HttpClient) { }


  getallroles(): Observable<UserRoles[]> {
    return this.httpclient.get<UserRoles[]>(this.url);
  }
}
