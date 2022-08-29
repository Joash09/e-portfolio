import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, tap, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Title, Meta } from '@angular/platform-browser';
import { ThemeService } from '../theme.service';
import { BlogsService } from '../blogs.service';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit, OnDestroy {

  content: any;
  isDark = false;
  subscriptions = new Subscription();

  constructor(
    private _sanitizer: DomSanitizer,
    private _route: ActivatedRoute,
    private _httpClient: HttpClient,
    private _themeService: ThemeService,

    private _blogService: BlogsService,
    private _titleService: Title,
    private _metaTagService: Meta,

    @Inject(PLATFORM_ID) private _platformId:  string
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));

    // if (!isPlatformServer(this._platformId)) return;

    const posts = this._blogService.BlogPosts;
    this.subscriptions.add(this._route.params.pipe(
      map(params => params['id']),

      // Set meta data
      tap((id: string) => {
        const post = posts.find(x => x.id == id);
        if (post) {
          this._titleService.setTitle(post.title);
          this._metaTagService.updateTag({ name: 'date', content: post.date }, "name='date'");
          this._metaTagService.updateTag({ name: 'keywords', content: post.keywords.toString() }, "name='keywords'");
          this._metaTagService.updateTag({ name: 'description', content: post.description }, "name='description'");
          this._metaTagService.updateTag({ name: 'image', content: 'https://www.joashnaidoo.com/assets/blog-thumbnails/'+post.thumbnail }, "name='image'");
        }

      }),

      // Load HTML
      concatMap((id: string) => {
        let path = '';
        if (isPlatformServer(this._platformId)) {
          path = 'http://localhost:3000/'
        }
        path = path + 'assets/blog-posts/' + id + '.html';
        return this._httpClient.get(path, {responseType: "text"});
      })
    ).subscribe((response) => {
      this.content = this._sanitizer.bypassSecurityTrustHtml(response);
    }));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();

    this._metaTagService.removeTag("name='keywords'");
    this._metaTagService.removeTag("name='date'");
    this._metaTagService.removeTag("name='image'");
  }

}
