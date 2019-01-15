import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from './email.service';

@Component({
    selector: 'courses',
    template: `
                
                <button class ="btn btn-success btn-lg" [class.active]="isActive" [class.add]="isActive">hi click me</button>
             `
})

export class CoursesComponent{
    isActive=true
}