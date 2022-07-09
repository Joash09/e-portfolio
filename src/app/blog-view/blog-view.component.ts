import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from '../theme.service';

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
    private _themeService: ThemeService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(this._route.params.pipe(
      map(params => params['id']),
      concatMap((id: string) => {
        const path = 'assets/blog-posts/' + id + '.html';
        return this._httpClient.get(path, {responseType: "text"});
      })
    ).subscribe((response) => {
      this.content = this._sanitizer.bypassSecurityTrustHtml(response);
    }));

    this.subscriptions.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
