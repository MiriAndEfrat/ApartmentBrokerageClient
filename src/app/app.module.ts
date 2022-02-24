import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './modules/user/log-in/log-in.component';

import {HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { UserModule } from './modules/user/user.module';
import { AdvertiserModule } from './modules/advertiser/advertiser.module';
import { SubscriberModule } from './modules/subscriber/subscriber.module';
import { ManagementModule } from './modules/management/management.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    UserModule,
    AdvertiserModule,
    SubscriberModule,
    ManagementModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
