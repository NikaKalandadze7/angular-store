import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../app.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
})
export class HomeModule {}
