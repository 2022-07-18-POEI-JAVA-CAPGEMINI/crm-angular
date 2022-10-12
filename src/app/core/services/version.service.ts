import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public numVersion$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {
    // this.numVersion$ = new BehaviorSubject<number>(1);
  }

  public incrementVersion(): void {
    this.numVersion$.next(this.numVersion$.value + 1);
  }
}
