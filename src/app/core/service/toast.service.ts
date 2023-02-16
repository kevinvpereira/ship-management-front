import { Injectable } from '@angular/core';
import { ToastTypeEnum } from '@core/constants/toast-type.enum';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private readonly toastrService: ToastrService) {}

  open(message: string, type: ToastTypeEnum = ToastTypeEnum.Success) {
    switch (type) {
      case ToastTypeEnum.Success:
        this.toastrService.success(message);
        break;
      case ToastTypeEnum.Information:
        this.toastrService.info(message);
        break;
      case ToastTypeEnum.Warning:
        this.toastrService.warning(message);
        break;
      case ToastTypeEnum.Error:
        this.toastrService.error(message);
        break;
    }
  }
}
