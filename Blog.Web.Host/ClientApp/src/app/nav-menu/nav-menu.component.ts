import { Component } from '@angular/core';
import { faEnvelope, faRocket, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from '../theme-service/theme.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  faRocket = faRocket;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
	faMoon = faMoon;

	constructor(private themeService: ThemeService) {
	}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

	toggleTheme() {
		this.themeService.toggleTheme();
		console.log(this.themeService.darkMode);
	}
}
