import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyDetail } from '../models/property-details.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor(private _http: HttpClient) { }

  public getByAreaId(id:number):Observable<PropertyDetail[]>{
    return this._http.get<PropertyDetail[]>("api/PropertyDetailController/areaId/"+id);
  }

  public getByUserId(id:number):Observable<PropertyDetail[]>{
    return this._http.get<PropertyDetail[]>("api/PropertyDetailController/advertiserId/"+id);
  }

  public postPropertyDetail(propertyDetail:PropertyDetail){
    this._http.post("api/PropertyDetailController/",propertyDetail);
  }

  public putPropertyDetail(propertyDetail:PropertyDetail,id:number){
    this._http.put("api/PropertyDetailController/"+id,propertyDetail);
  }

  public deletePropertyDetail(id:number){
    this._http.delete("api/PropertyDetailController/"+id);
  }
        

}
