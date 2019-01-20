import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:any;
  private url='https://jsonplaceholder.typicode.com/comments'

  constructor(private http:HttpClient) {

   }
  
  getPost(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url,post);
  }

  updatePost(post){
    return this.http.patch(this.url+"/"+post.id,{isread:true})
  }

  deletePost(post){
    return this.http.delete(this.url+"/"+post.id)
  }
}
