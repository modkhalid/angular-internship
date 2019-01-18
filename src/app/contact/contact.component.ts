import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts=[
    {name:"mod khalid",id:1},
    {name:"anas",id:2},
    {name:"zain",id:3}
    // 1,2,3,4,5,6
  ]
  constructor() { }

  ngOnInit() {
  }
  onChange(val){ console.log(val)}
  onSubmit(form:any){
    console.log(form)
  }

}
