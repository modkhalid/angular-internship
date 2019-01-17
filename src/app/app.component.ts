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
  counter=3;
  courses;
  onClick=()=>{
    // this.courses.push({name:"name",id:++this.counter})
    this.courses=[
      {name:"khalid",id:45},
      {name:"annas",id:6},
      {name:"zain",id:68}
    ]
  }
  trackCourse=(index,course)=>{
    return course?course.id:undefined;
  }
  // onRemove=(course)=>{
  //   let index=this.courses.indexOf(course)
  //   this.courses.splice(index,1);
  // }
  // onUpdate=(course)=>{
  //   course.name="Update name"
  // }
}
