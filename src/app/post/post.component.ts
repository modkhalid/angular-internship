import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  http:any;
  constructor(http:HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
      // console.log(response);
      this.http=response;
    })
   }

   addPost(input:HTMLInputElement){
     
   }

  ngOnInit() {
  }

}
