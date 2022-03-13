import { Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { PropertyDetail } from 'src/app/models/property-details.model';
import { PropertyDetailsService } from 'src/app/services/property-details.service';

@Component({
  selector: 'app-assets-per-subscription',
  templateUrl: './assets-per-subscription.component.html',
  styleUrls: ['./assets-per-subscription.component.css']
})
export class AssetsPerSubscriptionComponent implements OnInit {
  assetsList!:PropertyDetail[];
  displayedColumns: string[] = ['sku', 'streetId', 'propertyTypeId'];
  // @Input()
  areaId:number=1;

  constructor(private _propertyDetailsService:PropertyDetailsService) { }

  ngOnInit(): void {
    this._propertyDetailsService.getByAreaId(this.areaId).subscribe((data)=>{this.assetsList=data});    
  }



}
