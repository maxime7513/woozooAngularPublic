import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader: boolean = true;
  private current = new BehaviorSubject(this.loader);
  currentLoading: Observable<boolean> = this.current.asObservable();
  constructor() {}

  change() {
    this.current.next(false);
  }
  
}
