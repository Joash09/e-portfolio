import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme-service/theme.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

	darkMode: boolean;

  constructor(private themeService: ThemeService) {
		themeService.darkModeChange.subscribe((result) => {
			this.darkMode = result;
		});
	}

  ngOnInit() {
  }

}
