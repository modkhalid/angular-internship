import { Component } from '@angular/core';
import { testInterface } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular app';
  // name="mod khalid"
  // isFavorite=true
  // onChange=(obj:testInterface)=>{
  //   // console.log("change occur"+this.name);
  //   console.log(obj)
  // }
  // // message="";
  // courses=[];
  // viewList=""
  // courses:number[]=[];em
  // courses.
  courses=[
    {name:"khalid",id:45},
    {name:"annas",id:6},
    {name:"zain",id:68}
  ]
}
