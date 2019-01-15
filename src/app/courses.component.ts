import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from './email.service';

@Component({
    selector: 'courses',
    template: `
               <div (click)="onClick()">
                    <button (click)="onAnotherClick($event)">
                        "hi click me
                    </button>
                </div>
                
    `
})

export class CoursesComponent{
    // red='red'
    // isActive=false
    counter=0;
    onClick=()=>{
        console.log("div was clicked"+this.counter)
        this.counter++;
    }
    onAnotherClick=($event)=>{
        $event.stopPropagation()
        console.log("button was clicked")
    }
}