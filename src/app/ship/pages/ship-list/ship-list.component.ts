import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ShipApiService } from '@core/api/ship-api.service';
import { IPagination } from '@core/interfaces/pagination.interface';
import { IResult } from '@core/interfaces/result.interface';
import { IShipFilter, IShip } from '@core/interfaces/ship.interface';
import { ToastService } from '@core/service/toast.service';
import { DeleteModalComponent } from '@shared/components/delete-modal/delete-modal.component';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss'],
})
export class ShipListComponent implements OnInit {
  filter!: IShipFilter;

  datasource$ = new BehaviorSubject<IResult<IShip[]>>({
    data: [],
    count: 0,
  });

  constructor(
    private readonly dialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute,
    private readonly toastService: ToastService,
    private readonly shipApiService: ShipApiService
  ) {}

  ngOnInit(): void {
    this.initFilter();

    this.activatedRoute.data.pipe(take(1)).subscribe((data) => {
      if (data['ships']) {
        this.datasource$.next(data['ships']);
      }
    });
  }

  changePage(pagination: IPagination) {
    this.filter = {
      ...this.filter,
      skip: pagination.skip,
      take: pagination.take,
    };

    this.getShipsByFilter();
  }

  search(newFilter: IShipFilter) {
    const pageSize = this.filter.take;
    this.filter = {
      ...newFilter,
      skip: 0,
      take: pageSize,
    };

    this.getShipsByFilter();
  }

  remove(ship: IShip) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: { name: ship.name },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.shipApiService
            .remove(ship.id!)
            .pipe(take(1))
            .subscribe(() => {
              this.toastService.open('Ship removed successfully!');
              this.getShipsByFilter();
            });
        }
      });
  }

  private getShipsByFilter() {
    this.shipApiService
      .listPaged(this.filter)
      .pipe(take(1))
      .subscribe((result) => this.datasource$.next(result));
  }

  private initFilter() {
    this.filter = {
      skip: 0,
      take: 10,
    };
  }
}
