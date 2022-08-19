import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost, BlogsService } from '../blogs.service';
import { ThemeService } from '../theme.service';
import { Title, Meta } from '@angular/platform-browser';

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
             private _themeService: ThemeService,
             private _titleService: Title,
             private _metaService: Meta) { }

  ngOnInit(): void {

    this._titleService.setTitle("Joash Naidoo");
    this._metaService.updateTag({ name: 'description', content: 'A personal portfolio website where I document various topics mainly in technology and host interesting web app demos'}, "name='description'");

    this.posts = this._blogService.BlogPosts;

    this.subscriptions.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
