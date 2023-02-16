import { IBaseEntity } from './base-entity.interface';
import { IFilter } from './filter.interface';

export interface IShip extends IBaseEntity {
  name: string;
  code: string;
  length: number;
  width: number;
}

export interface IShipFilter extends IFilter {
  name?: string;
  code?: string;
}
