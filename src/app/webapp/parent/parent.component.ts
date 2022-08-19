import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {

  isDark = false;
  subscriptions = new Subscription();

  constructor(private _themeService: ThemeService,
              private _titleService: Title,
              private _metaService:  Meta
             ){
  }

  ngOnInit(): void {

    this._titleService.setTitle("Web Apps");
    this._metaService.updateTag({ name: 'description', content: 'Showcasing live web applications spanning a broad range of interests in computer science' }, "name='description'");

    this.subscriptions.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
