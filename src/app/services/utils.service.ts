import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private router: Router) {

  }

  get activeRoute() {
    return this.router.routerState.snapshot.url;
  }
}
