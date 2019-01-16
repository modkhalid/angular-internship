import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // inputs:['isFavorite']
})
export class FavouriteComponent implements OnInit {
  @Input() name:string;
  @Output() change=new EventEmitter()
  @Output() x:string="khalid";
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.name+="0";
    this.change.emit("hi khalid");
  }

}
