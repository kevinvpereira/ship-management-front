import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StaticPagesRoutingModule } from './static-pages.routing';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [CommonModule, StaticPagesRoutingModule],
})
export class StaticPagesModule {}
