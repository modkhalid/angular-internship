import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
                <h1>{{ title }}</h1>
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>
                
             `
})

export class CoursesComponent{
    title="list of courses"
    courses=['angular','ionic','react native','javascript']
}