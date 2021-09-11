import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

	darkMode = false;
	darkModeChange = new BehaviorSubject<boolean>(false);

  constructor() {
		/* this.darkModeChange.subscribe((value) => {
			this.darkMode = value;
		});*/
	}

	toggleTheme() {
		this.darkMode = !this.darkMode;
		this.darkModeChange.next(this.darkMode);
	}
}
