import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-dialog',
  templateUrl: './subscription-dialog.component.html',
  styleUrls: ['./subscription-dialog.component.css']
})
export class SubscriptionDialogComponent implements OnInit {

  showFilterSetting:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
