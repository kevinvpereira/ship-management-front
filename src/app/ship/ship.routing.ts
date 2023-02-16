import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipEntryComponent } from './pages/ship-entry/ship-entry.component';
import { ShipListComponent } from './pages/ship-list/ship-list.component';
import { ShipResolver } from './resolvers/ship.resolver';
import { ShipsResolver } from './resolvers/ships.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShipListComponent,
    resolve: { ships: ShipsResolver },
  },
  {
    path: 'new',
    component: ShipEntryComponent,
  },
  {
    path: ':id',
    component: ShipEntryComponent,
    resolve: { ship: ShipResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShipRoutingModule {}
