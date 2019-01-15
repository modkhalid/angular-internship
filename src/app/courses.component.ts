import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from './email.service';

@Component({
    selector: 'courses',
    template: `
               <input type="text" (keyup.enter)="onKeyup()">
               <input type="text" (keyup)="onKeyup($event)">
               
                
    `
})

export class CoursesComponent{
    // red='red'
    // isActive=false
    onKeyup=($event?:any)=>{
        if($event == undefined){
            console.log("hi eneter")
        }else{
            console.log("jkdsfhjksdg"+$event.keyCode)
        }
    }
}