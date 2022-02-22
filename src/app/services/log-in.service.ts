import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonDTO } from '../models/personDTO.model';
import { UserLogInDTO } from '../models/userLogInDTO.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http:HttpClient) { }

  logIn(user:UserLogInDTO):Observable<PersonDTO>
  {
    return this.http.post<PersonDTO>("api/User/login",user);
  }


}
