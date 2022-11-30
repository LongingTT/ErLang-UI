import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'erlang_dog',
      sanitizer.bypassSecurityTrustResourceUrl('assets/erlang_dog.svg')
    );
  }

  isDarkTheme: boolean = false;
  isSigned: boolean = false;

  onChangeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.toggleDarkTheme.emit(this.isDarkTheme);
  }
}
