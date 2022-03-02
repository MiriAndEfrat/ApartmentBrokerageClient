import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogInDTO } from 'src/app/models/user-logIn-dto.model';
import { Observable } from "rxjs";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm!: FormGroup;
  user!: UserLogInDTO;
  userType: number=0;
  hide = true;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      identityNumber: new FormControl(),
      password: new FormControl(),
    });
  }

  login() {
    // let identityNumber = this.logInForm.controls["identityNumber"].value
    // let password = this.logInForm.controls["password"].value
    // debugger
    // this.user = new UserLogInDTO(identityNumber, password);
    this.user = this.logInForm.value;
    console.log(this.user, "this.user");
    debugger

    this._userService.logIn(this.user).subscribe(data => {
      this._userService.currentUser = data;
      this.userType = this._userService.currentUser.userType.length;
      if (this.userType < 2) {
        if (this._userService.currentUser.userType[0] == 1)
          this._router.navigate(['/advertiser']);
        if (this._userService.currentUser.userType[0] == 2)
          this._router.navigate(['/subscriber'])
      }
      alert(this._userService.currentUser.id);
    })




  }


  navigateToAdvertiser(){
    this._router.navigate(['/advertiser']);
  }

  navigateToSubscriber(){
    this._router.navigate(['/subscriber']);
  }

  Register(){
    this._router.navigate(['/user/userDetails']);
  }

}
