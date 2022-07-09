import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _darkMode = false;
  private _darkMode$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  isDarkMode$(): Observable<boolean> {
    return this._darkMode$;
  }

  toggleTheme() {
    this._darkMode = !this._darkMode;
    this._darkMode$.next(this._darkMode);
  }

}
