import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShip } from '@core/interfaces/ship.interface';
import { LoadingService } from '@core/service/loading.service';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export class ShipApiService extends BaseApiService<IShip> {
  constructor(
    private readonly http: HttpClient,
    private readonly loadingService: LoadingService
  ) {
    super(http, loadingService);
    this.url = 'Ship';
  }
}
