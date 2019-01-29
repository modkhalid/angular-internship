import { BadError } from './../common/bad-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
// corsproxy
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
    // console.log(post);
    return this.http.post(this.url,post)
    .pipe(
        //********dont use map for json  */
        // map(response=>{response.json()}),
        //after angular two
        // response object is Alway in json array
        catchError(this.ErrorHandlerMethod))
  }

  update(post){
    return this.http.patch(this.url+"/"+post.id,{isread:true})
  }

  delete(post){
    return this.http.delete(this.url+"/"+post.id)
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
