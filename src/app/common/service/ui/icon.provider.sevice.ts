import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconProviderService 
{

  // toggle controller = var: string
  // Inject all parent that called app-icon with 
  // set [provider]="toggle logic with tenary (?) operator" to all app-icon tag
  private provider = "hugeIcon";

  public iconProvider(): string
  {
    console.log("Icon provider = " + this.provider);
    return this.provider;
  }

}
