import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastTypeEnum } from '@core/constants/toast-type.enum';
import { LoadingService } from '@core/service/loading.service';
import { ToastService } from '@core/service/toast.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService,
    private toastService: ToastService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err) => this.handleError(err)));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Display the message.
      this.toastService.open(
        `An error occurred: ${error.error.message}`,
        ToastTypeEnum.Error
      );
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (error?.error?.messages) {
        error.error.messages.forEach((message: string) =>
          this.toastService.open(message, ToastTypeEnum.Error)
        );
      }

      if (error.status === 404) {
        this.toastService.open('Not Found', ToastTypeEnum.Error);
      }
    }

    this.loadingService.hide();

    return throwError(() => error);
  }
}
