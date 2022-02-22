import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { SubscriptionAndPropertyDetailsDTO } from '../models/SubscriptionAndPropertyDetailsDTO.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPerUserService {

  constructor(private _http: HttpClient) { }

  public getSubscriptionsById(id:number){
    return this._http.get("api/SubscriptionPerUserController/"+id);
  }

  public postSubscription(subscriptionAndPropertyDetailsDTO:SubscriptionAndPropertyDetailsDTO){
    return this._http.post("api/SubscriptionPerUserController/",subscriptionAndPropertyDetailsDTO);
  }



  
}
