import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableCode } from '../models/table-code.model';

@Injectable({
  providedIn: 'root'
})
export class CodeTablesService {

  /*subscriptionType=[
  {id:1,name:חודשי,daysNumber:30,price:30;},
  {id:2,name:שבועי,daysNumber:7,price:7;},
  {id:1,name:year,daysNumber:365,price:365;},]*/
  allCodes: TableCode[] = [];
  constructor(private _http: HttpClient) { }
  
  getAllCodesFromServer(){
    this._http.get<TableCode[]>("api/CodeTable").subscribe(data => {
      this.allCodes = data;      
    })
  }

  // getAll(): TableCode[] {
  //   if (this.allCodes.length == 0) {
  //     this._http.get<TableCode[]>("api/City").subscribe(data => {
  //       this.allCodes = data;
  //       return this.allCodes;
  //     }
  //     );
  //   } else {
  //     return this.allCodes;
  //   }
  // }

  getTableByType(type: number): TableCode[] {
    return this.allCodes.filter(c => c.tableId == type);
    // this.getAll(function (res: TableCode[]) {
    //   return res.filter(c => c.tableId == type);
    // })

  }

}
