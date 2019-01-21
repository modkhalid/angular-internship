import { BadError } from './../common/bad-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private url,private http:HttpClient) {

   }
  
  get(){
    return this.http.get(this.url);
  }

  create(post){
    return this.http.post(this.url,post)
    .pipe(catchError(this.ErrorHandlerMethod))
  }

  update(post){
    return this.http.patch(this.url+"/"+post.id,{isread:true})
  }

  delete(post){
    return this.http.delete("jhdsfjkdhfjkdshjkf"+"/"+post.id)
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
