import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any;
  private url='https://jsonplaceholder.typicode.com/comments'
  constructor(private http:HttpClient) {
    http.get(this.url).subscribe(response=>{
      this.posts=response;
    })
   }

   addPost(input:HTMLInputElement){
     let post={
      name:input.value
     }
    //  let post=
     this.http.post(this.url,JSON.stringify(post)).subscribe(response=>{
      // post.id=response.id;
      post['id']=response['id']
      console.log(response);
      // console.log(post)
      // (this.posts as Array)
      this.posts.splice(0,0,post);
     })
     input.value=""
   }

  ngOnInit() {
  }

}
