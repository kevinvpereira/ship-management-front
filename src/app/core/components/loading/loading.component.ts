import { Component } from '@angular/core';
import { LoadingService } from '@core/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  constructor(public readonly loadingService: LoadingService) {}
}
