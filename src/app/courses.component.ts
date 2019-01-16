import { Component,Input } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from './email.service';

@Component({
    selector: 'courses',
    template: `<h1>{{text| summary:'50'}}</h1>
      {{pd}}
              
                
    `
})

export class CoursesComponent{
   @Input('parentData') pd:string;
   text=`
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quisquam eligendi dignissimos dolore inventore saepe ratione cumque harum quae libero itaque fugiat voluptatem molestias doloribus incidunt, porro facere nam nobis.
    
   `
}