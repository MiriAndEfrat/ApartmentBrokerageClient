import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
     userDetail!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.userDetail=new FormGroup({
     email:new FormControl("",[Validators.required, Validators.email]),
     street:new FormControl(""),
     password:new FormControl(""),
     firstName:new FormControl(""),
     lastName:new FormControl(""),
     phone1:new FormControl(""),
     phone2:new FormControl(""),
     phone3:new FormControl(""),
     fax:new FormControl(""),
     buildingNumber:new FormControl(""),
     floor:new FormControl(""),
     mailBox:new FormControl(""),
     userType: new FormControl("")
    })
  }

  getErrorMessage() {
    let email=this.userDetail.controls["email"]
    if (email.hasError('required')) {
      return 'You must enter a value';
    }

    return email.hasError('email') ? 'Not a valid email' : '';
  }

}
