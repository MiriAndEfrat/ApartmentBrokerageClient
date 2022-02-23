import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonDTO } from '../models/personDTO.model';
import { UserLogInDTO } from '../models/userLogInDTO.model';
import {Observable} from "rxjs";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  currentUser!:PersonDTO;

  logIn(user:UserLogInDTO):Observable<PersonDTO>
  {
    return this.http.post<PersonDTO>("api/User/login",user);
  }


}
