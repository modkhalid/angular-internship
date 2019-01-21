import { BadError } from './../common/bad-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
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
    .pipe(catchError(this.ErrorHandlerMethod))
  }

  updatePost(post){
    return this.http.patch(this.url,{isread:true})
  }

  deletePost(post){
    return this.http.delete("jhdsfjkdhfjkdshjkf"+"/"+4800)
      .pipe(catchError(this.ErrorHandlerMethod))
    
  }
  private ErrorHandlerMethod(error:Response){
    if (error.status == 404) {
      return throwError(new NotFoundError(error))   
    }
    if (error.status==400){
      return throwError(new BadError(error))
    } 
    return throwError(new AppError(error))
  }
}
