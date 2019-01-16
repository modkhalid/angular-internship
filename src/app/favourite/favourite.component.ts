import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // inputs:['isFavorite']
})
export class FavouriteComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
