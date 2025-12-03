import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  constructor(private router: Router) {}; // Router DI

  //=== ! Get isCurrentRoute value ===//
  isCurrentRoute(segment: string): boolean {
    // control value when page loaded for the first time.
    console.log("Current route: " + this.router.url); // remove at prod
    return this.router.url.endsWith(segment);
  }

  // control value will be activated not only for the first time but also everytimes this page opened
  /**
   * How does it works?
   * this method request a callback that has value of url with type of string
   * this method will return router.event.subscribe with 'this.route.url' as observed 
   */
  subscribeRoute(callback: (url: string) => void) {
    return this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        callback(this.router.url);
      }
    })
  }

}
