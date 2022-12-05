import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _router: Router) {}

  title = 'erlang-ui';
  darkTheme: boolean = false;

  onToggleDarkTheme(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
  }
  onRouteToLogin() {
    this._router.navigate(['login']);
  }
  onRouteToHome() {
    this._router.navigate(['']);
  }
}
