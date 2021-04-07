import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map, concatMap, tap } from 'rxjs/operators';
import marked from 'marked';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public entries : BlogEntry[];
  public blogEntry : BlogEntry;
  _http : HttpClient;

  constructor(private route : ActivatedRoute, http : HttpClient, @Inject('BASE_URL') baseUrl : string) {
    this._http = http;

    // http.get<BlogEntry[]>(baseUrl+'controller/blog/1').subscribe(result => this.entries = result);
    this.route.params.pipe(
      map(params => params['id']), 
      concatMap(id => {return this.getBlog(id, baseUrl)}), // Returns another observable
      tap(result => this.entries = result.map(this.renderText)) // Convert markdown to HTML
    ).subscribe(result => this.entries = result);

   }

   getBlog(id : number, baseUrl : string){
     console.log(baseUrl+"controller/blog/"+id);
     return this._http.get<BlogEntry[]>(baseUrl+'controller/blog/'+id);
   }

   renderText(item: BlogEntry){
     return item.content = marked(item.content);
   }

  ngOnInit( ) { }
}

interface BlogEntry {
  title : string,
  content : string
}