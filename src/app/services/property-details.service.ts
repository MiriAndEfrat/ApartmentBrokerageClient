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
    return this._http.get<PropertyDetail[]>("api/PropertyDetail/areaId/"+id);
  }

  public getByUserId(id:number):Observable<PropertyDetail[]>{
    return this._http.get<PropertyDetail[]>("api/PropertyDetail/advertiserId/"+id);
  }

  public postPropertyDetail(propertyDetail:PropertyDetail){
    this._http.post("api/PropertyDetail/",propertyDetail);
  }

  public putPropertyDetail(propertyDetail:PropertyDetail,id:number){
    this._http.put("api/PropertyDetail/"+id,propertyDetail);
  }

  public deletePropertyDetail(id:number){
    this._http.delete("api/PropertyDetail/"+id);
  }
        

}
