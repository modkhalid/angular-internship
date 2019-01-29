import { AllService } from './all-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhpService extends AllService {

  constructor(http: HttpClient) {
    super('http://localhost:1337/khalid/help/', http);
  }
}
