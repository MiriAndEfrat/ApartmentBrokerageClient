import { Component, OnInit } from '@angular/core';
import { SubscriptionType } from 'src/app/models/subscription-type.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CodeTablesService } from 'src/app/services/code-tables.service';
import { UserService } from 'src/app/services/user.service';
import { SubscriptionPerUser } from 'src/app/models/subscription-per-user.model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscriptionForm!:FormGroup

subscriptionType:SubscriptionType[]=[
  {id:1,name:'j',daysNumber:30,price:30},
  
];
 
  currentSubscription!:SubscriptionPerUser
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  this.subscriptionForm=new FormGroup({
  //id:new FormControl(),
  subscriptionTypeId:new FormControl(),
  areaId:new FormControl(),
  //userId:new FormControl(this._userService.currentUser.id),
  startDate:new FormControl(),
  //endDate:new FormControl(),
  });
  }

}
