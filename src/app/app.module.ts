import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDirective } from './modules/layouts/navbar/navbar.directive';
import { FootbarDirective } from './modules/layouts/footbar/footbar.directive';
import { NavbarComponent } from './modules/layouts/navbar/navbar/navbar.component';
import {HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NegociosComponent } from './modules/negocios/negocios.component';
import { HistoriaComponent } from './modules/historia/historia.component';
import { DirectivaComponent } from './modules/directiva/directiva.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDirective,
    FootbarDirective,
    NavbarComponent,
    NegociosComponent,
    HistoriaComponent,
    DirectivaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
