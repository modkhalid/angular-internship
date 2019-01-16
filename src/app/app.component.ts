import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  name="mod khalid"
  isFavorite=true
  // onChange=()=>{
  //   console.log("change occur"+this.name);
  // }
  message="";
}
