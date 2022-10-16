import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CreateCardPageComponent } from '../../youtube/pages/create-card-page/create-card-page.component';

@Injectable({
  providedIn: 'root',
})
export class LeavePageGuard implements CanDeactivate<CreateCardPageComponent> {
  canDeactivate(
    component: CreateCardPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.createService.card.dirty) {
      if (component.createService.card.dirty && confirm('Are you sure? You\'ll lose unsaved data')) {
        return true;
      }
    }
    return true;
  }
}
