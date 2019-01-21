import { BadError } from './../common/bad-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/observable/throw'
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
    return this.http.post(this.url,post)
      .pipe(
        catchError((err:Response)=>{
          if (err.status==400){
            return throwError(new BadError(err))
          }
          return throwError(new AppError(err))
        })
      )
  }

  updatePost(post){
    return this.http.patch("abcd"+this.url+"/"+post.id,{isread:true}).pipe(
      
    )
  }

  deletePost(post){
    return this.http.delete("jhdsfjkdhfjkdshjkf"+"/"+4800)
      .pipe(
        catchError( err => {
          if (err.status == 404) {
              // return Observable.throw(err)
              return throwError(new NotFoundError(err))

              
          } 
          return throwError(new AppError(err))
     })
      )
    
  }
}
