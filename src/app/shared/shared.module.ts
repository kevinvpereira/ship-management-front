import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from './components/pagination/pagination.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

const components = [PaginationComponent, DeleteModalComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatDialogModule,
    MatPaginatorModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, ...components],
})
export class SharedModule {}
