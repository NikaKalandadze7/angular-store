import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MatIconModule, RouterModule, MatBadgeModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
