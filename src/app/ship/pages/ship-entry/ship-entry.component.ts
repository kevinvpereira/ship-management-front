import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipApiService } from '@core/api/ship-api.service';
import { ToastService } from '@core/service/toast.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-ship-entry',
  templateUrl: './ship-entry.component.html',
  styleUrls: ['./ship-entry.component.scss'],
})
export class ShipEntryComponent implements OnInit {
  form!: FormGroup;
  isNew = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly toastService: ToastService,
    private readonly shipApiService: ShipApiService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.isNew = this.router.url.includes('new');
    if (!this.isNew) {
      this.activatedRoute.data.pipe(take(1)).subscribe((data) => {
        if (data['ship']) {
          this.form.patchValue(data['ship']);
        }
      });
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const ship = this.form.value;
    const request = this.isNew
      ? this.shipApiService.add(ship)
      : this.shipApiService.update(ship);

    request.pipe(take(1)).subscribe(() => {
      this.toastService.open('Ship saved successfully!');
      this.router.navigate(['/ship']);
    });
  }

  private initForm() {
    this.form = this.fb.group({
      id: [undefined],
      name: [undefined, [Validators.required]],
      length: [
        undefined,
        [Validators.required, Validators.min(5), Validators.max(600)],
      ],
      width: [
        undefined,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      code: [undefined, [Validators.required]],
    });
  }
}
