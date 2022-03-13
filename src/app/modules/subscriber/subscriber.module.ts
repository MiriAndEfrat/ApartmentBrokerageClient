import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FilterSettingComponent } from './filter-setting/filter-setting.component';
import { AssetsPerSubscriptionComponent } from './assets-per-subscription/assets-per-subscription.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionDialogComponent } from './subscription-dialog/subscription-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';



const ROUTES: Routes = [
  { path: "", pathMatch: "full", component: SubscriberComponent },
  { path: "subscriptionList", component: SubscriptionListComponent },
  { path: "subscription", component: SubscriptionComponent },
  { path: "filterSetting", component: FilterSettingComponent },
  { path: "assetsList", component: AssetsPerSubscriptionComponent },
]

@NgModule({
  declarations: [
    SubscriptionListComponent,
    SubscriptionComponent,
    FilterSettingComponent,
    AssetsPerSubscriptionComponent,
    SubscriptionDialogComponent,
    SubscriberComponent,
  ],
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule, MatRippleModule,
    ReactiveFormsModule, FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule
  ]

})
export class SubscriberModule { }
