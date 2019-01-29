import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  // followers: any[];
  followers;

  constructor(private route:ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe();
    // console.log(this.route.snapshot.queryParamMap.get('name'))
    this.service.get()
      .subscribe(followers => this.followers =followers);
  }
}
