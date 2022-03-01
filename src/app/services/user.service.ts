import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonDTO } from '../models/person-dto.model';
import { UserLogInDTO } from '../models/user-logIn-dto.model';
import {Observable} from "rxjs";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {;
  }

  // currentUser!:PersonDTO;
  
  // currentUser?:PersonDTO;
  
  currentUser= new PersonDTO();

 
  getUsers():Observable<PersonDTO[]>
  {
    return this._http.get<PersonDTO[]>("api/User")
  }

  postUser(user:PersonDTO):Observable<number>
  {
     return this._http.post<number>("api/User/",user)
  }
  putUser(user:PersonDTO)
  {
    this._http.put("api/User",user)
      
  }

  getUserById(id:number):Observable<PersonDTO>
  {
    return this._http.get<PersonDTO>("api/User/"+id)
  }
  logIn(user:UserLogInDTO):Observable<PersonDTO>
  {
    return this._http.post<PersonDTO>("api/User/login",user);
  }


}
