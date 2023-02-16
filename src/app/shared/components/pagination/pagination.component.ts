import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IPagination } from '@core/interfaces/pagination.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() total = 0;
  @Input() pageSize = 10;
  @Input() pageOptions = [10, 20, 30, 50];

  @Output() pageChange = new EventEmitter<IPagination>();

  changePage(event: PageEvent) {
    this.pageChange.emit({
      skip: event.pageIndex * event.pageSize,
      take: event.pageSize,
    });
  }
}
