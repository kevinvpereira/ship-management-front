import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IChip } from '@core/interfaces/chip.interface';

@Component({
  selector: 'app-ship-filters',
  templateUrl: './ship-filters.component.html',
  styleUrls: ['./ship-filters.component.scss'],
})
export class ShipFiltersComponent {
  @Output() filterChange = new EventEmitter<any>();

  form!: FormGroup;
  chips: IChip[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  search() {
    const filter = this.form.value;
    this.updateChips();

    this.filterChange.emit(filter);
  }

  removeChip(chip: IChip) {
    this.form.get(chip.field)?.reset();

    this.search();
  }

  clearFilters() {
    this.form.reset();
    this.search();
  }

  private updateChips() {
    const filter = this.form.value;
    this.chips = [];

    for (const key in filter) {
      if (filter[key]) {
        this.chips.push({ field: key, value: filter[key] });
      }
    }
  }

  private initForm() {
    this.form = this.fb.group({
      name: [],
      code: [],
    });
  }
}
