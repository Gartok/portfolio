import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleComponent } from './particle/particle.component';
import { ParticlesModule } from 'angular-particle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ParticlesModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    ParticleComponent, ParticlesModule, BrowserAnimationsModule,
    MatIconModule
  ],
  declarations: [ParticleComponent]
})
export class SharedModule { }
