import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from './email.service';

@Component({
    selector: 'courses',
    template: `
                <h1>{{ title }}</h1>
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>
                <img src={{src}}/>
                <img [src]='src'/>
                <p [attr.id]='clas'>hi</p>
                <button class ="btn btn-success btn-lg">hi click me</button>
             `
})

export class CoursesComponent{
    title="list of courses"
    // courses=['angular','ionic','react native','javascript']
    courses;
    clas
    src='http://lorempixel.com/400/200';
    constructor(service:CourseService,l:EmailService){
        this.courses=service.getCourses()
    }
}