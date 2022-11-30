import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'erlang-ui';
  darkTheme: boolean = false;

  onToggleDarkTheme(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
  }
}
