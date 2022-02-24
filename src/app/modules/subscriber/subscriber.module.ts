import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FilterSettingComponent } from './filter-setting/filter-setting.component';
import { AssetsPerSubscriptionComponent } from './assets-per-subscription/assets-per-subscription.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';


const ROUTES:Routes=[
  {path:"subscriptionList",component:SubscriptionListComponent},

  ]

@NgModule({
  declarations: [
    SubscriptionListComponent,
    SubscriptionComponent,
    FilterSettingComponent,
    AssetsPerSubscriptionComponent,
  ],
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    
  ]
})
export class SubscriberModule { }
