export class DataSource<T> {
  private _data: T[] = [];

  constructor(data: T[]) {
    this._data = data;
  }

  public getData(): T[] {
    return this._data;
  }

  public addData(data: T[]): void {
    this._data = [...this._data, ...data];
  }
}
