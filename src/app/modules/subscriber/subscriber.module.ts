import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FilterSettingComponent } from './filter-setting/filter-setting.component';
import { AssetsPerSubscriptionComponent } from './assets-per-subscription/assets-per-subscription.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionDialogComponent } from './subscription-dialog/subscription-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

const ROUTES:Routes=[
  {path:"subscriptionList",component:SubscriptionListComponent},
  {path:"subscription",component:SubscriptionComponent},
  ]

@NgModule({
  declarations: [
    SubscriptionListComponent,
    SubscriptionComponent,
    FilterSettingComponent,
    AssetsPerSubscriptionComponent,
    SubscriptionDialogComponent,
  ],
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule, MatRippleModule
  ]
})
export class SubscriberModule { }
