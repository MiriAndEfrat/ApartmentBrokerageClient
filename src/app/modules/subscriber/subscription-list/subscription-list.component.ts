import { Component, OnInit } from '@angular/core';
import { SubscriptionPerUser } from 'src/app/models/subscription-per-user.model';
import { SubscriptionPerUserService } from 'src/app/services/subscription-per-user.service';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {

  subscriptions!:SubscriptionPerUser[];
  
  clickedRows = new Set<SubscriptionPerUser>();////////////
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];////////////


  constructor(private _userService:UserService,private _subscriptionPerUserService:SubscriptionPerUserService) { }



  ngOnInit(): void {
    this._subscriptionPerUserService.getSubscriptionsById(this._userService.currentUser.id).subscribe(data=>{this.subscriptions=data});

  }


}
