import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url1:string = "/assets/user-list.json";
  private url2:string = "/assets/user-avatar.json";
  constructor(private http:HttpClient) { }

  public getUserList(){
    return this.http.get(this.url1);
  }
  public getUserAv(){
    return this.http.get(this.url2);
  }
}
