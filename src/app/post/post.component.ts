import { BadError } from './../common/bad-error';
import { AppError } from './../common/app-error';
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
    this.posts.splice(0,0,post)


    this.service.create(JSON.stringify(post))
      .subscribe(response=>{
        post['id']=response['id']
        
      },
      (error:AppError)=>{
        this.posts.splice(0,1);

        if (error instanceof BadError)
          alert("bad error")
        else 
          alert("common Error")
      }
      )
    element.value=""
  }
  updatePost(post){
    this.service.update(post)
      .subscribe(response=>{
          console.log(response)
        },
        (error)=>{
          throw error;
        }
        )
  }


  deletePost(post){
    let index=this.posts.indexOf(post)
    this.posts.splice(index,1)

    this.service.delete(post)
      .subscribe(
        response=>{
          
          console.log(response)
        },
        // (error:Response)=>{
        //   if(error.status===404){
        //     alert("file Already deleted")
        //   }else{
        //     console.log(error)
        //   }
        // }
        (error:AppError)=>{

          this.posts.splice(index,0,post)
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
    this.service.get()
      .subscribe(response=>{
        this.posts=response;

      })
  }
}
