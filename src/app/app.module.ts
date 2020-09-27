import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDirective } from './modules/layouts/navbar/navbar.directive';
import { FootbarDirective } from './modules/layouts/footbar/footbar.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDirective,
    FootbarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
