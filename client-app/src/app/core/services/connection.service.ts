import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  getLimit = new BehaviorSubject<number>(1);
  getLimit$ = this.getLimit.asObservable();

  constructor() { }

  setLimitData(count: number) {
    this.getLimit.next(count);
  }
}
