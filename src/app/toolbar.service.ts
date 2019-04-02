import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private shouldShowToolbarTranslucentSource = new Subject<boolean>();
  shouldShowToolbarTranslucent$ = this.shouldShowToolbarTranslucentSource.asObservable();

  constructor() {
  }

  hideToolbar() {
    this.shouldShowToolbarTranslucentSource.next(true);
  }

  showToolbar() {
    this.shouldShowToolbarTranslucentSource.next(false);
  }
}
