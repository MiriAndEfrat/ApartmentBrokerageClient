import { Component, OnInit } from '@angular/core';
import { SubscriptionPerUser } from 'src/app/models/subscription-per-user.model';
import { SubscriptionPerUserService } from 'src/app/services/subscription-per-user.service';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SubscriptionDialogComponent } from '../subscription-dialog/subscription-dialog.component';
import { SubscriptionComponent } from '../subscription/subscription.component';

/*const ELEMENT_DATA1: SubscriptionPerUser[] = [
  {id:1,subscriptionType:1,areaId:1,userId:1013,startDate:new Date,endDate:new Date},
  
];*/

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {

 
  subscriptionList!:SubscriptionPerUser[];
  
  displayedColumns: string[] = ['subscriptionTypeId', 'areaId',  'startDate', 'endDate'];
  clickedRow! :SubscriptionPerUser;


  constructor(private _userService:UserService,private _subscriptionPerUserService:SubscriptionPerUserService,public _dialog: MatDialog) { }



  ngOnInit(): void {
    //this._subscriptionPerUserService.getSubscriptionsById(this._userService.currentUser.id).subscribe(data=>{this.subscriptionList=data;this.dataSource=this.subscriptionList});
    this._subscriptionPerUserService.getSubscriptionsById(1013).subscribe(data=>{this.subscriptionList=data;console.log(this.subscriptionList)});

  }


  openSubscriptionDialog(row:any) {
    const dialogRef = this._dialog.open(SubscriptionComponent,{
      // width:'700px',
      // height:'800px',
      data:{row},
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
