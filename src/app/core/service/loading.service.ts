import { Injectable } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly router: Router) {
    this.addLoadingToPageChange();
  }

  show() {
    this.loading$.next(true);
  }

  hide() {
    this.loading$.next(false);
  }

  private addLoadingToPageChange() {
    this.router.events
      .pipe(filter((e) => e instanceof ResolveStart))
      .subscribe(() => this.show());

    this.router.events
      .pipe(filter((e) => e instanceof ResolveEnd))
      .subscribe(() => this.hide());
  }
}
