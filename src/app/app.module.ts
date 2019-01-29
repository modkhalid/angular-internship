import { AuthService } from './services/auth.service';
import { GithubFollowersService } from './services/github-followers.service';
import { PostService } from './services/post.service';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { EmailService } from './email.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { InputDirective } from './input.directive';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { GlobalError } from './common/global-error';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubPostComponent } from './github-post/github-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NabarComponent } from './nabar/nabar.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './services/order.service';
import { PhpService } from './services/php.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    InputDirective,
    ContactComponent,
    SignupComponent,
    PostComponent,
    HomeComponent,
    GithubComponent,
    GithubProfileComponent,
    GithubPostComponent,
    NotFoundComponent,
    NabarComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    NavbarComponent,

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"",
        component:HomeComponent
      },
      {
        path:'php',
        component:GithubPostComponent
      },
      {
        path:"github/:id/:username",
        component:GithubProfileComponent
      },
      {
        path:"github",
        component:GithubComponent
      },
      
      {
        path:"github/post",
        component:PostComponent
      },
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'no-access',
        component:NoAccessComponent
      },
      {
        path:"**",
        component:NotFoundComponent
      },
    ])


  ],
  providers: [
    CourseService,
    EmailService,
    PostService,
    {provide:ErrorHandler,useClass:GlobalError},
    GithubFollowersService,
    AuthService,
    OrderService,
    PhpService
    


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
