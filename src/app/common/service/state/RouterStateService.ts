import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterStateService 
{
  // Router DI
  private router = inject(Router);

  //=== ! Get isCurrentRoute value ===//
  isCurrentRoute(segment: string): boolean 
  {
    // Logger
    console.log("Current route: " + this.router.url); 
    // control value when page loaded for the first time.
    return this.router.url.endsWith(segment);
  }

  // control value will be activated not only for the first time but also everytimes this page opened
  /**
   * How does it works?
   * this method request a callback that has value of url with type of string
   * this method will return router.event.subscribe with 'this.route.url' as observed 
   */
  subscribeRoute(callback: (url: string) => void)
  {
    return this.router.events.subscribe(event => 
    {
      if (event instanceof NavigationEnd) 
      {
        callback(this.router.url);
      }
    })
  }

}
