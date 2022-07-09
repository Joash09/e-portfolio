import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './theme.service';
import { faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  faAngular = faAngular;
  faBootstrap = faBootstrap;

  title = 'static-portfolio';

  subscription = new Subscription();
  isDark = false;

  constructor(private _themeService: ThemeService) {

  }

  ngOnInit(): void {
    this.subscription.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
