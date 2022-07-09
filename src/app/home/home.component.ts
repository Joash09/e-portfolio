import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost, BlogsService } from '../blogs.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  posts: BlogPost[] = [];
  isDark = false;
  subscriptions = new Subscription();

  constructor(private _blogService: BlogsService,
             private _themeService: ThemeService) { }

  ngOnInit(): void {

    this.posts = this._blogService.BlogPosts;

    this.subscriptions.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
