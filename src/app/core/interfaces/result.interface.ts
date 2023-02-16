export interface IResult<T> {
  data: T;
  count?: number;
  messages?: string[];
}
