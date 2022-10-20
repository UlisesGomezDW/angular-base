import { Injectable } from '@angular/core';
import { Info } from './../../app.types';

@Injectable()
export class UserService {
  private _data: Info[] = [];

  get getData(): Info[] {
    return [...this._data];
  }

  addItem(event: Info) {
    this._data.push(event);
  }

  constructor() {}
}
