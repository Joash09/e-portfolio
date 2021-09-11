import { Component } from '@angular/core';
import { ThemeService } from './theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
	darkMode: boolean;

	constructor(private themeService: ThemeService) {
		themeService.darkModeChange.subscribe(result => {
			this.darkMode = result;
		});
	}
}
