// import { BadError } from './../common/bad-error';
// import { AppError } from './../common/app-error';
// import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllService } from './all-service';

// import 'rxjs/add/observable/throw'
@Injectable({
  providedIn: 'root'
})
export class PostService extends AllService{
  constructor(http:HttpClient) {
    super('https://api.github.com/users/modkhalid/followers',http)
   }

}
