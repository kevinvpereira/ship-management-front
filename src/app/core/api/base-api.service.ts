import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBaseEntity } from '@core/interfaces/base-entity.interface';
import { IFilter } from '@core/interfaces/filter.interface';
import { IResult } from '@core/interfaces/result.interface';
import { LoadingService } from '@core/service/loading.service';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService<Entity> {
  protected url!: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly loading: LoadingService
  ) {}

  getById(id: string) {
    this.loading.show();

    return this.httpClient
      .get<IResult<Entity>>(`${this.apiUrl}/${id}`)
      .pipe(finalize(() => this.loading.hide()));
  }

  listAll() {
    this.loading.show();

    return this.httpClient
      .get<IResult<Entity[]>>(this.apiUrl)
      .pipe(finalize(() => this.loading.hide()));
  }

  listPaged(filter: IFilter = { skip: 0, take: 10 }) {
    let params = new HttpParams();
    for (const key in filter) {
      const filterKey = key as keyof IFilter;
      if (filter[filterKey]) {
        params = params.append(filterKey, filter[filterKey]!.toString().trim());
      }
    }

    this.loading.show();

    return this.httpClient
      .get<IResult<Entity[]>>(`${this.apiUrl}/paged`, { params: params })
      .pipe(finalize(() => this.loading.hide()));
  }

  add(entity: IBaseEntity) {
    this.loading.show();
    delete entity.id;

    return this.httpClient
      .post<IResult<Entity>>(this.apiUrl, entity)
      .pipe(finalize(() => this.loading.hide()));
  }

  update(entity: IBaseEntity) {
    this.loading.show();

    return this.httpClient
      .put<IResult<Entity>>(this.apiUrl, entity)
      .pipe(finalize(() => this.loading.hide()));
  }

  remove(id: string) {
    this.loading.show();

    return this.httpClient
      .delete<IResult<boolean>>(`${this.apiUrl}/${id}`)
      .pipe(finalize(() => this.loading.hide()));
  }

  get apiUrl() {
    return `${environment.apiUrl}/${this.url}`;
  }
}
