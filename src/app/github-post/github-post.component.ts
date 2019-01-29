import { Component, OnInit } from '@angular/core';
import { PhpService } from '../services/php.service';

@Component({
  selector: 'app-github-post',
  templateUrl: './github-post.component.html',
  styleUrls: ['./github-post.component.css']
})
export class GithubPostComponent implements OnInit {

  constructor(private service:PhpService) { }

  create(el){
    // console.log(el.value);
    let post={'email':el.value};
    this.service.create(JSON.stringify(post))
      .subscribe(
        response=>{
          console.log(response);
        }
      )



    el.value="";
  }
  ngOnInit() {
  }

}
