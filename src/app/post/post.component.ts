import { NotFoundError } from './../common/not-found-error';

import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any;
  // private url='https://jsonplaceholder.typicode.com/comments'

  
  // constructor(private http:HttpClient) {
  //   http.get(this.url).subscribe(response=>{
  //     this.posts=response;
  //   })
  //  }

  // addPost(input:HTMLInputElement){
  //    let post={
  //     name:input.value
  //    }
  //   //  let post=
  //    this.http.post(this.url,JSON.stringify(post)).subscribe(response=>{
  //     // post.id=response.id;
  //     post['id']=response['id']
  //     console.log(response);
  //     // console.log(post)
  //     // (this.posts as Array)
  //     this.posts.splice(0,0,post);
  //    })
  //    input.value=""
  //   }
  

  //   updatePost(post){
  //     this.http.patch(this.url+"/"+post.id,JSON.stringify({isRead:true}))
  //       .subscribe(response=>{
  //         console.log(response)
  //       })
  //   }

  //   deletePost(post){
  //     this.http.delete(this.url+"/"+post.id)
  //       .subscribe(response=>{
  //         let index=this.posts.indexOf(post)
  //         this.posts.splice(index,1)
  //       })
  //   }

  constructor(private service:PostService){

  }

  addPost(element:HTMLInputElement){
    let post={title:element.value}
    this.service.createPost(JSON.stringify(post))
      .subscribe(response=>{
        post['id']=response['id']
        this.posts.splice(0,0,post);
      })
    element.value=""
  }
  updatePost(post){
    this.service.updatePost(post)
      .subscribe(response=>{
          console.log(response)
        })
  }


  deletePost(post){
    this.service.deletePost(post)
      .subscribe(
        response=>{
          let index=this.posts.indexOf(post)
          this.posts.splice(index,1)
          console.log(response)
        },
        // (error:Response)=>{
        //   if(error.status===404){
        //     alert("file Already deleted")
        //   }else{
        //     console.log(error)
        //   }
        // }
        (error:Response)=>{
          if (error instanceof NotFoundError){
            alert("already deleted file")
            console.log(error)

          }else{
            console.log(error)
          }

        }
      )
  }
  ngOnInit() {
    this.service.getPost()
      .subscribe(response=>{
        this.posts=response;

      })
  }
}
