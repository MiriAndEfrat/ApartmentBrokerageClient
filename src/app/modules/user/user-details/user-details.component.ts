import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Street } from 'src/app/models/street.model';
import { UserType } from 'src/app/models/user-type.model';
import { UserLogInDTO } from 'src/app/models/user-logIn-dto.model';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { PersonDTO } from 'src/app/models/person-dto.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
     userDetail!:FormGroup
     hide=true
     options: Street[] = [
      {id:1,name: 'שאולזון',cityId:1},
      {id:2,name: 'אבן דנאן',cityId:1},
      {id:3,name: '2שאולזון',cityId:1},
      // {value: 'tacos-2', viewValue: 'Tacos'},
    ];
    type: UserType[] = [
      {id:1,name: 'מפרסם'},
      {id:2,name: 'מנוי'},
      {id:3,name: 'מנהל'},
    ];
    
    types=this.type.map(o=>o.name);
    // filteredOptions!: Observable<Street[]>;
  constructor(private _userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.userDetail=new FormGroup({
     
     email:new FormControl("",[Validators.required, Validators.email]),
     street:new FormControl("",[Validators.required]),
     city:new FormControl("",[Validators.required]),
     password:new FormControl("",[Validators.required]),
     firstName:new FormControl("",[Validators.required]),
     lastName:new FormControl("",[Validators.required]),
     phone1:new FormControl("",[Validators.required]),
     phone2:new FormControl("",[Validators.required]),
     phone3:new FormControl("",[Validators.required]),
     fax:new FormControl("",[Validators.required]),
     buildingNumber:new FormControl("",[Validators.required]),
     floor:new FormControl("",[Validators.required]),
     mailBox:new FormControl("",[Validators.required]),
     userType: new FormControl("",[Validators.required]),
     identityType:new FormControl("",[Validators.required])
    //  id: new FormControl("",[Validators.required])
    })
    
    if(this._userService.currentUser!=null)
    {
      this.userDetail.patchValue(this._userService.currentUser);
    }
    // this.filteredOptions = this.userDetail.controls['city'].valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value)),
    // );
  }

  // private _filter(value: Street): Street[] {
  //   const filterValue = value.name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  // }

  getErrorMessage() {
    let email=this.userDetail.controls["email"]
    if (email.hasError('required')) {
      return 'You must enter a value';
    }

    return email.hasError('email') ? 'Not a valid email' : '';
  }

  saveUserDetails()
{
  if(this._userService.currentUser==null)
  {
    let email=this.userDetail.controls['email'].value;
    let street=this.userDetail.controls['street'].value;
    let city=this.userDetail.controls['city'].value;
    let password=this.userDetail.controls['password'].value;
    let firstName=this.userDetail.controls['firstname'].value;
    let lastName=this.userDetail.controls['lastName'].value;
    let phone1=this.userDetail.controls['phone1'].value;
    let phone2=this.userDetail.controls['phone2'].value;
    let phone3=this.userDetail.controls['phone3'].value;
    let fax=this.userDetail.controls['fax'].value;
    let buildingNumber=this.userDetail.controls['buildingNumber'].value;
    let floor=this.userDetail.controls['floor'].value;
    let mailBox=this.userDetail.controls['mailBox'].value;
    let userType=this.userDetail.controls['userType'].value;


    this._userService.currentUser=this.userDetail.value;
    // this._userService.currentUser.name=this.userAdmin.name.replace(/\s/g, '');
    // this.userAdmin.password=this.userAdmin.password.replace(/\s/g, '');
    this._userService.postUser(this._userService.currentUser).subscribe(data=>{alert(data)});
  }
  else{
    this._userService.currentUser=this.userDetail.value;
    
    this._userService.postUser(this._userService.currentUser).subscribe(data=>{alert(data)});
  }

}
}


