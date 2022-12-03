import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleDarkTheme = new EventEmitter<boolean>();



  isDarkTheme: boolean = false;
  isSigned: boolean = false;

  onChangeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.toggleDarkTheme.emit(this.isDarkTheme);
  }
}
