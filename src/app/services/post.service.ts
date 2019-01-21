import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:any;
  private url='https://jsonplaceholder.typicode.com/posts'

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
    return this.http.delete("jhdsfjkdhfjkdshjkf"+"/"+4800)
      .pipe(
        catchError( err => {
          if (err.status == 404) {
              alert("something went wrong");
              // return throwError(err); or below one 
              return Observable.throw(err)
          } 
     })
      )
    
  }
}
