import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionPerUser } from '../models/subscription-per-user.model';
// import { Observable } from 'rxjs';
import { SubscriptionAndPropertyDetailsDTO } from '../models/subscription-and-property-details-dto.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionPerUserService {

  constructor(private _http: HttpClient) { }

  public getSubscriptionsById(id:number):Observable<SubscriptionPerUser[]>{
    return this._http.get<SubscriptionPerUser[]>("api/SubscriptionPerUserController/"+id);
  }

  public postSubscription(subscriptionAndPropertyDetailsDTO:SubscriptionAndPropertyDetailsDTO):Observable<number>{
    return this._http.post<number>("api/SubscriptionPerUserController/",subscriptionAndPropertyDetailsDTO);
  }



  
}
