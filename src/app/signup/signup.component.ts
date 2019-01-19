import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray} from '@angular/forms';
import { UsernameValidator } from './custom.validator';
import { ViewEncapsulation } from '@angular/compiler/src/core';
@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  
})
export class SignupComponent implements OnInit {
  myGroup;
  constructor() { 
    this.myGroup = new FormGroup({
      account:new FormGroup({
        username: new FormControl("",
                      [
                        Validators.required,
                        Validators.minLength(5),
                        UsernameValidator.whiteSpace
                      ],
                      UsernameValidator.ShouldBeUnique
                        ),
        password:new FormControl('',Validators.required)
      })
    });
  }

  get username(){return this.myGroup.get('account.username');}
  get password(){return this.myGroup.get('account.password');


}
 
  onSubmit(val){console.log(val)}

  ngOnInit() {
  }

  login=()=>{
    this.myGroup.setErrors({
      InvalidLogin:true
    })
  }
  f(){
    console.log(this.myGroup)
  }
  form=new FormGroup({
    topics:new FormArray([])
  })

  addTopics(topic:HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
    topic.value=""
  }
}
