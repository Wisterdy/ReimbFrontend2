import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   url: string="http://localhost:8082/User"
  constructor(private httpclient: HttpClient) { }


  createUser(userdto: object): Observable<object>{
     return this.httpclient.post(this.url,  userdto);
  }

}
