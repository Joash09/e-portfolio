import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../theme-service/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public blogsInfo: FrontPageBlogInfo[];
	public darkMode: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private themeService: ThemeService) {
		
		this.themeService.darkModeChange.subscribe(result => {
			this.darkMode = result;
		});

    http.get<FrontPageBlogInfo[]>(baseUrl + 'controller/blogs').subscribe(result => {
      this.blogsInfo = result;
    });
  }
}

interface FrontPageBlogInfo {
  id: number;
  title: string;
  dateModified: string;
  thumbnail: any;
}
