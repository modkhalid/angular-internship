import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { UsernameValidator } from './custom.validator';
@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // let myGroup:any;
  myGroup;
  constructor() { 
    this.myGroup = new FormGroup({
      username: new FormControl("",
                    [
                      Validators.required,
                      Validators.minLength(5),
                      UsernameValidator.whiteSpace
                    ],
                    UsernameValidator.ShouldBeUnique
                      ),
      password:new FormControl('',Validators.required)
   });
  }

  get username(){return this.myGroup.get('username');}
  get password(){return this.myGroup.get('password');


}
 
  onSubmit(val){console.log(val)}

  ngOnInit() {
  }

  login=()=>{
    this.myGroup.setErrors({
      InvalidLogin:true
    })
  }
}
