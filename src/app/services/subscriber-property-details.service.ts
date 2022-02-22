import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubscriberPropertyDetail } from '../models/subscriber-property-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriberPropertyDetailsService {

  constructor(private _http: HttpClient) { }

  public getPropertyDetailsBySubscriberId(id:number){
    return this._http.get("api/SubscriberPropertyDetailsController/"+id);
  }

  public PutPropertyDetails(property:SubscriberPropertyDetail){
    return this._http.put("api/SubscriberPropertyDetailsController/",property);
  }
}
