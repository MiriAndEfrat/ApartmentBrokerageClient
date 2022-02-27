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

  constructor(private http:HttpClient) { }

  // currentUser!:PersonDTO;
  currentUser:PersonDTO;
  

  
  getUsers():Observable<PersonDTO[]>
  {
    return this.http.get<PersonDTO[]>("api/User")
  }

  addNewUser(user:PersonDTO):Observable<number>
  {
     return this.http.post<number>("api/User",user)
  }
  edit(user:PersonDTO)
  {
    this.http.put("api/User",user)
      
  }

  getUserById(id:number):Observable<PersonDTO>
  {
    return this.http.get<PersonDTO>("api/User/"+id)
  }
  logIn(user:UserLogInDTO):Observable<PersonDTO>
  {
    return this.http.post<PersonDTO>("api/User/login",user);
  }


}
