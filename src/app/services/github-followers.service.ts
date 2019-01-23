import { AllService } from './all-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService extends AllService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/modkhalid/followers', http);
  }
}
