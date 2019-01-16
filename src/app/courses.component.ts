import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from './email.service';

@Component({
    selector: 'courses',
    template: `
               <input [value]="val" type="text" (keyup.enter)="val=$event.target.value;onKeyup()">
           
               <input [(ngModel)]="val" type="text" (keyup)="onKeyup()"/>
                
    `
})

export class CoursesComponent{
   val=""
    onKeyup=()=>{
        // this.val=val+"  $";
        console.log(this.val)
    }
}