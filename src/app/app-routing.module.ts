import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './modules/user/log-in/log-in.component';

const routes: Routes = [
  {path:"login",component:LogInComponent},
  // {path:"",pathMatch:"full" ,redirectTo:"login"},
  {path:"user",loadChildren:()=>import("./modules/user/user.module").then(m=>m.UserModule)},
  {path:"subscriber",loadChildren:()=>import("./modules/subscriber/subscriber.module").then(m=>m.SubscriberModule)},
  {path:"management",loadChildren:()=>import("./modules/management/management.module").then(m=>m.ManagementModule)},
  {path:"advertiser",loadChildren:()=>import("./modules/advertiser/advertiser.module").then(m=>m.AdvertiserModule)},
  // {path:"**",pathMatch:"full" ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
