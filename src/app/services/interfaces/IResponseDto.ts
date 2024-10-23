
export interface IResponseDto<T> {
  status: number;
  date: Date;
  message: string
  data: T;
}
