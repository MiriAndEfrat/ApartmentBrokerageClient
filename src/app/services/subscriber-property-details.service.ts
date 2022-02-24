import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriberPropertyDetail } from '../models/subscriber-property-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriberPropertyDetailsService {

  constructor(private _http: HttpClient) { }

  public getPropertyDetailsBySubscriberId(id:number):Observable<SubscriberPropertyDetail>{
    return this._http.get<SubscriberPropertyDetail>("api/SubscriberPropertyDetailsController/"+id);
  }

  public PutPropertyDetails(property:SubscriberPropertyDetail){
    return this._http.put("api/SubscriberPropertyDetailsController/",property);
  }
}
