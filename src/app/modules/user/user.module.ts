import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



const ROUTES:Routes=[
  {path:"userDetails",component:UserDetailsComponent}

  ]

@NgModule({
  declarations: [
    LogInComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule.forChild(ROUTES),
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule
    
    ],
  
})
export class UserModule { }
