import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent, WelcomeComponent]
})
export class HomeModule { }
