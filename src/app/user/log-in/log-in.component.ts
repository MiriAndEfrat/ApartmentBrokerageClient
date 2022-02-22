import { Component, Input, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { UserLogInDTO } from 'src/app/models/userLogInDTO.model';
import {Observable} from "rxjs";
import { LogInService } from 'src/app/services/log-in.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm!:FormGroup;
  user!:UserLogInDTO;  
  constructor(private loginservice:LogInService  ) { }

  ngOnInit(): void {
    this.logInForm=new FormGroup({
      email:new FormControl(""),
      password:new FormControl(""),
    });
  }

login()
{
  let email=this.logInForm.controls["email"].value
  let password=this.logInForm.controls["password"].value
   this.user=new UserLogInDTO(email,password);
   
  this.loginservice.logIn(this.user).subscribe(data=>{alert(data.id)})
}

}
