import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from './email.service';

@Component({
    selector: 'courses',
    template: `
               <input #email type="text" (keyup.enter)="onKeyup(email.value)">
           
               
                
    `
})

export class CoursesComponent{
    // red='red'
    // isActive=false
    onKeyup=(val)=>{
        console.log(val)
    }
}