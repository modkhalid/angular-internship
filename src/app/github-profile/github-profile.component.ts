import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:GithubFollowersService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(param=>{
        console.log(param)
        // console.log(param.get('id'))
        // this.service.get().subscribe(r=>{console.log(r)})


      })
  }

}
