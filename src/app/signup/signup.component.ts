import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
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
      username: new FormControl(),
      password:new FormControl()
   });
  }
  // form=new FormGroup({
  //   username:new FormControl(),
  //   password:new FormControl()
  // });
 
 

  ngOnInit() {
  }

}
