export interface IResult<T> {
  data: T;
  success?: boolean;
  count?: number;
  messages?: string[];
}
