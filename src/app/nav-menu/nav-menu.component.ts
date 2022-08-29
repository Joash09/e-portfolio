import { Component, OnDestroy, OnInit } from '@angular/core';
import { faEnvelope, faRocket, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {

  isExpanded = false;
  isDark = false;
  faRocket = faRocket;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faMoon = faMoon;
  faSun = faSun;

  subscription = new Subscription();

  constructor(private _themeService: ThemeService) { }

  ngOnInit(): void {
    this.subscription.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

}
