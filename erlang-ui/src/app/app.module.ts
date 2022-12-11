import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    ProjectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
