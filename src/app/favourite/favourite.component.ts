import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  styles:[
    `
      .btn-mod{
        color:white;
        background-color: black;
      }
    `
  ],
  
  // inputs:['isFavorite']
})
export class FavouriteComponent implements OnInit {
  @Input() name:string;
  @Output() change=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.name+="0";
    let obj:testInterface={
      data:45,
      name:'modkhalid'
    }
    this.change.emit(obj);
  }

}
export interface testInterface{
  data:number,
  name:string
}
