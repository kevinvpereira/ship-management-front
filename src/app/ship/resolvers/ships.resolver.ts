import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { ShipApiService } from '@core/api/ship-api.service';
import { IResult } from '@core/interfaces/result.interface';
import { IShip } from '@core/interfaces/ship.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipsResolver implements Resolve<IResult<IShip[]>> {
  constructor(
    private readonly router: Router,
    private readonly shipApiService: ShipApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IResult<IShip[]>> {
    return this.shipApiService.listPaged().pipe(
      catchError((error) => {
        this.router.navigate(['/']);
        return of(error);
      })
    );
  }
}
