import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  OnSubmit(){
    // console.log(this.router.createUrlTree(['/team', 33, 'user', 11]));
    // this.router.navigateByUrl("/github/follower");
    this.router.navigate(['/github/1'])
    console.log(this.router.url)
  }
  ngOnInit() {
    this.route.paramMap
      .subscribe(param=>{
        console.log(param)
        // console.log(param.get('id'))
        // this.service.get().subscribe(r=>{console.log(r)})


      })
  }

}
