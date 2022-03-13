import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriberPropertyDetail } from '../models/subscriber-property-detail.model';
import { SubscriptionAndPropertyDetailsDTO } from '../models/subscription-and-property-details-dto.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriberPropertyDetailsService {

  subscriptionAndPropertyDetailsDTO!:SubscriptionAndPropertyDetailsDTO;
  
  constructor(private _http: HttpClient) { }

  public getPropertyDetailsBySubscriberId(id:number):Observable<SubscriberPropertyDetail>{
    return this._http.get<SubscriberPropertyDetail>("api/SubscriberPropertyDetailsController/"+id);
  }

  public PutPropertyDetails(property:SubscriberPropertyDetail){
    return this._http.put("api/SubscriberPropertyDetailsController/",property);
  }
}
