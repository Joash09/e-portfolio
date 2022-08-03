import { Component, OnInit, Renderer2, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-jispy',
  templateUrl: './jispy.component.html',
  styleUrls: ['./jispy.component.css']
})
export class JispyComponent implements OnInit, OnDestroy {

  isDark = false;
  subscription = new Subscription();

  constructor(private _render: Renderer2,
              @Inject(DOCUMENT) private _document: Document,
              private _themeService: ThemeService
             ) { }

  ngOnInit(): void {

    this.subscription.add(this._themeService.isDarkMode$().subscribe((result: boolean) => {
      this.isDark = result;
    }));

    this._loadScript('jispy_overrides');
    this._loadScript('jispy');
  }

  ngOnDestroy(): void {
    this._document.getElementById('jispy_overrides')?.remove();
    this._document.getElementById('jispy')?.remove();

    this.subscription.unsubscribe();
  }

  private _loadScript(name: string) {

    if (this._document.getElementById(name)) { return; }

    let script = this._render.createElement('script') as HTMLScriptElement;
    script.id = name;
    script.type = 'text/javascript';
    script.src = 'assets/jispy/'+name+'.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('Script loaded')
    }
    this._render.appendChild(this._document.body, script);

  }

}
