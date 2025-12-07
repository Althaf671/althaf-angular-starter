import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconProviderService 
{

  // toggle controller = var: string
  // Inject all parent that called app-icon with 
  // set [provider]="toggle logic with tenary (?) operator" to all app-icon tag
  public setIconProvider = signal("hugeIcon");

  /**
   * name
   */

}
