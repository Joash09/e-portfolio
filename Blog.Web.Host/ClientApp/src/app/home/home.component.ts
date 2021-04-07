import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public blogsInfo : FrontPageBlogInfo[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    http.get<FrontPageBlogInfo[]>(baseUrl + 'controller/blogs').subscribe(result => {
      this.blogsInfo = result;
    });
  }
}

interface FrontPageBlogInfo {
  id : number,
  title : string,
  dateModified : string,
  thumbnail : any
}
