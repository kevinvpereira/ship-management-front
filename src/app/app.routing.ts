import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleanLayoutComponent } from '@core/layouts/clean-layout/clean-layout.component';
import { CompleteLayoutComponent } from '@core/layouts/complete-layout/complete-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CleanLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./static-pages/static-pages.module').then(
            (m) => m.StaticPagesModule
          ),
      },
    ],
  },
  {
    path: 'ship',
    component: CompleteLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ship/ship.module').then((m) => m.ShipModule),
      },
    ],
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
