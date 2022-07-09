import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';
// import { ThemeService } from '../../../theme.service.ts';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {

  isDark = false;
  subscriptions = new Subscription();

  constructor(private _themeService: ThemeService){
  }

  ngOnInit(): void {
    this.subscriptions.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
