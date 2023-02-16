import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPagination } from '@core/interfaces/pagination.interface';
import { IResult } from '@core/interfaces/result.interface';
import { IShip } from '@core/interfaces/ship.interface';

@Component({
  selector: 'app-ship-table',
  templateUrl: './ship-table.component.html',
  styleUrls: ['./ship-table.component.scss'],
})
export class ShipTableComponent {
  @Input() datasource!: IResult<IShip[]>;
  @Output() pageChange = new EventEmitter<IPagination>();
  @Output() removeChange = new EventEmitter<IShip>();

  displayedColumns: string[] = ['name', 'code', 'length', 'width', 'actions'];

  remove(ship: IShip) {
    this.removeChange.emit(ship);
  }

  changePage(pagination: IPagination) {
    this.pageChange.emit(pagination);
  }
}
