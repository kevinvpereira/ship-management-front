import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { ShipApiService } from '@core/api/ship-api.service';
import { IShip } from '@core/interfaces/ship.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipResolver implements Resolve<IShip> {
  constructor(
    private readonly router: Router,
    private readonly shipApiService: ShipApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IShip> {
    const id = route.params['id'];

    return this.shipApiService.getById(id).pipe(
      map((result) => result.data),
      catchError((error) => {
        this.router.navigate(['/ship']);
        return of(error);
      })
    );
  }
}
