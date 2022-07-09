import { Component, OnInit } from '@angular/core';
import { faEnvelope, faRocket, faMoon, faGift } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  faRocket = faRocket;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faMoon = faMoon;

  constructor(private _themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

}
