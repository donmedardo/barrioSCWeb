import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../layouts/navbar/navbar/navbar.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
