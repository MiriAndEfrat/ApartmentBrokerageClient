import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { SubscriptionType } from 'src/app/models/subscription-type.model';
import { SubscriptionAndPropertyDetailsDTO } from 'src/app/models/subscription-and-property-details-dto.model';
import { FormControl, Validators } from '@angular/forms';
import { CodeTablesService } from 'src/app/services/code-tables.service';
import { UserService } from 'src/app/services/user.service';
import { SubscriptionPerUser } from 'src/app/models/subscription-per-user.model';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MatSelectModule} from '@angular/material/select';
import { SubscriptionPerUserService } from 'src/app/services/subscription-per-user.service';
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SubscriberPropertyDetailsService } from 'src/app/services/subscriber-property-details.service';


@Component({
  selector: 'app-filter-setting',
  templateUrl: './filter-setting.component.html',
  styleUrls: ['./filter-setting.component.css']
})
export class FilterSettingComponent implements OnInit {

  filterSettingForm!:FormGroup;

  subscriptionType:SubscriptionType[]=[
    {id:1,name:'j',daysNumber:30,price:30},
    
  ];
  constructor(private _router:Router,private _subscriberPropertyDetailsService:SubscriberPropertyDetailsService) { }

  ngOnInit(): void {
    this.filterSettingForm=new FormGroup({
      propertyTypeId:new FormControl(),
      cityId:new FormControl(),
      neighborhoodId:new FormControl(),
      statusId:new FormControl(),
      roomNumber:new FormControl(),
      floor:new FormControl(),
      maximumPrice:new FormControl(),
      entryDate:new FormControl(),
      squareMeter:new FormControl(),
      severalDirectionsOfAir:new FormControl(),
      elevators:new FormControl(),
      renovated:new FormControl(),
      accessForDisabled:new FormControl(false),
      furnished:new FormControl(false),
      parking:new FormControl(false),
      storage:new FormControl(false),
      airConditioning:new FormControl(false),
      yard:new FormControl(false),
      porch:new FormControl(false),
      distance:new FormControl(),
    })

    // this.filterSettingForm.controls['elevators'].setValue(false);
  }

  saveSubscriberPropertyDetails(){
    
  }
}
