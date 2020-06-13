import { Injectable } from '@angular/core';
import Resource from './resource.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockerService<T extends Resource> {

  private _apiData = new Array<T>();
  private _autoIncrementId = 1;

  private _generateId(data: T): T {
    data.id = this._autoIncrementId;
    this._autoIncrementId = this._autoIncrementId + 1;

    return data;
  }

  create(data: T): Observable<T> {
    this._apiData = [...this._apiData, this._generateId(data)];
    return of(data);
  }

  index(): Observable<T[]> {
    return of(this._apiData);
  }

  show(id: number): Observable<T> {
    return of(this._apiData.find(elem => elem.id == id));
  }

  update(data: T): Observable<T> {
    this._apiData = [
      ...this._apiData.filter(elem => elem.id != data.id),
      data
    ].sort((a, b) => a.id - b.id);
    return of(data);
  }

  destroy(id: number): Observable<void> {
    this._apiData = this._apiData.filter(elem => elem.id != id);
    return of(null);
  }
}
