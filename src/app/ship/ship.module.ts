import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ShipRoutingModule } from './ship.routing';

import { ShipListComponent } from './pages/ship-list/ship-list.component';
import { ShipEntryComponent } from './pages/ship-entry/ship-entry.component';
import { ShipTableComponent } from './components/ship-table/ship-table.component';
import { ShipFiltersComponent } from './components/ship-filters/ship-filters.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    ShipListComponent,
    ShipEntryComponent,
    ShipTableComponent,
    ShipFiltersComponent,
  ],
  imports: [
    CommonModule,
    ShipRoutingModule,
    SharedModule,

    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,

    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers:[
    provideNgxMask()
  ]
})
export class ShipModule {}
