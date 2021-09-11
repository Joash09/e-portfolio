import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map, concatMap, tap } from 'rxjs/operators';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public entries: BlogEntry[];
  public blogEntry: BlogEntry;
  _http: HttpClient;

	faCamera = faCamera;

  constructor(private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;

    this.route.params.pipe(
      map(params => params['id']), // Returns URL parameter observable
      concatMap(id => this.getBlog(id, baseUrl)), // Returns observable BlogEntries
    ).subscribe(result => this.entries = result);

   }

   getBlog(id: number, baseUrl: string) {
     console.log(baseUrl + 'controller/blog/' + id);
     return this._http.get<BlogEntry[]>(baseUrl + 'controller/blog/' + id);
   }

  ngOnInit( ) { }
}

interface BlogEntry {
  title: string;
  content: string;
	thumbnailLink: string;
}
