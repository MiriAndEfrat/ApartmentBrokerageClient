import { Component, Inject, Input, OnInit } from '@angular/core';
import { SubscriptionType } from 'src/app/models/subscription-type.model';
import { SubscriptionAndPropertyDetailsDTO } from 'src/app/models/subscription-and-property-details-dto.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CodeTablesService } from 'src/app/services/code-tables.service';
import { UserService } from 'src/app/services/user.service';
import { SubscriptionPerUser } from 'src/app/models/subscription-per-user.model';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { SubscriptionPerUserService } from 'src/app/services/subscription-per-user.service';
import { SubscriberPropertyDetailsService } from 'src/app/services/subscriber-property-details.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriberPropertyDetail } from 'src/app/models/subscriber-property-detail.model';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscriptionForm!:FormGroup
  showFilterSetting:boolean=false;
  row!:SubscriptionPerUser;

subscriptionType:SubscriptionType[]=[
  {id:1,name:'j',daysNumber:30,price:30},
  
];


 
  constructor(private _userService:UserService,private _subscriptionPerUserService:SubscriptionPerUserService,
    private _router:Router,private _subscriberPropertyDetailsService:SubscriberPropertyDetailsService,
    @Inject(MAT_DIALOG_DATA) public data: {row:SubscriptionPerUser} ) { }

  ngOnInit(): void {
  this.row=this.data.row;
  this.subscriptionForm=new FormGroup({
  id:new FormControl(this.row?.id),
  subscriptionTypeId:new FormControl(),
  // userId:new FormControl(this._userService.currentUser.id),
  userId:new FormControl(1013),

  areaId:new FormControl(),
  startDate:new FormControl(),
  endDate:new FormControl(new Date()),  
  });
  
  console.log(this.row);
  // this.subscriptionForm.patchValue(this.row);
  }

  

  filterSettings(){
    // this._router.navigate(['/filterSetting']); 
    this.showFilterSetting=true;   
  }

  saveSubscription(){
    
    console.log("saveSubscription");
    console.log(this._userService.currentUser)
    console.log(this.subscriptionForm.controls['userId'].value);

debugger;
    if(this.row==null){
    //new subscription
    // this._subscriberPropertyDetailsService.subscriptionAndPropertyDetailsDTO.subscriptionTypeId=this.subscriptionForm.controls['subscriptionTypeId'].value;
    // this._subscriberPropertyDetailsService.subscriptionAndPropertyDetailsDTO.areaId=this.subscriptionForm.controls['areaId'].value;
    // this._subscriberPropertyDetailsService.subscriptionAndPropertyDetailsDTO.startDate=this.subscriptionForm.controls['startDate'].value;
    console.log(this.row);

    this.row=this.subscriptionForm.value;
    console.log(this.row);
  }
  else{
    debugger;

    //edit subscription
    console.log(this.row);

    this.row=this.subscriptionForm.value;
    console.log(this.row);
    debugger;

    this._subscriptionPerUserService.putSubscription(this.row).subscribe();
    console.log(this.row);
  }
  }

}
